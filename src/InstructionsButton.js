import React, { Component } from 'react';
import Recipe from './Recipe';

class InstructionsButton extends Component {
    render(){
        console.log("instructions props:", this.props);
        return(
            <button className={this.props.className} onClick={this.props.onClick}>Instructions</button> 
        )
    }
}

export default InstructionsButton;