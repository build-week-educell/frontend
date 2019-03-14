import React, { Component } from 'react';
import axios from 'axios';

class EditStudent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            grade: 0,
            background: '',
            status: '',
            age: 0,
            insurance: false,
            insuranceExp: '',
            birthCertificate: false,
            specialNeeds: '',
            representative: '',
            contactInfo: '',
            id: null
        }
    }

    handleInputChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    componentDidMount() {
        const id = this.props.location.pathname.split("/")[2]
        axios
            .get(`https://educell.herokuapp.com/api/students/${id}`, { headers: { Authorization: localStorage.getItem('token') } })
            .then(response => {
                let student = response.data[0]
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
                })
            })
            .catch(error => console.log(error))
    }

    editStudent = event => {
        event.preventDefault() //anytime you use on submit for a form 

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
            contactInfo } = this.state;

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
        }

        axios
            .put(`https://educell.herokuapp.com/api/students/${this.state.id}`, newStudent, { headers: { Authorization: localStorage.getItem('token') } })
            .then(response => {
                if (response.status === 200) {
                    console.log(response.data)
                    //if registration is succesful which is this check, then redirect to log in.
                    alert('Student was updated')
                    

                }
                else {
                    throw new Error() //error if something went wrong 
                }
            })
            .catch(error => {
                console.log(error);
            })
    }

    deleteStudent = () => {
        axios
            .delete(`https://educell.herokuapp.com/api/students/${this.state.id}`, { headers: { Authorization: localStorage.getItem('token') } })
            .then(response => {
                console.log(response);
                alert("Student Was Deleted")
            })

            .catch(err => {
                console.log(err);
            });
    }

    //make booleans toggle button
    //status 3 radio buttons 3 options currentstudent former student and visitor
    render() {
        return (
            <div>
                <form
                    onSubmit={this.addStudent}
                >
                    <input
                        type='text'
                        placeholder='Student Name'
                        value={this.state.name}
                        onChange={this.handleInputChange}
                        name='name'
                    />
                    <br></br>

                    <h2>Student Age</h2>
                    <input
                        type='number'
                        placeholder='Student First Name'
                        value={this.state.age}
                        onChange={this.handleInputChange}
                        name='age'
                    />
                    <br></br>

                    <h2>Insurance</h2>
                    <input
                        type='text'
                        placeholder='Y/N'
                        value={this.state.insurance}
                        onChange={this.handleInputChange}
                        name='insurance'
                    />
                    <br></br>

                    <h2>Birth Certificate</h2>
                    <input
                        type='text'
                        placeholder='Y/N'
                        value={this.state.birthCertificate}
                        onChange={this.handleInputChange}
                        name='birthCertificate'
                    />
                    <br></br>

                    <h2>Contact Information</h2>
                    <input
                        type='text'
                        placeholder='Enter Phone Number'
                        value={this.state.contactInfo}
                        onChange={this.handleInputChange}
                        name='contactInfo'
                    />
                    <br></br>

                    <button onClick={this.editStudent}>Submit</button>
                    <button onClick={this.deleteStudent}>Delete</button>
                </form>
                

            </div>
        );
    }
}

export default EditStudent;