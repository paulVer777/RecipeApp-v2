import ReactShallowRenderer from 'react-test-renderer/shallow'
import React from 'react'
import Header from '../../components/Header';
import {shallow} from 'enzyme'

test('Should render header correctly' , () => {

    const renderer = new ReactShallowRenderer()
    renderer.render(<Header />)
    expect(renderer.getRenderOutput())
})

//After configuration jest with enzyme 

test('should render header correctly', () => {

    const wrapper = shallow(<Header />) // now we can acces to full api https://airbnb.io/enzyme/docs/api/shallow.html (various methods)
    expect(wrapper).toMatchSnapshot()
})


