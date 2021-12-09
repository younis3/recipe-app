import React from 'react'
import style from './recipe.module.css'

const Recipe = ({ title, calories, ingredients, imgSRC, link }) => {
    return (
        <div className={style['recipe']}>
            <h2 className={style['title']}>{title}</h2>
            <p className={style['calories']}>Total Calories: {calories}</p>
            <img className={style['img']} src={imgSRC} alt="" />
            <ul className={style['ingredients']}><span className={style['ingredient-title']}>Ingredients:</span>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ul>
            <button className={style['link-btn']}><a className={style['link']} href={link} target="_blank">Open Recipe Details</a></button>
        </div>
    )
}


export default Recipe
