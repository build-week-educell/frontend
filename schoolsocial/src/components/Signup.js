import React, { Component } from 'react';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            firstName: '',
            lastName:'',
            password:''
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
                <h1>Sign Up</h1>
                <form>
                    <input 
                        type='text'
                        placeholder='Enter First Name'
                        name='first name'
                        value={this.state.firstName}
                        onChange={this.handleInputChange}
                    />

                    <input 
                        type='text'
                        placeholder='Enter Last Name'
                        name='last name'
                        value={this.state.lastName}
                        onChange={this.handleInputChange}
                    />

                    <input 
                        type='password'
                        placeholder='Create Password'
                        name='password'
                        value={this.state.password}
                        onChange={this.handleInputChange}
                    />

                    <button>Complete Sign Up</button>

                </form>
            </div>
         );
    }
}
 
export default Signup;



// loginSubmitHandler = event => {
//     const user = this.state.username;
//     //take in key and the value
//     localStorage.setItem('user', `${user}`); // local storage needs to be in a string
//     window.location.reload();

// }