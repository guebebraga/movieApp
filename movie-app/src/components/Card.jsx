import React from 'react'
import '../assets/styles/Card.css'
import { Endpoints } from '../Config/Endpoints'
import { CardOverview } from './CardOverview'

export const Card = ({poster_path,overview,title,id,loadMovie}) => {

  return (
    <article id='card'>
        <div
         key={id}
         onClick={()=>loadMovie(id)}
         className="imgContiner"
         style={{
         backgroundImage:`url(${Endpoints.imgURL}w400${poster_path})`,
         backgroundRepeat:'no-repeat',
         backgroundSize: 'cover' 
         }}
         >
          <CardOverview 
          overview={overview} 
          title={title} 
        />
        </div>
    </article>
  )
}
