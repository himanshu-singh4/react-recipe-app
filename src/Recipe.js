import React from 'react';
import style from './recipe.module.css';

const Recipe = ({title, calories, image, ingredients, url}) => {

    const openLink = () => {
        window.open(url);
        console.log(url);
    }

    return(
        <div className={style.recipe} style={{cursor: 'pointer'}} onClick={openLink}>
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p><b>Calories: </b>{calories}</p>
            <img className= {style.image} src={image} alt="" />
        </div>
    );
}

export default Recipe;