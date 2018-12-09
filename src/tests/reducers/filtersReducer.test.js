import filtersReducer from '../../reducers/filters-reducer'

test('Should set state correctly ', () => {

    const filters = {
        default:'default'
    }

    const newFilters = {
        type:'CHANGE_FILTERS',
        filters:{
        text:'e',
        sortBy:'data',
        difficulty:'easy'
        }
    }

    const state = filtersReducer(state,newFilters)
    expect(state).toEqual(newFilters.filters)

})