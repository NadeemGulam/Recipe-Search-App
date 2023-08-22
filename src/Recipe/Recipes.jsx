import React from 'react'
import style from './recipe.module.css';
const Recipes = (props) => {
  return (
    <div className={style.recipe}>
      <h1>{props.title}</h1>
      <label>Colories</label>
      <p>{Math.floor(props.calories)}</p>
      <ul>
        {props.ingredients.map(ingredient=>(
            <li>{ingredient.text}</li>
        ))}
      </ul>
      <img className={style.image} src={props.img} alt="img" />
    </div>
  )
}

export default Recipes
