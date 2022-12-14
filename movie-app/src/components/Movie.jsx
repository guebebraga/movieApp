import React from 'react'
import "../assets/styles/Movie.css"
import { Endpoints } from '../Config/Endpoints'

export const Movie = ({title,poster_path,genres,overview,
  revenue,release_date,runtime,vote_average,spoken_languages,pullOutDetails}) => {

const {imgURL}= Endpoints

  return (
    <article id='movie'>
        <aside className='poster'>
            <img className='imgDetails' src={`${imgURL}w400${poster_path}`} alt="img"/>
        </aside>
        <article className='ditails'>
            <h1>{title}</h1>
            <div className='genres'>{genres}</div>
            <p className='overview'>{overview}</p>
            <p className='revenue'>Presupuesto: {revenue} $</p>
            <p className='release_date'>Lanzamiento: {release_date}</p>
            <p className='runtime'>Duracion: {runtime} min</p>  
            <p className='vote_average'>Valoracion: {vote_average}</p> 
            <div className='spoken_languages'>{spoken_languages}</div>     
        </article>
        <div className='buttonContainer'>
        <button className='button' onClick={()=>pullOutDetails()} ><span className='material-symbols-outlined'>Close</span></button>
        </div>
    </article>
  )
}
