import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            username: '',
            password: ''
         }
    }
    
    handleInputChange = event => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    login = event => {
        event.preventDefault() //anytime you use on submit for a form 

        const { username, password } = this.state; 
        let user = { username, password } 

        axios
            .post('https://educell.herokuapp.com/api/login', user, { headers: { Authorization: localStorage.getItem('token') } })
            .then( response => {
                if (response.status === 200) {
                    localStorage.setItem('token', response.data.token) // token saved to local storage
                    console.log(response.data)
                    //if registration is succesful which is this check, then redirect to log in.
                }
                else {
                    throw new Error() //error if something went wrong 
                }
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() { 
        return ( 
            <div>
                <form
                    onSubmit={this.login}
                >
                    <input
                        type='text'
                        placeholder='enter email'
                        value={this.state.username}
                        onChange={this.handleInputChange}
                        name='username'
                    />
                    <input
                        type='password'
                        placeholder='enter password'
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        name="password"
                    />

                    <button
                        onClick={this.login}
                    >Log In</button>

                </form>
            </div>
            
         );
    }
}
 
export default Login;