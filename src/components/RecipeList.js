import React from 'react'
import { connect} from 'react-redux'
import RecipeListItem from './RecipeListItem';


const RecipeList = (props) => (
    <div className = 'recipe-list'>
        {
            props.recipes.length < 1 ? <p className = 'recipe-list__text' >You have no recipes yet</p>
            :
            props.recipes.map((value,index) => <RecipeListItem data = {value} key = {value.id} />)}
    </div>
)

const mapStateToProps = (state) => (
    {
        recipes:state.recipes
    }
)

export default connect(mapStateToProps)(RecipeList)