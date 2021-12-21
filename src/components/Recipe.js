import React from 'react'
import styles from '../styles/Recipe.module.css'

const Recipe = ({ title, calories, ingredients, imgSRC, link }) => {
    return (
        <div className={styles['recipe']}>
            <h2 className={styles['title']}>{title}</h2>
            <p className={styles['calories']}>Total Calories: {calories}</p>
            <img className={styles['img']} src={imgSRC} alt="" />
            <ul className={styles['ingredients']}><span className={styles['ingredient-title']}>Ingredients:</span>
                {ingredients.map(ingredient => (
                    <li key={Math.random() * 1000}>{ingredient.text}</li>
                ))}
            </ul>
            <button className={styles['link-btn']}><a className={styles['link']} href={link} target="_blank" rel='noreferrer'>Open Recipe Details</a></button>
        </div>
    )
}


export default Recipe
