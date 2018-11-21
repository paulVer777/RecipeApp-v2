import React from 'react'
import RecipeCreator from '../components/RecipeCreator'
import RecipeList from '../components/RecipeList'
import Filters from './Filters';

const Dashboard = () => (
    <div className = 'dashboard'>
        <h2>Dasboard</h2>
        <RecipeCreator />
        <Filters />
        <RecipeList />
    </div>
)
    
export default Dashboard