import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


export default function Menu() {
    return (
        <Router>
            <div className="menu">
                <ul>
                    <li>
                        <Link to="/users"><i className="fas fa-angle-right"></i> Users</Link>
                    </li>
                    <li>
                        <Link to="/questions"><i className="fas fa-angle-right"></i> Questions</Link>
                    </li>
                    <li>
                        <Link to="/categories"><i className="fas fa-angle-right"></i> Categories</Link>
                    </li>
                </ul>
            </div>
        </Router>
    )
}