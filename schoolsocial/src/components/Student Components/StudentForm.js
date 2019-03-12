import React, { Component } from 'react';

class StudentForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            firstName: '',
            lastName: '',
            age: '',
            insurance: '',
            birthCertificate: '',
            phoneNumber: ''
         }
    }

    handleInputChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() { 
        return ( 
            <div>
                <h2>First Name</h2>
                <input
                    type='text'
                    placeholder='Student First Name'
                    value={this.state.firstName}
                    onChange={this.handleInputChange}
                    name='firstname'
                />
                <br></br>

                <h2>Last Name</h2>
                <input
                    type='text'
                    placeholder='Student Last Name'
                    value={this.state.lastName}
                    onChange={this.handleInputChange}
                    name='lastname'
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

                <button>Submit</button>
            </div>
         );
    }
}
 
export default StudentForm;