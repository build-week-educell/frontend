import React, { Component } from 'react';

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

    render() { 
        return ( 
            <div>
                <form>
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

                    <button>Log In</button>

                </form>
            </div>
            
         );
    }
}
 
export default Login;