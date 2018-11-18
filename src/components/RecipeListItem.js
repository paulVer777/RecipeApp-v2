import React from 'react'
import {connect} from 'react-redux'
import {removeRecipe} from '../actions/recipeActions'

const RecipeListItem = (props) => (
    <div className = 'recipe-list__item'>
        <span>{props.data.title}</span>
        <div className = 'recipe-list__actions'>
            <button className = 'recipe-list__edit' onClick = {() => props.history.push('/recipe-editor')}>Edit</button>
            <button className = 'recipe-list__remove' onClick = {() => props.dispatch(removeRecipe(props.data.id))} >Remove</button>
        </div>
        
    </div>
)

export default connect()(RecipeListItem)