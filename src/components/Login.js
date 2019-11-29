import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Routes from '../routes/Routes';

export default class Login extends Component {
    render() {
        return (
            <div className="login">
                <h2>Get Started</h2>
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button><i class="fas fa-sign-in-alt"></i> Login</button>
            </div>
        )
    }
}