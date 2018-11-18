import React from 'react'

export default class RecipeForm extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            title:'',
            preparationTime:'',
            instructions:'',
            difficulty:'easy',
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
            <div>
                <form onSubmit = {this.onSubmitHandler}>
                    <input type = 'text' placeholder = 'title' name = 'title' onChange = {this.onEventHandler} />
                    <input type = 'text' placeholder = 'preparation time' name = 'preparationTime' onChange = {this.onEventHandler}/>
                    <textarea type = 'text' placeholder = 'instructions' name = 'instructions' onChange = {this.onEventHandler}/>
                    <select name = 'difficulty' onChange = {this.onEventHandler}  >
                        <option>Easy</option>
                        <option>Medium</option>
                        <option>Hard</option>
                    </select>
                </form>
            </div>
        )
    }
}