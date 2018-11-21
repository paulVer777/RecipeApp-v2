import React from 'react'
import { connect } from 'react-redux';

class Filters extends React.Component {
    
    state = {
        text:'',
        difficulty:'all',
        sortBy:'alphabetical'
    }

    onEventHandler = (event) => {
        const data = event.target.value
        const propertyName = event.target.name
        this.setState((prevState) => ({[propertyName]:data}), ()=> this.props.dispatch({type:'CHANGE_FILTERS',filters:this.state}))
    }

    render(){
        return (
            <div className = 'filters' >
                <input type = 'text' placeholder = 'Search (recipe name)' name = 'text' onChange = {this.onEventHandler} />
                <select name = 'difficulty' onChange = {this.onEventHandler}>
                    <option value = 'all' >All</option>
                    <option value = 'easy' >Easy</option>
                    <option value = 'medium'>Medium</option>
                    <option value = 'hard'>Hard</option>
                </select>
                <select name = 'sortBy' value = {this.state.sortBy} onChange = {this.onEventHandler} >
                    <option value = 'alphabetical'>Alphabetical</option>
                    <option value = 'preparationTime'>Preparation Time</option>
                </select>
            </div>
        )
    }
}

export default connect()(Filters)