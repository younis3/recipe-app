import React from 'react'
import './Recipe.css';

const Recipe = ({title, calories, imgSRC}) => {
    return (
        <div>
            <h2>{title}</h2>
            <p>{calories}</p>
            <img src={imgSRC} alt="" />
        </div>
    )
}

export default Recipe
