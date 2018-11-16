
const addRecipe = () => (
    {
        type:'ADD_RECIPE',
        recipe:{
            title:'',
            preparationTime:null,
            instructions:'',
            difficulty:'easy',
            ingredients:[]
        }
    }
)

export {addRecipe}