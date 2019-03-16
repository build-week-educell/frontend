import React, { Component } from 'react';
import axios from 'axios';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: '',
            username: '',
            contactInfo: '',
            organization: '',
            password: ''
         }
    }

    handleInputChange = event => {
        this.setState({

            [event.target.name] : event.target.value 
        })
    }

    signUp = event => {
        event.preventDefault() //anytime you use on submit for a form 
        
        const { name, username, contactInfo, organization, password, } = this.state; 
        let newUser = { username, name, contactInfo, password, organization } 

        axios
            .post('https://educell.herokuapp.com/api/register', newUser, { headers: { Authorization: localStorage.getItem('token') } })
            .then( response => {
                if (response.status === 201) {
                    console.log(response.data)
                    //if registration is succesful which is this check, then redirect to log in.
                } 
                else {
                    throw new Error() //error if something went wrong 
                }
            })
            .catch ( error => {
                console.log(error);
            })
    this.props.history.push('/login')

    }
    render() { 
        return ( 
            <div>
                <h1 className='signUp'>Sign Up</h1>
                <form
                    onSubmit={this.signUp}
                >
                    <input 
                        type='text'
                        placeholder='name'
                        name='name'
                        value={this.state.name}
                        onChange={this.handleInputChange}
                    />

                    <input 
                        type='text'
                        placeholder='username'
                        name='username'
                        value={this.state.username}
                        onChange={this.handleInputChange}
                    />

                    <input
                        type='text'
                        placeholder='contact info'
                        name='contactInfo'
                        value={this.state.contactInfo}
                        onChange={this.handleInputChange}
                    />

                    <input
                        type='text'
                        placeholder='organization'
                        name='organization'
                        value={this.state.organization}
                        onChange={this.handleInputChange}
                    />

                    <input 
                        type='password'
                        placeholder='Create Password'
                        name='password'
                        value={this.state.password}
                        onChange={this.handleInputChange}
                    />

                    <button
                        onClick={this.signUp}
                        className='waves-effect waves-light btn edit'
                    >Complete Sign Up</button>

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