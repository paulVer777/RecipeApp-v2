import { locale } from "moment";

const recipes = []

const recipesReducer = (state = recipes, action) => {
    switch(action.type){
        case 'ADD_RECIPE':
            return [...state, action.recipe]
        case 'EDIT_RECIPE':
            return state.map((value,index) => {
             
               return action.id === value.id ? { ...value,...action.recipe} : value

            })
        default:
            return state
        }
}

export default recipesReducer