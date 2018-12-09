import React from 'react'
import ReactShallowRenderer from 'react-test-renderer/shallow'
import Dashboard from '../../components/Dashboard';


test('Should render Dashboard correctly', () => {

    const renderer = new ReactShallowRenderer()
    renderer.render(<Dashboard />)
    expect(renderer.getRenderOutput()).toMatchSnapshot()
})



