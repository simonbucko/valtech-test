import React, { useEffect } from "react";
import Main from "./components/Main/Main";
import Aside from "./components/Aside/Aside";
import Navbar from "./components/Navbar/Navbar";

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
    <Container maxWidth="lg">
      <Navbar />
      <Grid container>
        <Aside />
        <Main />
      </Grid>
    </Container>
  );
};

export default App;
