import React, { useEffect } from "react";
import Main from "./components/Main/Main";
import Aside from "./components/Aside/Aside";
import Navbar from "./components/Navbar/Navbar";
import "./styles/App.css";
//redux

import { useDispatch } from "react-redux";
import { fetchData } from "./redux/actions/data";

//mui
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <>
      <Navbar />
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Aside />
          <Main />
        </Grid>
      </Container>
    </>
  );
};

export default App;
