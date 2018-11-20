import React from 'react'
import { connect } from 'react-redux';

const IngredientsList = (props) => (
    <div className = 'ingredient-list' >
        { !props.recipe ? 'You have no ingredients added yet' 
        : 
        props.recipe.ingredients.map((value,index) => <div>{value.title}</div>)}        
    </div>
)

const mapStateToprops = (state,props) => (
    {
        recipe:state.recipes.find((value, index) => props.id === value.id)
    }
)

export default connect(mapStateToprops)(IngredientsList)