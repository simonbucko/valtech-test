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
import Divider from "@material-ui/core/Divider";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <>
      <Navbar />
      <Container maxWidth="xl">
        <Grid container spacing={6}>
          <Aside />
          <Divider orientation="vertical" flexItem />
          <Main />
        </Grid>
      </Container>
    </>
  );
};

export default App;
