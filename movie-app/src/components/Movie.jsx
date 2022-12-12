import React from 'react'
import "../assets/styles/Movie.css"
import { Endpoints } from '../Config/Endpoints'

export const Movie = ({title,poster_path,genres,overview,
  revenue,release_date,runtime,vote_average,spoken_languages,id}) => {

const {imgURL}= Endpoints

  return (
    <article id='movie'>
        <aside className='poster'>
            <img className='imgDetails' src={`${imgURL}w400${poster_path}`} alt="img"/>
        </aside>
        <article className='ditails'>
            <h1>{title}</h1>
            <button>+</button>
            <div>{genres}</div>
            <p>{overview}</p>
            <p>{revenue}</p>
            <p>{release_date}</p>
            <p>{runtime}</p>  
            <p>{vote_average}</p> 
            <div>{spoken_languages}</div>     
        </article>
    </article>
  )
}
