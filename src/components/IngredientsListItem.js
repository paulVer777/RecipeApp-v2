import React from 'react'

const IngredientsListItem = (props) => (
    <div className = 'ingredient-list-item'>
        <span>{props.data.title}</span>
        <button>Remove</button>
    </div>
)

export default IngredientsListItem