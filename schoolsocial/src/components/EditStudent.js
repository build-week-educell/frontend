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
        const id = this.props.location.pathname
        axios
            .get(`https://educell.herokuapp.com/students/${id}`)
            .then(response => {
                this.setState({
                    name: response.data.name,
                    grade: response.data.grade,
                    background: response.data.background,
                    status: response.data.status,
                    age: response.data.age,
                    insurance: response.data.insurance,
                    insuranceExp: response.data.insuranceExp,
                    birthCertificate: response.data.birthCertificate,
                    specialNeeds: response.data.specialNeeds,
                    representative: response.data.representative,
                    contactInfo: response.data.contactInfo,
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
            .put(`https://educell.herokuapp.com/api/student/${id}`, newStudent)
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
            .delete(`https://educell.herokuapp.com/api/student/${id}`)
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
                        name='birth certificate'
                    />
                    <br></br>

                    <h2>Contact Information</h2>
                    <input
                        type='text'
                        placeholder='Enter Phone Number'
                        onChange={this.handleInputChange}
                        name='phone number'
                    />
                    <br></br>

                    <button onClick={this.EditStudent}>Submit</button>
                </form>
                <h2>Name</h2>

            </div>
        );
    }
}

export default EditStudent;