import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Col
} from "reactstrap";

class EditStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      grade: 0,
      background: "",
      status: "",
      age: 0,
      insurance: false,
      insuranceExp: "",
      birthCertificate: false,
      specialNeeds: "",
      representative: "",
      contactInfo: "",
      id: null
    };
  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  componentDidMount() {
    const id = this.props.location.pathname.split("/")[2];
    axios
      .get(`https://educell.herokuapp.com/api/students/${id}`, {
        headers: { Authorization: localStorage.getItem("token") }
      })
      .then(response => {
        let student = response.data[0];
        this.setState({
          name: student.name,
          grade: student.grade,
          background: student.background,
          status: student.status,
          age: student.age,
          insurance: student.insurance,
          insuranceExp: student.insuranceExp,
          birthCertificate: student.birthCertificate,
          specialNeeds: student.specialNeeds,
          representative: student.representative,
          contactInfo: student.contactInfo,
          id: id
        });
      })
      .catch(error => console.log(error));
  }

  editStudent = event => {
    event.preventDefault(); //anytime you use on submit for a form

    const {
      name,
      grade,
      background,
      status,
      age,
      insurance,
      insuranceExp,
      birthCertificate,
      specialNeeds,
      representative,
      contactInfo
    } = this.state;

    let newStudent = {
      name,
      grade,
      background,
      status,
      age,
      insurance,
      insuranceExp,
      birthCertificate,
      specialNeeds,
      representative,
      contactInfo
    };

    axios
      .put(
        `https://educell.herokuapp.com/api/students/${this.state.id}`,
        newStudent,
        { headers: { Authorization: localStorage.getItem("token") } }
      )
      .then(response => {
        if (response.status === 200) {
          console.log(response.data);
          //if registration is succesful which is this check, then redirect to log in.
          alert("Student was updated");
          this.props.history.push("/students");
        } else {
          throw new Error(); //error if something went wrong
        }
      })
      .catch(error => {
        console.log(error);
      });
    this.props.history.push("/students");
  };
  //CJ says this is good code lol
  deleteStudent = e => {
    e.preventDefault();
    axios
      .delete(`https://educell.herokuapp.com/api/students/${this.state.id}`, {
        headers: { Authorization: localStorage.getItem("token") }
      })
      .then(response => {
        console.log(this.props.history);
        this.props.history.push("/students");
      })

      .catch(err => {
        console.log(err);
      });
  };

  //make booleans toggle button
  //status 3 radio buttons 3 options currentstudent former student and visitor
  render() {
    return (
      <div>
        <h1 className="editStudentHead">Edit Student</h1>
        <div className="editStudentPage">
          <form onSubmit={this.addStudent} className="editStudentForm">
            <FormGroup>
              <Label for="studentName" sm={2}>
                Student Name
              </Label>
              <Col>
                <input
                  type="text"
                  placeholder="Enter Name"
                  value={this.state.name}
                  onChange={this.handleInputChange}
                  name="name"
                  id="studentName"
                />
              </Col>
            </FormGroup>

            <FormGroup>
              <Label for="grade" sm={2}>
                Grade
              </Label>
              <Col>
                <input
                  type="number"
                  placeholder="grade"
                  value={this.state.grade}
                  onChange={this.handleInputChange}
                  name="grade"
                  id="grade"
                />
              </Col>
            </FormGroup>

            <FormGroup>
              <Label for="background" sm={2}>
                Background
              </Label>
              <Col>
                <input
                  type="text"
                  placeholder="Background Info"
                  value={this.state.background}
                  onChange={this.handleInputChange}
                  name="background"
                  id="background"
                />
              </Col>
            </FormGroup>

            <FormGroup>
              <Label for="status" sm={2}>
                Status
              </Label>
              <Col>
                <input
                  type="text"
                  placeholder="previous/current"
                  value={this.state.status}
                  onChange={this.handleInputChange}
                  name="status"
                  id="status"
                />
              </Col>
            </FormGroup>

            {/* //make radio buttons */}

            <FormGroup>
              <Label for="age" sm={2}>
                Age
              </Label>
              <Col>
                <input
                  type="number"
                  placeholder="Student Age"
                  value={this.state.age}
                  onChange={this.handleInputChange}
                  name="age"
                  id="age"
                />
              </Col>
            </FormGroup>

            <FormGroup>
              <Label for="insurance" sm={2}>
                Insurance
              </Label>
              <Col>
                {/* //make radio buttons */}
                <input
                  type="text"
                  placeholder="Y/N"
                  value={this.state.insurance}
                  onChange={this.handleInputChange}
                  name="insurance"
                  id="insurance"
                />
              </Col>
            </FormGroup>

            <FormGroup>
              <Label for="insuranceExp" sm={3}>
                Insurance Expiration Date
              </Label>
              <Col>
                <input
                  type="number"
                  placeholder="Example - 9/2020"
                  value={this.state.insuranceExp}
                  onChange={this.handleInputChange}
                  name="insuranceExp"
                  id="insuranceExp"
                />
              </Col>
            </FormGroup>

            <FormGroup>
              <Label for="" sm={2}>
                Birth Certificate
              </Label>
              <Col>
                <input
                  type="text"
                  placeholder="Y/N"
                  value={this.state.birthCertificate}
                  onChange={this.handleInputChange}
                  name="birthCertificate"
                  id="birthCertificate"
                />
              </Col>
            </FormGroup>

            <FormGroup>
              <Label for="" sm={3}>
                Special Needs Info
              </Label>
              <Col>
                <input
                  type="text"
                  placeholder="N/A"
                  value={this.state.specialNeeds}
                  onChange={this.handleInputChange}
                  name="specialNeeds"
                  id="specialNeeds"
                />
              </Col>
            </FormGroup>

            <FormGroup>
              <Label for="" sm={3}>
                Contact Information
              </Label>
              <Col>
                <input
                  type="text"
                  placeholder="Enter Phone Number"
                  value={this.state.contactInfo}
                  onChange={this.handleInputChange}
                  name="contactInfo"
                  id="contactInfo"
                />
              </Col>
            </FormGroup>
            <div className="submitAndDeleteButton">
              <button
                className="waves-effect waves-light btn edit"
                onClick={this.editStudent}
              >
                Submit
              </button>
              <button
                className="waves-effect waves-light btn deleteButton"
                onClick={this.deleteStudent}
              >
                Delete
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(EditStudent);
