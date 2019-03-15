import React, { Component } from 'react';
import './styles/App.css';

//import StudentForm from './components/Student Components/StudentForm';
import Signup from './components/Signup';
import AddStudent from './components/AddStudent';
import Students from './components/Students';
import Login from './components/Login';
import Student from './components/Student';
import Grade from './components/Grade';
import EditStudent from './components/EditStudent';

import { Route, NavLink, Redirect } from 'react-router-dom';


class App extends Component {
  constructor(props) {
    super(props)

  }
 logOut = () => {
   window.localStorage.clear()
   

 }


//log out redirect to log in page
//sign up redirect to log in page
//log in redirect to students page
//delete student redirect to students page
//edit redirect to student page 
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

        <br></br>

        <NavLink to='/grade'>Seach By Grade</NavLink>
        <Route exact path='/grade' component={Grade} />
          
        <Route exact path='/student/:id' render={(props) => <Student {...props}  />} />

        <Route exact path='/student/:id/edit' render={(props) => <EditStudent {...props} />} />

        <button onClick={this.logOut}>Log Out</button>

      </div>
      
      
    );
  }
}

export default App;
