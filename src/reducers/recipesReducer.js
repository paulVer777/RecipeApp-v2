
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
        case 'ADD_INGREDIENT':
            {
                return state.map((value,index) => {

                   return action.id === value.id ? 
                    {
                        ...value,
                        ingredients:[...value.ingredients,{...action.ingredient}]
                    }
                    :
                    value
                })
            }
        case 'REMOVE_INGREDIENT':
            {
                console.log(action.recipeId,action.ingredientId)

                return state.map((value,index) => {

                    return action.recipeId === value.id ?
                    {
                        ...value,
                        ingredients:value.ingredients.filter((value,index) => value.id !== action.ingredientId)
                    }
                    :
                    value
                })
            }
        
        default:
            return state
        }
}

export default recipesReducer