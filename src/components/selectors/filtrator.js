
const filtrator = (arr, filters) => {

   return arr.filter((value, index) => {

        const difficulty = filters.difficulty === 'all' || value.difficulty === filters.difficulty
        const text = value.title.toLowerCase().includes(filters.text.toLowerCase())
       
        return difficulty && text
    })
}

export {filtrator}