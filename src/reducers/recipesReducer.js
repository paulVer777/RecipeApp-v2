
const recipes = []

const recipesReducer = (state = recipes, action) => {
    switch(action.type){
        case 'ADD_RECIPE':
            return [...state, action.recipe]
        case 'EDIT_RECIPE':
            return state.map((value,index) => {
             
               return action.id === value.id ? { ...value,...action.recipe} : value

            })
        case 'REMOVE_RECIPE':
            {
            return state.filter((value,index) => action.id !== value.id)
            }
        default:
            return state
        }
}

export default recipesReducer