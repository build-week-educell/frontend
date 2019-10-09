import React, { Component } from "react";
import "./styles/App.css";

//import StudentForm from './components/Student Components/StudentForm';
import Signup from "./components/Signup";
import AddStudent from "./components/AddStudent";
import Students from "./components/Students";
import Login from "./components/Login";
import Student from "./components/Student";
import Grade from "./components/Grade";
import EditStudent from "./components/EditStudent";
import Navigation from "./components/Navigation";

import { Route, NavLink, Redirect } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
  }

  //log out redirect to log in page
  //sign up redirect to log in page
  //log in redirect to students page
  //delete student redirect to students page
  //edit redirect to student page
  render() {
    return (
      <div className="App">
        <Navigation />

        <Route exact path="/" component={Signup} />

        <Route exact path="/students" component={Students} />

        <Route exact path="/grade" component={Grade} />

        <Route exact path="/login" component={Login} />

        <Route exact path="/add" component={AddStudent} />

        <Route
          exact
          path="/student/:id"
          render={props => <Student {...props} />}
        />

        <Route
          exact
          path="/student/:id/edit"
          render={props => <EditStudent {...props} />}
        />
      </div>
    );
  }
}

export default App;
