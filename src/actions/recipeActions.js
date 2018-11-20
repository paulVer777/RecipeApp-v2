
const addRecipe = (id) => (
    {
        type:'ADD_RECIPE',
        recipe:{
            id:id,
            title:'Unknown',
            preparationTime:null,
            instructions:'',
            difficulty:'easy',
            ingredients:[]
        }
    }
)

const editRecipe = (id, recipe) => (
    {
        type:'EDIT_RECIPE',
        id,
        recipe 
    }
)
const removeRecipe = (id) => (
    {
        type:'REMOVE_RECIPE',
        id
    }
)

const addIngredient = (id, ingredient) => (
    {
        type:'ADD_INGREDIENT',
        id,
        ingredient
    }
)

export {addRecipe, editRecipe,removeRecipe, addIngredient}