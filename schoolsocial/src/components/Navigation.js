import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom'


class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    logOut = () => {
        window.localStorage.clear();
        this.props.history.push('/');


    }
    render() { 
        return ( 
            <div>
                <NavLink to='/signup'>Sign Up</NavLink>

                <NavLink to='/students'>Students</NavLink>

                <NavLink to='/grade'>Seach By Grade</NavLink>
 
                <NavLink to='/login'>Login</NavLink>
 
                <NavLink to='/add'>Add Student</NavLink>

                <button onClick={this.logOut}>Log Out</button>
                </div>
            

         );
    }
}
 
export default withRouter(Navigation);