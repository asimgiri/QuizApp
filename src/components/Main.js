import React, { Component } from 'react';
import Top from './Top';
import Content from './Content';
import Menu from './Menu';

export default class Main extends Component {
    render() {
        return (
            <div className="wrapper">
                <Menu />
                <div className="main">
                    <Top />
                    {children}
                </div>
            </div>
        )
    }
}