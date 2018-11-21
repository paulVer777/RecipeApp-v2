import {createStore,combineReducers} from 'redux'
import recipesReduer from '../reducers/recipesReducer'
import filtersReducer from '../reducers/filters-reducer';

const getStore = () => (

    createStore(combineReducers(
    {
        recipes:recipesReduer, 
        filters:filtersReducer
    }
))
)

export default getStore




