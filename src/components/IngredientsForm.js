import React from 'react'
import { connect } from 'react-redux';
import { addIngredient } from '../actions/recipeActions';
import uuidv4 from 'uuid'

 export class IngredientsForm extends React.Component {

state = {
    text: ''
}

onSubmitHandler = (event) => {
        event.preventDefault()
        const data = event.target.elements.text.value
        this.setState((prevState) => ({text:data}),() => this.props.addIngredient(this.props.id,{title:data, id:2}))
        
}

render(){
    return(
        <div className = 'ingredient-form' >
        <form onSubmit = {this.onSubmitHandler}>
            <input type = 'text' placeholder = 'ingredient name' name = 'text' />
            <button>Add Ingredient</button>
        </form>
        </div>
    )
}
}


const mapDispatchToProps = (dispatch) => ({
    addIngredient:(id,ingredientObj)=> dispatch(addIngredient(id,ingredientObj))
})

export default connect(undefined,mapDispatchToProps)(IngredientsForm)
 
