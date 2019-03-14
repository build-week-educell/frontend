import React, { Component } from 'react';
import './App.css';

//import StudentForm from './components/Student Components/StudentForm';
import Signup from './components/Signup';
import AddStudent from './components/AddStudent';
import Students from './components/Students';
import Login from './components/Login';
import Student from './components/Student';
import Grade from './components/Grade';

import axios from 'axios';
import { Route, NavLink } from 'react-router-dom';


class App extends Component {

  test = event =>{
    axios
      .get('https://educell.herokuapp.com/')
      .then( response => console.log(response) )
      .catch( error => console.log(error) )
  }

  render() {
    return (
      <div className="App">
        <NavLink to='/signup'>Sign Up</NavLink>
          <Route exact path='/signup' component={Signup} />
        <br></br>
        <NavLink to='/students'>Students</NavLink>
          <Route exact path='/students' component={Students} />

        <br></br>
        <NavLink to='/login'>Login</NavLink>
          <Route exact path='/login' component={Login} />

        <br></br>

          <NavLink to='/add'>Add Student</NavLink>
            <Route exact path="/add" component={AddStudent} />
          
        <Route path='/student/:id' render={(props) => <Student {...props}  />} />

        <Route path='/student/:id/edit' render={(props) => <Student {...props} />} />

        <Route exact path='/grade' component={Grade} />

      </div>
      
      
    );
  }
}

export default App;
