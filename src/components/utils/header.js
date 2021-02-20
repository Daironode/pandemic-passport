import React, { Component } from 'react';
import './headerStyles.css';
import logo from '../../img/usa.png';
import search from '../../img/search.png';
import logout from '../../img/logout.png';

export default class Header extends Component {

    render = () =>
        <div className="rightMenu">
            <div className="header">
                <div className="inputGroup">
                    <img src={search} alt="alt" className="imgSearch" />
                    <input
                        className="inputSearch"
                        placeholder="Identification persons"
                    />
                </div>
                <div className="inputGroup">
                    <img src={logo} alt="alt" className="imgFlag"/>
                    <span className="lenguaje">English</span>
                    <img src={logout} alt="alt" className="imgLogout"/>
                </div>
            </div>
        </div>
}


