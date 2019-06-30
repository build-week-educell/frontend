//get information by id
import React, { Component } from "react";
import axios from "axios";

import { Link } from "react-router-dom";

class Students extends Component {
  constructor(props) {
    super(props);
    this.state = {
      student: {}
    };
  }

  componentDidMount() {
    const id = this.props.location.pathname.split("/")[2];

    axios
      .get(`https://educell.herokuapp.com/api/students/${id}`, {
        headers: { Authorization: localStorage.getItem("token") }
      })
      .then(response => {
        this.setState({
          student: response.data[0]
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    //console.log(this.state.student)
    return (
      <div className="card-panel blue-grey lighten-4">
        <div className="card-content">
          <div>
            <h1>Student Information</h1>
          </div>
          <div>Name: {this.state.student.name}</div>
          <div>Status: {this.state.student.status}</div>
          <div>Grade: {this.state.student.grade}</div>
          <div>Background: {this.state.student.background}</div>
          <div>SpecialNeeds: {this.state.student.specialNeeds}</div>
          <div>Age: {this.state.student.age}</div>
          <div>Insurance: {this.state.student.insurance}</div>
          <div>Insurance Exp: {this.state.student.insuranceExp}</div>
          <div>Birth Certificate: {this.state.student.birthCertificate}</div>
          <div>Representative: {this.state.student.representative}</div>
          <div>Phone Number: {this.state.student.contactInfo}</div>
          <div>
            <Link
              className="waves-effect waves-light btn edit"
              to={`/student/${this.state.student.id}/edit`}
            >
              Edit
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Students;
