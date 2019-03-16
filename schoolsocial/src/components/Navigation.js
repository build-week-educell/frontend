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
        <nav >
                <div className='nav-wrapper' >
                    
                    <NavLink to='/students'>Students</NavLink>
                    <NavLink to='/grade'>Seach By Grade</NavLink>
                    <NavLink to='/signup'>Sign Up</NavLink>
                    <NavLink to='/add'>Add Student</NavLink>
                    <NavLink className='decoration' to='/login'>Login</NavLink>
                    <button className='waves-effect waves-light btn' onClick={this.logOut}>Log Out</button>
                </div>
        </nav>
           
            

         );
    }
}
 
export default withRouter(Navigation);