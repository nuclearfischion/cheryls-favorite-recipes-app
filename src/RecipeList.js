import React, { Component } from 'react'
import Recipe from './Recipe'

import './RecipeList.css'

class RecipeList extends Component {
    static defaultProps = {
        recipes: [
            {
                title: "Butternut Squash Ravioli",
                src: "https://www.aberdeenskitchen.com/wp-content/uploads/2017/10/Sage-Brown-Butter-Sauce-Butternut-Squash-Ravioli-2-680x1024.jpg",
                ingredients: ["3 cups all purpose flour", "1/2 tsp turmeric", "1-1/2 cups warm water", "3 teaspoons olive oil", "1-1/2 cups warm water"],
                instructions: ["In a medium bowl, whisk together flour, salt, and eggs. Slowly whisk until a shaggy dough forms. Knead dough until smooth, about 5 minutes. Wrap dough tightly in plastic wrap and refrigerate for at least 1 hour.", 
                    "When ready to roll pasta, cut dough into quarters. Wrap all but 1 back in plastic wrap and place back in refrigerator."
                ]
            },
            {
                title: "Classic Chocolate Chip Cookies",
                src: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80",
                ingredients: [
                    "3/4 cup unsalted butter, lightly browned and cooled",
                    "1 cup brown sugar, packed",
                    "1/3 cup granulated sugar",
                    "1 egg and 1 egg yolk, room temperature",
                    "1 tablespoon vanilla extract",
                    "1 teaspoon sea salt",
                    "1 3/4 cup flour",
                    "1/2 teaspoon baking soda",
                    "8 ounce dark chocolate, chopped",
                    "1/2 cup toffee, roughly chopped"
                ],
                instructions: ["In a medium bowl, whisk together flour, salt, and eggs. Slowly whisk until a shaggy dough forms. Knead dough until smooth, about 5 minutes. Wrap dough tightly in plastic wrap and refrigerate for at least 1 hour.", 
                    "When ready to roll pasta, cut dough into quarters. Wrap all but 1 back in plastic wrap and place back in refrigerator."
                ]
            },
            {
                title: "Chocolate Covered Pretzel Brownies",
                src: "https://images.unsplash.com/photo-1606313564573-104197cf8f91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
                ingredients: [
                    "1/2 cup butter",
                    "1 cup granulated sugar",
                    "3/4 cup all purpose flour",
                    "1/4 cup dutch process cocoa powder",
                    "4 oz bittersweet chocolate, finely chopped",
                    "2 eggs plus 1 yolk",
                    "1 teaspoon vanilla extract"
                ],
                instructions: ["In a medium bowl, whisk together flour, salt, and eggs. Slowly whisk until a shaggy dough forms. Knead dough until smooth, about 5 minutes. Wrap dough tightly in plastic wrap and refrigerate for at least 1 hour.", 
                    "When ready to roll pasta, cut dough into quarters. Wrap all but 1 back in plastic wrap and place back in refrigerator."
                ]
            },

        ]
    }
    render(){
        <Recipe />
        const allRecipes = this.props.recipes.map((recipe)=>{
            return <Recipe {...recipe} />
        });
        return(
            <div class="recipeList">
                <h2>Fall Favorites</h2>
                {allRecipes}
                {console.log(`props.children`)}
                {this.props.children}
                {console.log(this.props.children)}
            </div>
        );
    }
}

export default RecipeList;