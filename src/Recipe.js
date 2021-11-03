import React, { Component } from 'react';
import RecipeApp from './RecipeApp';
import IngredientsButton from './IngredientsButton';
import InstructionsButton from './InstructionsButton';

class Recipe extends Component{
    static defaultProps = {
        title: "A Simple Recipe...",
        src: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=765&q=80",
        ingredients: ["Macaroon pie", "gummi bears", "sweet topping shortbread"],
        instructions: ["Muffin chocolate candy marzipan jujubes chupa chups.", 
            "Candy oat cake halvah pastry pie brownie soufflé dessert.",
            "Apple pie caramels lemon drops marshmallow chupa chups dragée.",
        ]
    };
    state = {
        ingredientsActive: true,
        instructionsActive: false
    };
    constructor(props){
        super(props);
        // this.toggleIngredients = this.toggleIngredients.bind(this);
    }
    toggleInstructions = (e)=>{
        this.setState({ingredientsActive: !this.state.ingredientsActive});
        console.log('this is: ', this.state.ingredientsActive);
    };
    render(){
        this.toggleInstructions.bind(this);
        const {title} = this.props;
        const ingredients = this.props.ingredients.map((e, i)=>{
            return <li>{e}</li>
        });
        const instructions = this.props.instructions.map((e,i)=>{
            return <li>{e}</li>
        });
        const {src} = this.props;

        return (
            <div className="recipeCard">
                <div class="recipeImgWrapper">
                    <img src={src} />
                </div>
                <div className="recipeBody">
                    <h3 className="recipeTitle">{title}</h3>
                    <div className="recipeNav">
                            <IngredientsButton className={this.state.ingredientsActive?"active":"inactive"}/>
                            <InstructionsButton onClick={this.toggleInstructions}/>
                    </div>
                </div>
            </div>
        );
        
    }
}

export default Recipe;