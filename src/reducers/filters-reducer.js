
const filters = {
        text:'',
        difficulty:'all',
        sortBy:'alphabetical'
}

const filtersReducer = (state = filters, action) => {
    switch(action.type){
        case 'CHANGE_FILTERS':
            return action.filters
        default:
            return state
    } 
}

export default filtersReducer