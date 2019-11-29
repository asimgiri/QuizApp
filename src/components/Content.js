import React from 'react';
import { Switch, Route } from 'react-router-dom';
import QuestionsContainer from '../containers/QuestionsContainer';
import CategoriesContainer from '../containers/CategoriesContainer';
import UsersContainer from '../containers/UsersContainer';


export default function Content() {
    return (
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
    )
}