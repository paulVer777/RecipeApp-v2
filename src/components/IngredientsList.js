import React from 'react'
import { connect } from 'react-redux';
import IngredientsListItem from '../components/IngredientsListItem'

const IngredientsList = (props) => (
    <div className = 'ingredient-list' >
        <h3>Ingredients</h3>
        { props.recipe.ingredients.length < 1 ? 'You have no ingredients added yet' 
            : 
        props.recipe.ingredients.map((value,index) => <IngredientsListItem  data = {value} key = {value.id} />)}        
    </div>
)

const mapStateToprops = (state,props) => (
    {
        recipe:state.recipes.find((value, index) => props.id === value.id)
    }
)

export default connect(mapStateToprops)(IngredientsList)