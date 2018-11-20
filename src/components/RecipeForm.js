import React from 'react'

export default class RecipeForm extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            title: props.data ? props.data.title : '',
            preparationTime:props.data ? props.data.preparationTime : '',
            instructions:props.data ? props.data.instructions : '',
            difficulty:props.data ? props.data.difficulty : '',
        }
    }

    onEventHandler = (event) => {
        const data = event.target.value
        const propertyName = event.target.name
        
        this.setState((prevState) => ({[propertyName]:data}),()=> 

            this.props.submitter({
            title:this.state.title,
            preparationTime:this.state.preparationTime,
            instructions:this.state.instructions,
            difficulty:this.state.difficulty,
        })
        
    )}

    render(){
        return (
            <div className = 'recipe-form' >
                <form onSubmit = {this.onSubmitHandler}>
                    <input type = 'text' placeholder = 'title' name = 'title' value = {this.state.title} onChange = {this.onEventHandler} />
                    <input type = 'text' placeholder = 'preparation time' name = 'preparationTime' value = {this.state.preparationTime} onChange = {this.onEventHandler}/>
                    <textarea type = 'text' placeholder = 'instructions' name = 'instructions' value = {this.state.instructions} onChange = {this.onEventHandler}/>
                    <select name = 'difficulty' value = {this.state.difficulty} onChange = {this.onEventHandler}  >
                        <option>Easy</option>
                        <option>Medium</option>
                        <option>Hard</option>
                    </select>
                </form>
            </div>
        )
    }
}