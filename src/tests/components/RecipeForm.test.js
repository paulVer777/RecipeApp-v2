import React from 'react'
import { shallow } from 'enzyme'
import RecipeForm from '../../components/RecipeForm';
import {recipes2} from '../fixtures/recipes'

test('Should render recipe form correctly', () => {

    const wrapper = shallow(<RecipeForm />)
    expect(wrapper).toMatchSnapshot()
})

test('Should render recipe form with passed data', () => {

    const wrapper = shallow(<RecipeForm data = {recipes2[0]} />)
    expect(wrapper).toMatchSnapshot()

})

test('should set title to state', () => {

    const submitter = jest.fn()

    const wrapper = shallow(<RecipeForm submitter = {submitter} />)
    wrapper.find('input').at(0).simulate('change', {
        target:{
            value:'pizza',
            name:'title'
        }
    })
    expect(wrapper.state('title')).toBe('pizza')
    expect(submitter).toHaveBeenLastCalledWith({"difficulty": "easy", "instructions": "", "preparationTime": "", "title": "pizza"})
})