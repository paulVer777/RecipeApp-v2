import React from 'react'
import RecipeForm from '../components/RecipeForm'
import {connect} from 'react-redux'
import {editRecipe} from '../actions/recipeActions'
import {Link} from 'react-router-dom'
import IngredientsForm from './IngredientsForm';
import IngredientsList from './IngredientsList';

const RecipeEditor = (props) => (

    <div className = 'recipe-editor'>
        <h1>Recipe Editor</h1>
        <RecipeForm 
            submitter = {props.editRecipe}
        />
        <IngredientsList 
            id = {props.match.params.id}
        />
        <IngredientsForm 
            id = {props.match.params.id}
        />
        <Link to = '/' className = 'btn' > Done </Link>
    </div>

)
    
const mapDispatchToProps = (dispatch) => ({
    editRecipe: (obj) => dispatch(editRecipe(obj))
})


export default connect(undefined, mapDispatchToProps)(RecipeEditor)