import React from 'react'
import './Recipe.css';

const Recipe = ({ title, calories, ingredients, imgSRC }) => {
    return (
        <div>
            <h2>{title}</h2>
            <p>{calories}</p>
            <ol>
            {ingredients.map(ingredient => (
                <li>{ingredient.text}</li>
            ))}
            </ol>
            <img src={imgSRC} alt="" />
        </div>
    )
}

export default Recipe
