import React, { Component } from 'react';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Space'
        }
    }

    render = () => {
        <div>
            <div className="title">
                Space
            </div>
            <div className="body">

            </div>
        </div>
    }
}
