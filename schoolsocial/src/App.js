import React, { Component } from 'react';
import './App.css';

import StudentForm from './components/Student Components/StudentForm';
import axios from 'axios';

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
        <button onClick={this.test}>TEST</button>
        <StudentForm />
      </div>
    );
  }
}

export default App;
