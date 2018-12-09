import { changeFilters } from "../../actions/filterAction";

test('Should return filters object correctly', () => {

    const result = changeFilters({difficulty:'easy'})
    expect(result).toEqual({type:'CHANGE_FILTERS',filters:{
        difficulty:'easy'

    }})
})