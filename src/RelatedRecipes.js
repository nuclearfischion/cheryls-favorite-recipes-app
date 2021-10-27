import React, { Component } from 'react';
import Recipe from './Recipe';
import './RelatedRecipes.css';

class RelatedRecipes extends Component {
    // static variables
    
    render(){
        return (
            <div className="relatedRecipes">
                <h2>Recipes to Come</h2>
                <div class="relatedRecipesBody">
                    {this.props.children}
                </div>
            </div>
        ) 
    }
}

export default RelatedRecipes;