import React, { Component } from 'react';
import Recipe from './Recipe';

class IngredientsButton extends Component {
    constructor(props){
        super(props)
    }
    render(){
        console.log(`ingred. button props`)
        console.log(this.props);
        return(
            <button className={this.props.className} onClick={this.props.onClick}>Ingredients</button> 
        )
    }
}

export default IngredientsButton;