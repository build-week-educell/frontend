import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';



import { BrowserRouter as Router, withRouter } from "react-router-dom";

const AppWithRouter = withRouter(App) //gives app ability to have things history and whatever route component comes with

ReactDOM.render(
    <Router>
        <AppWithRouter />
    </Router>, 
    document.getElementById('root'));


