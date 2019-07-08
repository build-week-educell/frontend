import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Grade extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      searchInput: "",
      filteredStudents: []
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

  filter = () => {
    const filtered = this.state.students.filter(student => {
      return student.grade == this.state.searchInput;
    });
    this.setState({
      filteredStudents: filtered
    });
  };

  handleInputChange = event => {
    this.setState(
      {
        searchInput: event.target.value
      },
      () => this.filter()
    );
  };

  render() {
    return (
      <div>
        <h1 className="searchGrade">Search By Grade</h1>
        <div className="searchPage">
          <input
            placeholder="Enter A Grade"
            onChange={this.handleInputChange}
            value={this.state.searchInput}
            name="searchInput"
          />
          {this.state.filteredStudents.map(student => {
            return (
              <div key={student.id} className="card-panel blue-grey search">
                <Link to={`/student/${student.id}`} className="cardLinkColor">
                  <div>Name: {student.name}</div>
                  <div>Grade: {student.grade}</div>
                  <div>Status: {student.status}</div>
                  <div>Age: {student.age}</div>
                  <div>Insurance: {student.insurance}</div>
                  <div>BirthCertificate: {student.birthCertificate}</div>
                  <div>Representative: {student.representative}</div>
                  <div>Phone Number: {student.contactInfo}</div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Grade;
