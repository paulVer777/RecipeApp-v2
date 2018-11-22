
const add = (a,b) => a + b 
const generateGreeting = (name) => `Hello ${name}!`

test('testing add function',()=> {

    const result = add(3,4);

    expect(result).toBe(7);
})


test('should display greeting with exclamation mark',() => {

    const result = generateGreeting('Pawel')
    expect(result).toBe('Hello Pawel!')

})