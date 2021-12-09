import React from 'react'
import style from './recipe.module.css'

const Recipe = ({ title, calories, ingredients, imgSRC, link }) => {
    return (
        <div className={style['recipe']}>
            <h2 className={style['title']}>{title}</h2>
            <p className={style['calories']}>Total Calories: {calories}</p>
            <img className={style['img']} src={imgSRC} alt="" />
            <ul className={style['ingredients']}>ingredients:
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ul>
            <a className={style['link']} href={link} target="_blank">Open Recipe Details</a>
        </div>
    )
}


export default Recipe
