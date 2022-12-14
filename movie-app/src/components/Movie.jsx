import React from 'react'
import "../assets/styles/Movie.css"
import { Endpoints } from '../Config/Endpoints'

export const Movie = ({title,poster_path,genres,overview,
  revenue,release_date,runtime,vote_average,spoken_languages,setCloseMovie}) => {

const {imgURL}= Endpoints

  return (
    <article id='movie'>
        <aside className='poster'>
            <img className='imgDetails' src={`${imgURL}w500${poster_path}`} alt="img"/>
        </aside>
        <article className='ditails'>
            <h1>{title}</h1>
            <div className='genres'>{genres}</div>
            <p className='overview'>{overview}</p>
            <p>Lanzamiento: {revenue}</p>
            <p>Duracion: {release_date}</p>
            <p>Valoracion: {runtime}</p>  
            <p>{vote_average}</p> 
            <div className='spoken_languages'>{spoken_languages}</div>     
        </article>
        <div className='buttonContainer'>
        <button onClick={setCloseMovie(true)} className='button'>+</button>
        </div>
    </article>
  )
}
