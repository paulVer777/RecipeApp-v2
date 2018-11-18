import React from 'react'
import RecipeForm from '../components/RecipeForm'
import {connect} from 'react-redux'
import {editRecipe} from '../actions/recipeActions'

const RecipeEditor = (props) => (

    <div className = 'recipe-editor'>
        <h1>Recipe Editor</h1>
        <RecipeForm 
            submitter = {(obj) => props.dispatch(editRecipe(props.match.params.id, obj))}
        />
    </div>

)
    
export default connect()(RecipeEditor)