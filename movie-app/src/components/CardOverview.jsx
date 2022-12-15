import React from 'react'
import "../assets/styles/CardOverview.css"

export const CardOverview = ({overview,title}) => {
  return (
    <article id='continer'>
      <div className="description"> 
      <div>
        <h1>{title}</h1>
        <p>{`${overview.slice(0,80)}...`}</p>
      </div>
      <div className='divVector'>
          <button className='vector'><span className='material-symbols-outlined'>Add</span></button>
      </div>
      </div>
    </article>
  )
}
