

import React, { useEffect } from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import './App.css';
import Login from './view/Login'
import Register from './view/Register-students'
import Register2 from './view/Register-teacher'
import Forgot from './view/Forgot'
import Reset from './view/Reset'
import Error404 from './Error404'
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import AOS from 'aos'
import 'aos/dist/aos.css'


function App(props) {

  useEffect(() => {
    AOS.init({
      duration: 1500
    });
  }, []);



  return (
    <MuiThemeProvider>
      <Router >
        <Switch>
          <Route exact path="/register/" component={Register} />
          <Route exact path="/register/teacher/" component={Register2} />
          <Route exact path="/" ><Login /></Route>
          <Route exact path="/forgot" ><Forgot /></Route>
          <Route exact path="/reset" ><Reset /></Route>
          <Route ><Error404 /></Route>
        </Switch>

      </Router>
    </MuiThemeProvider>
  );
}

export default App;

