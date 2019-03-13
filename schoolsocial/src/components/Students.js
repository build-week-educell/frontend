//show all students 
//get request to all students 

import React, { Component } from 'react';
import axios from 'axios';

class Students extends Component {
    constructor(props){
        super(props);
        this.state = {
            students: []
        }
    }

    componentDidMount() {
        axios
            .get('https://educell.herokuapp.com/api/students')
            .then( response => {
                this.setState({
                    students: response.data
                })
            })
            .catch(error => console.log(error))
    }
    
    render() { 
        return ( 
            <div>
                <div>
                    <div>name</div>
                    <div>status</div>
                    <div>age</div>
                    <div>insurance</div>
                    <div>Birth Cert</div>
                    <div>representative</div>
                    <div>Contact Info</div>
                </div>
                {this.state.students.map( student => {
                    return (
                        <div key={student.id}>
                            <div>{student.name}</div>
                            <div>{student.status}</div>
                            <div>{student.age}</div>
                            <div>{student.insurance}</div>
                            <div>{student.birthCertificate}</div>
                            <div>{student.representative}</div>
                            <div>{student.contactInfo}</div>
                        </div>
                    )
                })}
           </div>
         );
    }
}
 
export default Students;