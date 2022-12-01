import React from 'react'
import "../assets/styles/CardContiner.css"
import { Card } from './Card'


export const CardContiner = ({list}) => {
  
  return (
    <section id='container'>
        {
            list.map(({poster_path,overview,title})=>(
                <Card 
                poster_path={poster_path}
                overview={overview}
                title={title}
                /*handleClick={handleClick}*/
                />
            ))
        }
    </section>
  )
}
