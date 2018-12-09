
const filtrator = (arr, filters) => {

   return arr.filter((value, index) => {

        const difficulty = filters.difficulty === 'all' || value.difficulty === filters.difficulty
        const text = value.title.toLowerCase().includes(filters.text.toLowerCase())
       
        return difficulty && text
    }).sort((a,b) => {

        if(filters.sortBy === 'alphabetical'){

            return a.title[0].toLowerCase() < b.title[0].toLowerCase() ? -1 : 1
        }
        if(filters.sortBy === 'preparationTime'){

            return parseInt(a.preparationTime) < parseInt(b.preparationTime) ? -1 : 1
        }

    })
}

export {filtrator}