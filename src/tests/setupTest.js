import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

//"Finally, you need to configure enzyme to use the adapter you want it to use", we imported version 16 so support for 
// v16 will be added 

Enzyme.configure({ // method that allows us to configure enzyme

    adapter:new Adapter() // adding support for v16 of react
})