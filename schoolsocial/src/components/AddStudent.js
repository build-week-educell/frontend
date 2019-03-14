import React, { Component } from 'react';
import axios from 'axios';

class AddStudent extends Component {
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
         }
    }

    handleInputChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    addStudent = event => {
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
            contactInfo} = this.state;

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
            .post('https://educell.herokuapp.com/api/student', { headers: { Authorization: localStorage.getItem('token') } }, newStudent)

            .then(response => {
                if (response.status === 201) {
                    console.log(response.data)
                    //if registration is succesful which is this check, then redirect to log in.
                    alert('Student was added')
                    this.setState({
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
                    })
                }
                else {
                    throw new Error() //error if something went wrong 
                }
            })
            .catch(error => {
                console.log(error);
            })
        }

        //make booleans toggle button
        //status 3 radio buttons 3 options currentstudent former student and visitor
    render() { 
        return ( 
            <div>
                <form
                    onSubmit={this.addStudent}
                >
                    <h2>Student Name</h2>
                    <input
                        type='text'
                        placeholder='Student Name'
                        value={this.state.name}
                        onChange={this.handleInputChange}
                        name='name'
                    />
                    <br></br>


                    <h2>Grade</h2>
                    <input
                        type='number'
                        placeholder='grade'
                        value={this.state.grade}
                        onChange={this.handleInputChange}
                        name='grade'
                    />
                    <br></br>

                    <h2>Background</h2>
                    <input
                        type='text'
                        placeholder='Background Info'
                        value={this.state.background}
                        onChange={this.handleInputChange}
                        name='background'
                    />
                    <br></br>

{/* //make radio buttons */}

                    <h2>Status</h2> 
                    <input
                        type='text'
                        placeholder='Student Name'
                        value={this.state.status}
                        onChange={this.handleInputChange}
                        name='status'
                    />
                    <br></br>

                    <h2>Age</h2>
                    <input
                        type='number'
                        placeholder='Student Age'
                        value={this.state.age}
                        onChange={this.handleInputChange}
                        name='age'
                    />
                    <br></br>

                    {/* //make radio buttons */}
                    <h2>Insurance Provided</h2>
                    <input
                        type='text'
                        placeholder='Y/N'
                        value={this.state.insurance}
                        onChange={this.handleInputChange}
                        name='insurance'
                    />
                    <br></br>


                    <h2>Insurance Expiration</h2>
                    <input
                        type='number'
                        placeholder='Insurance Expiration'
                        value={this.state.insuranceExp}
                        onChange={this.handleInputChange}
                        name='insuranceExp'
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


                    <h2>Special Needs Information</h2>
                    <input
                        type='text'
                        placeholder='N/A'
                        value={this.state.specialNeeds}
                        onChange={this.handleInputChange}
                        name='specialNeeds'
                    />
                    <br></br>

                    <h2>Student Respresentative</h2>
                    <input
                        type='text'
                        placeholder='N/A'
                        value={this.state.representative}
                        onChange={this.handleInputChange}
                        name='representative'
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

                    <button onClick={this.addStudent}>Submit</button>
                </form>

                  {/* name: '',
                      grade: 0,
                      background: '',
                      status: '',
                      age: 0,
                      insurance: false,
                      insuranceExp: '',
                      birthCertificate: false,
                      specialNeeds: '',
                      representative: '',
                      contactInfo: '', */}

              
              

              
            </div>
         );
    }
}
 
export default AddStudent;