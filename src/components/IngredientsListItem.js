import React from 'react'
import {connect} from 'react-redux'
import { removeIngredient } from '../actions/recipeActions';

const IngredientsListItem = (props) => (
    <div className = 'ingredient-list-item'>
        <span>{props.data.title}</span>
        <button onClick = { () => props.dispatch(removeIngredient(props.recipeId,props.data.id))}>Remove</button>
    </div>
)

export default connect()(IngredientsListItem)