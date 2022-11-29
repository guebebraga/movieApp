import React from 'react'
import "../assets/styles/CardOverview.css"

export const CardOverview = ({overview,title}) => {
  return (
    <article id='continer'>
        <div className="description"> 
        <h1>{title}</h1>
        <p>{overview.slice(0,100)}</p>
        <button className='vector'>+</button>
        </div>
    </article>
  )
}
