import React from 'react'
import RecipeForm from '../components/RecipeForm'
import {connect} from 'react-redux'
import {editRecipe} from '../actions/recipeActions'
import {Link} from 'react-router-dom'
import IngredientsForm from './IngredientsForm';

const RecipeEditor = (props) => (

    <div className = 'recipe-editor'>
        <h1>Recipe Editor</h1>
        <RecipeForm 
            submitter = {(obj) => props.dispatch(editRecipe(props.match.params.id, obj))}
        />
        <IngredientsForm 
            id = {props.match.params.id}
        />
        <Link to = '/' > Done </Link>
    </div>

)
    
export default connect()(RecipeEditor)