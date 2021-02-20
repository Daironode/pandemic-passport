import React, { Component } from 'react';

export default class Spaces extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Space'
        }
    }

    render = () => {
        return (
            <div>
                <div className="title">
                    Space
                </div>
                <div className="body">

                </div>
            </div>
        )
    }
}
