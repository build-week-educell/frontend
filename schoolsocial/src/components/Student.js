//get information by id

import React, { Component } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';

class Students extends Component {
    constructor(props) {
        super(props);
        this.state = {
            student: {}
        }
    }

    componentDidMount() {
        const id = this.props.location.pathname.split("/")[2]
       
        axios
            .get(`https://educell.herokuapp.com/api/students/${id}`, { headers: { Authorization: localStorage.getItem('token') } })
            .then(response => {
                this.setState({
                    student: response.data[0]
                })
                
            })
            .catch(error => console.log(error))
    }

    render() {
        console.log(this.state.student)
        return (
            <div>
                <div>{this.state.student.name}</div>
                <div>{this.state.student.status}</div>
                <div>{this.state.student.grade}</div>
                <div>{this.state.student.background}</div>
                <div>{this.state.student.specialNeeds}</div>
                <div>{this.state.student.age}</div>
                <div>{this.state.student.insurance}</div>
                <div>{this.state.student.insuranceExp}</div>
                <div>{this.state.student.birthCertificate}</div>
                <div>{this.state.student.representative}</div>
                <div>{this.state.student.contactInfo}</div>
                <Link to={`/student/${this.state.student.id}/edit`}>Edit</Link>
            </div>
        );
    }
}

export default Students;