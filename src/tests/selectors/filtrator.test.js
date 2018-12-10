import {filtrator} from '../../selectors/filtrator'
import {recipes2} from '../fixtures/recipes' 


test('Should filter by text works' , () => {

     const filters = {
        text:'la',
        difficulty:'all',
        sortBy:'alphabetical'
    }

    const result = filtrator(recipes2,filters)
    expect(result).toEqual([recipes2[2]])
})

test('Should filter by difficulty works' , () => {

    const filters = {
       text:'',
       difficulty:'medium',
       sortBy:'alphabetical'
   }

   const result = filtrator(recipes2,filters)
   expect(result).toEqual([recipes2[0]])
})