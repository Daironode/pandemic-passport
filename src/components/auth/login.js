import React, { Component } from 'react';
import './auth.css';
import logo from '../../img/logo.png';

export default class Auth extends Component {

    render = () =>
        <div>
            <div className="video-responsive">
                <iframe
                    src="https://www.youtube.com/embed/Z8A1TMxR1_I?rel=0&amp;controls=0&amp;endSeconds=10&showinfo=0&amp;modestbranding=1&amp;autohide=1&amp;mute=1&amp;showinfo=0&amp;controls=0&amp;autoplay=1&amp;loop=1&amp;playlist=Z8A1TMxR1_I"
                    frameBorder="0" allowFullScreen="allowfullscreen"></iframe>
            </div>
            <div>
                <img src={logo} alt="alt" className="imgLogoLogin" />
            </div>
            <div className="form">
                <div className="text">
                    Usuario
                </div>
                <div>
                    <input className="inputForm" placeholder="usuario"/>
                </div>
                <div className="text">
                    Password
                </div>
                <div>
                    <input className="inputForm" placeholder="password"/>
                </div>
                <div>
                    <a href="/home">
                        <button className="button">Iniciar Sesión</button>
                    </a>
                </div>
            </div>
        </div>
}
