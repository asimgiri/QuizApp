import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import QuestionsContainer from '../containers/QuestionsContainer';
import CategoriesContainer from '../containers/CategoriesContainer';
import UsersContainer from '../containers/UsersContainer';
import Content from './Content';


export default function Menu() {
    return (
        <div className="menu">
            <ul>
                <h2>user</h2>
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