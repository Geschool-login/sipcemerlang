

import React from 'react';
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';
import './App.css';
import Home from './Home'
import Login from './view/Login'
import Register from './view/Register-students'
import Register2 from './view/Register-teacher'
import Forgot from './view/Forgot'
import Error404 from './Error404'
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";

import baseColor from '@material-ui/core/colors/blueGrey';
let theme = createTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: baseColor,
  }


});


function App() {





  return (
    <MuiThemeProvider theme={theme}>
      <Router >

        <Switch>
          <Route exact path="/register/" component={Register} />
          <Route exact path="/register/teacher/" component={Register2} />
          <Route exact path="/" ><Login /></Route>
          <Route exact path="/forgot" ><Forgot /></Route>
          <Route exact path="/home" ><Home /></Route>
          <Route ><Error404 /></Route>
        </Switch>

      </Router>
    </MuiThemeProvider>
  );
}

export default App;

