import {createStore,combineReducers} from 'redux'
import recipesReduer from '../reducers/recipesReducer'

const getStore = () => (

    createStore(combineReducers(
    {
        recipes:recipesReduer, 
    }
))
)

export default getStore




