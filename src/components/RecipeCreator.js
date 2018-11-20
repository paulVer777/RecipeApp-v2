import React from 'react'
import uuidv4 from 'uuid'
import {connect} from 'react-redux'
import {addRecipe} from '../actions/recipeActions'
import {Link} from 'react-router-dom'

const RecipeCreator = (props) => {

    const id = uuidv4()

    return (
    <div className = 'recipe-creator'>
        <h3>Recipe creator</h3>
        <Link 
        className = 'recipe-creator__link'
        to = {`/recipe-editor/${id}`}
        onClick = {() => {props.dispatch(addRecipe(id))}}
        >Make somee goooddss
        </Link>
    </div>
    )
}

export default connect()(RecipeCreator)