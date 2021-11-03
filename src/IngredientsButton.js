import React, { Component } from 'react';
import Recipe from './Recipe';
import RecipeApp from './RecipeApp';

class IngredientsButton extends Component {
    constructor(props){
        super(props)
        console.log(Recipe.props);
    }
    state = {
        active: true
    }
    toggleIngredients = ()=>{
        this.setState({active: !this.state.active});
        console.log('this is: ', this.state.active);
    };
    render(){
        return(
            <div class="ingredients">
                <button className={this.state.active ? "active" : null} data-target="#ingredients" onClick={this.toggleIngredients}>Ingredients</button> 
                <ul id="ingredients" className={this.state.active ? null : "hide"}>
                    <li>chocolate</li>
                    <li>flour</li>
                </ul>
            </div>
        )
    }
}

export default IngredientsButton;