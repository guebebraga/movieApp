import React from 'react'
import "../assets/styles/CardOverview.css"

export const CardOverview = ({overview,title/*,handleClick*/}) => {
  return (
    <article id='continer'>
      <div className="description"> 
      <div>
        <h1>{title}</h1>
        <p>{overview.slice(0,100)}</p>
      </div>
      <div className='divVector'>
          <button className='vector' /*onClick={handleClick}*/>+</button>
      </div>
      </div>
    </article>
  )
}
