import React from 'react'
import { connect } from 'react-redux';
import RecipeForm from './RecipeForm';
import { editRecipe } from '../actions/recipeActions';

const RecipeEditor2 = (props) => (
    <div>
        <RecipeForm 
        data = {props.recipe}
        submitter = { (obj) => props.dispatch(editRecipe(props.match.params.id, obj))}
        />
        
    </div>
)

const mapStateToProps = (state, props) => (
    {
        recipe:state.recipes.find((value, index) => props.match.params.id === value.id)
    }
)

export default connect(mapStateToProps)(RecipeEditor2)