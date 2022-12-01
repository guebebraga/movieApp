import React from 'react'
import "../assets/styles/Movie.css"
import { Endpoints } from '../Config/Endpoints'

export const Movie = ({title,poster_path,genres,overview,
                       revenue,release_date,runtime,vote_average,spoken_languages}) => {
  const {movieBASE_URL,key,lenguaje,}= Endpoints
  const ide ='436270'
  return (
    <main id='continer'>
        <aside className='poster'>
            <img src={`${movieBASE_URL}${ide}${key}${lenguaje}${poster_path}`} alt="img"/>
        </aside>
        <article className='description'>
            <h1>{title}</h1>
            <p>{genres}</p>
            <p>{overview}</p>
            <p>{revenue}</p>
            <p>{release_date}</p>
            <p>{runtime}</p>  
            <p>{vote_average}</p> 
            <p>{spoken_languages}</p>     
        </article>
    </main>
  )
}
