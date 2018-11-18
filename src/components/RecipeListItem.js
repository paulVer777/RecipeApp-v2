import React from 'react'
import {connect} from 'react-redux'
import {removeRecipe} from '../actions/recipeActions'
import {Link} from 'react-router-dom'

const RecipeListItem = (props) => (
    <div className = 'recipe-list__item'>
        <span>{props.data.title}</span>
        <div className = 'recipe-list__actions'>
            <Link to = {`/recipe-editor/${props.data.id}`} className = 'recipe-list__edit' >Edit</Link>
            <button className = 'recipe-list__remove' onClick = {() => props.dispatch(removeRecipe(props.data.id))} >Remove</button>
        </div>
        
    </div>
)

export default connect()(RecipeListItem)