import React, { Component } from 'react';

import threeEntryPoint from "./threejs/threeEntryPoint"
import "./viewer.css"

export default class Viewer extends Component {
    
    componentDidMount() {
        threeEntryPoint(this.threeRootElement);
    }

    render () {
        return (
            <div className="viewer-viewer" ref={element => this.threeRootElement = element} />
        );
    }
}