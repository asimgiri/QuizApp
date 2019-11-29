import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Menu() {
    return (
        <div className="menu">
            <ul>
                <div className="user_profile">
                    <i className="fas fa-user"></i>
                </div>
                <p className="center">Username</p>
                <NavLink exact to="/users">
                    <li>
                    <i className="fas fa-angle-right"></i> Users
                            </li>
                </NavLink>
                <NavLink to="/questions">
                    <li>
                        <i className="fas fa-angle-right"></i> Questions
                            </li>
                </NavLink>
                <NavLink to="/categories">
                    <li>
                        <i className="fas fa-angle-right"></i> Categories
                            </li>
                </NavLink>
            </ul>
        </div>
    )
}