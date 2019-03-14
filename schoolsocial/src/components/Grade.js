//show all students 
//get request to all students 

import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";


class Grade extends Component {
    constructor(props) {
        super(props);
        this.state = {
            students: [],
            searchInput: '',
            filteredStudents: []
        }
    }

    componentDidMount() {
        axios
            .get('https://educell.herokuapp.com/api/students', { headers: { Authorization: localStorage.getItem('token') } })
            .then(response => {
                this.setState({
                    students: response.data
                })
            })
            .catch(error => console.log(error))
    }

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
        const filtered = this.state.students.filter( student => student.grade === this.state.searchInput);
            console.log(filtered);
        this.setState({
            filteredStudents: filtered
        });
    };

    

    render() {
        return (
            <div>
                <input 
                    placeholder='Enter A Grade'
                    onChange={this.handleInputChange}
                    value={this.state.searchInput}
                    name='searchInput'
                />
                {this.state.filteredStudents.map( student => {
                    return (
                        <div key={student.id}>
                            <Link to={`/student/${student.id}`}>
                                    <div>{student.name}</div>
                                    <div>{student.status}</div>
                                    <div>{student.age}</div>
                                    <div>{student.insurance}</div>
                                    <div>{student.birthCertificate}</div>
                                    <div>{student.representative}</div>
                                    <div>{student.contactInfo}</div>
                            </Link> 
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default Grade;