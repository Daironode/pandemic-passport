import React, { Component } from 'react';
import './HomeStyles.css';
import MenuLeft from '../utils/menuLeft'
import Header from '../utils/header'


export default class Home extends Component {

    render() {
        return (
            <div className="App">
                <MenuLeft />
                <div className="body">
                    <Header />
                </div>
            </div>
        )
    }
}
