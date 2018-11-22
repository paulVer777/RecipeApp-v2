import { addRecipe, removeRecipe, editRecipe } from "../../actions/recipeActions";

//toBe ( === comparison )
// toEqual( checks if the objects have the same values )

test('should setup remove expense action object', () => {

    const action = removeRecipe('qwerty')
    expect(action).toEqual({
        type:'REMOVE_RECIPE',
        id:'qwerty'
    })  
})

test('should return edit recipe action object', () => {

    const action = editRecipe('qwerty',{title:'salt'})
    expect(action).toEqual({
        type:'EDIT_RECIPE',
        id:'qwerty',
        recipe:{
            title:'salt'
        }
    })
})

test('should return addRecipe action object', () => {
    const recipe = {
        title:'Unknown',
        preparationTime:'',
        instructions:'',
        difficulty:'easy',
        ingredients:[]
    }
    const action = addRecipe('qwerty')
    expect(action).toEqual({
        type:'ADD_RECIPE',
        recipe:{
            ...recipe,
            id:expect.any(String) // passes if there will be string value
        }
    })
})

