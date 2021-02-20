import React, { Component } from 'react';
import './MenuLeftstyles.css';
import circle from '../../img/circle.png'

export default class MenuLeft extends Component {
    render = () =>
        <div className="LeftMenu">

            <div className="logoTitle">
                Pandemic passport
            </div>
            <div className="logoTitle">
                Home
            </div>

            <div className="options">
                <img src={circle} alt="circle" className="circle"/> Spaces
            </div>
            <div className="options">
                <img src={circle} alt="circle" className="circle"/> Map
            </div>
            <div className="options">
                <img src={circle} alt="circle" className="circle"/> Validate
            </div>

        </div>
}


