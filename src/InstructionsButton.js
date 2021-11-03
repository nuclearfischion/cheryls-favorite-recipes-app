import React, { Component } from 'react';
import Recipe from './Recipe';

class InstructionsButton extends Component {
    state = {
        active: false
    }
    render(){
        return(
            <div class="instructions">
                <button className={this.state.active ? "active" : null} data-target="#Instructions">Instructions</button> 
                <ol id="instructions">
                    <li>mix the stuff</li>
                    <li>bake for 20 minutes</li>
                </ol>
            </div>
        )
    }
}

export default InstructionsButton;