import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Header from '../components/Header'
import Dasboard from '../components/Dashboard'
import RecipeCreator from '../components/RecipeCreator'
import RecipeEditor from '../components/RecipeEditor'
import ErrorPage from '../components/ErrorPage'
import IngredientsDatabase from '../components/IngredientDatabase'

const AppRouter = () => (
    
    <BrowserRouter>
        <div>
        <Header/>
        <Switch>
            <Route path = '/' component = {Dasboard} exact = {true} />
            <Route path = '/recipe-creator' component = {RecipeCreator} />
            <Route path = '/recipe-editor' component = {RecipeEditor} />
            <Route path = '/my-ingredients' component = {IngredientsDatabase} />
            <Route component = {ErrorPage} />
        </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter
