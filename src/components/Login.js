import React, { Component } from 'react';

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