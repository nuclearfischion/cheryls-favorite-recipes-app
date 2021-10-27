import React, { Component } from 'react';
import logo from './logo.svg';
import './RecipeApp.css';
import './Recipe.css';
import './Navbar.css';
import './RecipeList.css';

import Recipe from './Recipe';
import RecipeList from './RecipeList';
import NavBar from './Navbar';
import RelatedRecipes from './RelatedRecipes';

class RecipeApp extends Component {
    constructor(props){
        super(props);
        this.state={className: "App"};
    }
    render(){
      let myLogo = "https://images.unsplash.com/photo-1535141192574-5d4897c12636?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80";
      return (
        <div className="App" {...this.state}>
          <NavBar />
          <header className="App-header">
              <div>
                <img src={myLogo} className="App-logo" alt="logo" />
              </div>
            <div>
                <h1>
                Cheryl's Vegan Kitchen
                </h1>
                <p>
                Jazz up your holidays when decadent desserts, buttery loaves, and garden fresh vegetables. 
                </p>
            </div>
          </header>
            <RecipeList>
                <Recipe title="Butternut Squash Ravioli" src="https://images.unsplash.com/photo-1621267560694-6e290ba1f2f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80" />
            </RecipeList>
            <RelatedRecipes>
                <Recipe title="Brownies" src="https://images.unsplash.com/photo-1611625877932-6155840177a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80" />
                <Recipe title="Pecan Pie" src="https://images.unsplash.com/photo-1619051805375-7b83440bb11b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" />
                <Recipe title="Ice Cream" src="https://images.unsplash.com/photo-1580915411954-282cb1b0d780?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80" />
            </RelatedRecipes>
        </div>
      );
  }
}

export default RecipeApp;
