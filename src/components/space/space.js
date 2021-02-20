import React, { Component } from 'react';
import './spaceStyles.css';

export default class Spaces extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Space'
        }
    }

    render = () => {
        return (
            <div className="">
                <div className="title" >
                    Space
                </div>
                <div className="content">
                <div className="title" >
                    
                    Identification Your Space
                </div>
                <div className="contentRow">

                    <div className="group">
                        <label className="labelInput">Document Identification</label>
                        <input type="text" name=" " id="space" className="input"/>
                    </div>

                    <div className="group">
                        <label className="labelInput">Name Space</label>
                        <input type="text" name=" " id="space" className="input"/>
                    </div>

                </div>

                <div className="contentRow">

                    <div className="group">
                        <label className="labelInput">Document Identification</label>
                        <input type="text" name=" " id="space" className="input"/>
                    </div>

                    <div className="group">
                        <label className="labelInput">Name Space</label>
                        <input type="text" name=" " id="space" className="input"/>
                    </div>

                </div>

                <div className="contentRow">

                    <div className="group">
                        <label className="labelInput">Document Identification</label>
                        <input type="text" name=" " id="space" className="input"/>
                    </div>

                    <div className="group">
                        <label className="labelInput">Name Space</label>
                        <input type="text" name=" " id="space" className="input"/>
                    </div>

                </div>

                <div className="contentRow">

                    <div className="group">
                        <label className="labelInput">Document Identification</label>
                        <input type="text" name=" " id="space" className="input"/>
                    </div>

                    <div className="group">
                        <label className="labelInput">Name Space</label>
                        <input type="text" name=" " id="space" className="input"/>
                    </div>

                </div>

                <div className="contentRow">

                    <div className="group">
                        <label className="labelInput">Document Identification</label>
                        <input type="text" name=" " id="space" className="input"/>
                    </div>

                    <div className="group">
                        <label className="labelInput">Name Space</label>
                        <input type="text" name=" " id="space" className="input"/>
                    </div>

                </div>

                    

                </div>
            </div>
        )
    }
}
