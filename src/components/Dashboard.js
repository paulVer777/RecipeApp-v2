import React from 'react'
import RecipeCreator from '../components/RecipeCreator'
import RecipeList from '../components/RecipeList'

const Dashboard = () => (
    <div className = 'dashboard'>
        <h2>Dasboard</h2>
        <RecipeCreator />
        <RecipeList />
    </div>
)
    
export default Dashboard