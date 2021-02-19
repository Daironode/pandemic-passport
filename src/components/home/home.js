import React, { Component } from 'react';
import './HomeStyles.css';
import logo from '../../img/usa.png'
import search from '../../img/search.png'
import logout from '../../img/logout.png'
import MenuLeft from '../utils/menuLeft'



export default class Home extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="App">
                <MenuLeft />
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
            </div>
        )
    }
}
