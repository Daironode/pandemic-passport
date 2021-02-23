import React, { Component } from 'react';
import './MenuLeftstyles.css';
import circle from '../../img/circle.png'
import logo from '../../img/logo.png';

export default class MenuLeft extends Component {
    render = () =>
        <div className="LeftMenu">

            <div className="logoTitle">
                <img src={logo} alt="alt" className="imgLogo" />
            </div>
            <div className="logoTitle">
                <a href="/home">Home</a>
            </div>

            <div className="options">
                <a href="/space">
                    <img src={circle} alt="circle" className="circle"/> Spaces
                </a>
            </div>
            <div className="options">
                <a href="/map">
                    <img src={circle} alt="circle" className="circle"/> Map
                </a>
            </div>
            <div className="options">
                <img src={circle} alt="circle" className="circle"/> Validate
            </div>

        </div>
}


