import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Students extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: []
    };
  }

  componentDidMount() {
    axios
      .get("https://educell.herokuapp.com/api/students", {
        headers: { Authorization: localStorage.getItem("token") }
      })
      .then(response => {
        this.setState({
          students: response.data
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="StudentList row materialboxed">
        {this.state.students.map(student => {
          return (
            <div className="studentCard card " key={student.id}>
              <Link  className='row' to={`/student/${student.id}`}>
            
                  <div className='col s2' >{student.name}</div>
                  <div className='col s2'>{student.status}</div>
                  <div className='col s2'>{student.age}</div>
                  <div className='col s2'>{student.insurance}</div>
                  <div className='col s2'>{student.birthCertificate}</div>
                  <div className='col s2'>{student.contactInfo}</div>
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Students;
