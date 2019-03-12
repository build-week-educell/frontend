import React, { Component } from 'react';

class Student extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            firstName: '',
            lastName: '',
            age: '',
            insurance: '',
            birthCertificate:'',
            phoneNumber:''
         }
    }

    handleInputChange = event => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    render() { 
        return ( 
            <div>

                <input
                    type='text'
                    placeholder='Student First Name'
                    value={this.state.firstName}
                    onChange={this.handleInputChange}
                    name='firstname'
                />
                
                <input 
                    type='text'
                    placeholder='Student First Name'
                    value={this.state.lastName}
                    onChange={this.handleInputChange}
                    name='lastname'
                    />

                <input 
                    type='number'
                    placeholder='Student First Name'
                    value={this.state.age}
                    onChange={this.handleInputChange}
                    name='age' 
                    />

                <input 
                    type='text'
                    placeholder='Student First Name'
                    value={this.state.insurance}
                    onChange={this.handleInputChange}
                    name='insurance' 
                    />

                <input />
                <input />

            </div>
         );
    }
}
 
export default Student;