
const addRecipe = (id) => (
    {
        type:'ADD_RECIPE',
        recipe:{
            id:id,
            title:'',
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

export {addRecipe, editRecipe,removeRecipe}