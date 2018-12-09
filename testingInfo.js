
// TESTING COMPONENTS

// || npm i react-test-renderer || (library especially created by fb team for testing react componnets, very simple utility) //
// Allows us to render our component inside of js code (required in order to snapshot testing works) //
// Usage:
// import ReactShallowRenderer from 'react-test-renderer/shallow'
// ||
// example:
// test('Should render Dashboard correctly', () => {

//     const renderer = new ReactShallowRenderer()
//     renderer.render(<Dashboard />)
//     console.log(renderer.getRenderOutput())
// })
//||||


// ENZYME much more full featured renderer than react-test-renderer, with enzyme is easy to test events within components.

// instalation 
// npm i enzyme 
// npm i enzyme-adapter-react-16 (allows us to specify which version of react we are going to test against, so this allows 
// the core enzyme library to be a whole a lot smaller)
//npm i raf (polyfill for browser feature known as request animation frame, if we dont have it in our testing environment it does casue some isues)

// we need to create a setup test file for our project, this will allows us to configure test environment,
//we just do it once instead of doing it every time we use enzyme 

// setupTest.js (configuration for enzyme) in main directory, look for that file

// next step is setup Jest configuration json file which is gonna to allow us specify that setupTest file and raf should run
// before tests, in this in setupFiles we need to declare array with the path to our configuration files (raf and setupTest)(relative paths)

// then in package.json we need to specify configuration argument which points where configuration file lives, (we specify this after jest command) 
// || "test": "jest --config=jest.config.json" ||

// then we need to install library enzyme to json in order to display only our component parts without internal enzyme code
// that library is called enzyme to json
// npm i enzyme-to-json 
//usage : https://www.npmjs.com/package/enzyme-to-json

// ...expect(toJson(wrapper)).toMatchSnapshot()...

//one more thing, we can setup enzyme to json to work automatically without manually calling that method,
// in order to do that we need to add this line to jest config.json file : "snapshotSerializers":["enzyme-to-json/serialzier"]