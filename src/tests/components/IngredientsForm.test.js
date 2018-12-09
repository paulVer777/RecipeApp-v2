import React from 'react'
import  {shallow} from 'enzyme'
import {IngredientsForm} from '../../components/IngredientsForm';


test('should render IngredientsForm correctly' , () => {
    const wrapper = shallow(<IngredientsForm />)
    expect(wrapper).toMatchSnapshot()
})

test('Should call add ingredient with correct data', ()=>{

    const addIngredient = jest.fn()

    const wrapper =  shallow( <IngredientsForm addIngredient = {addIngredient} id = {2} /> )
    wrapper.find('form').simulate('submit', {
        preventDefault:()=> {},
        target:{
            elements:{
                text:{
                    value:'hej'
                }
            }
        }
    })
    expect(addIngredient).toHaveBeenLastCalledWith(2,{title:'hej',id:2})
})