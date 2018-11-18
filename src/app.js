import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import AppRouter from './routes/AppRouter'
import getStore from './store/store'
import {Provider} from 'react-redux'
import {addRecipe} from './actions/recipeActions'

const store = getStore()

store.subscribe(()=> console.log(store.getState()))

const jsx = (
    <Provider store = {store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render( jsx, document.querySelector('#app'))

// app js is in charge of only bootstrap things that live else where

// launcher