import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import QuestionsContainer from '../containers/QuestionsContainer';
import CategoriesContainer from '../containers/CategoriesContainer';
import UsersContainer from '../containers/UsersContainer';


export default function Content() {
    return (
        <Router>
            <div className="content">
                <Switch>
                    <Route exact path="/questions">
                        <QuestionsContainer />
                    </Route>
                    <Route exact path="/categories">
                        <CategoriesContainer />
                    </Route>
                    <Route exact path="/users">
                        <UsersContainer />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}