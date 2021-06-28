import React, { Component } from 'react';
import ColoredScrollbars from './Scroll';

export default class App extends Component {

    constructor(props){
        super(props);
    }; 

    render() {
        return (
            <ColoredScrollbars
                style={{ height: 300 }}>
                <text>{this.props.api}</text> 
            </ColoredScrollbars>
        );
    }
}