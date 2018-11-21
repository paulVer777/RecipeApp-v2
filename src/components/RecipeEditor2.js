import React from 'react'
import { connect } from 'react-redux';
import RecipeForm from './RecipeForm';
import { editRecipe } from '../actions/recipeActions';
import IngredientsList from './IngredientsList';
import IngredientsForm from './IngredientsForm';

const RecipeEditor2 = (props) => (
    <div className = 'recipe-editor2'>
        <RecipeForm 
        data = {props.recipe}
        submitter = { (obj) => props.dispatch(editRecipe(props.match.params.id, obj))}
        />
        <IngredientsList 
        id = {props.match.params.id}
        />
        <IngredientsForm 
            id = {props.match.params.id}
        />
    </div>
)

const mapStateToProps = (state, props) => (
    {
        recipe:state.recipes.find((value, index) => props.match.params.id === value.id)
    }
)

export default connect(mapStateToProps)(RecipeEditor2)