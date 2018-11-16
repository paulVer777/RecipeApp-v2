const recipes = []

const recipesReducer = (state = recipes, action) => {
    switch(action.type){
        case 'ADD_RECIPE':
            return [...state, action.recipe]
    
        default:
            return state
        }
}

export default recipesReducer