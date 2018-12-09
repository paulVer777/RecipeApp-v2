import recipesReducer from '../../reducers/recipesReducer'
import {recipes} from '../fixtures/recipes'

test('Should add recipe correctly', () => {

    const action = {
        type:'ADD_RECIPE',
        recipe:{
            title:'new Recipe'
        }
    }

    const state = recipesReducer(recipes,action)
    expect(state).toEqual([...recipes,action.recipe])

})

test('Should remove recipe correctly', () => {

    const action = {
        type:'REMOVE_RECIPE',
        id:3
    }

    const state = recipesReducer(recipes,action)
    expect(state).toEqual([recipes[0],recipes[1]])

})

test('Should edit recipe correctly', () => {

    const action = {
        type:'EDIT_RECIPE',
        id:3,
        recipe:{
            title:'spaghetti'
        }
    }

    const state = recipesReducer(recipes,action)
    expect(state).toEqual([recipes[0],recipes[1],{...action.recipe,id:3, ingredients:recipes[2].ingredients}])

})

test('Should add ingredient correctly', () => {

    const action = {
        type:'ADD_INGREDIENT',
        id:3,
        ingredient:{title:'onion', id:1}
    }

    const state = recipesReducer(recipes,action)
    expect(state).toEqual([recipes[0],recipes[1],{id:3, title:'lasagne', ingredients:[recipes[2].ingredients[0],action.ingredient]}])

})

test('Should remove ingredient correctly', () => {

    const action = {
        type:'REMOVE_INGREDIENT',
        recipeId:3,
        ingredientId:1
    }

    const state = recipesReducer(recipes,action)
    expect(state).toEqual([recipes[0],recipes[1],{id:3, title:'lasagne', ingredients:[]}])

})