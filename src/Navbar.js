import React, { Component } from 'react';

class NavBar extends Component {
    render(){
        return(
            <div className="navbar">
                <a href="#">
                    Home
                </a>
                <a href="#">
                    Recipes
                </a>
                <a href="#">
                    Cookbooks
                </a>
                <a href="#">
                    Shop
                </a>
            </div>
        )

    }
}

export default NavBar;