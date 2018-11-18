import React from 'react'
import { connect} from 'react-redux'

const RecipeList = (props) => (
    <div>
        {props.recipes.map((value,index) => <div>{value.title}</div>)}
    </div>
)

const mapStateToProps = (state) => (
    {
        recipes:state.recipes
    }
)

export default connect(mapStateToProps)(RecipeList)