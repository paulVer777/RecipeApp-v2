import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => (
    <div className = 'header'>
        <Link to = {'/'} >Home</Link>
        <Link to = {'/my-ingredients'} >My Ingredients</Link>
    </div>
)

export default Header