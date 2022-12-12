import React from 'react'
import { CardContainer } from './CardContainer'
import { MovieContainer } from './MovieContainer'


export const Container = ({list,movie,loadMovie,selectMovie}) => {

 return (
    <main id='main'>
        {
            !selectMovie
            ?
            <CardContainer
            list={list}
            loadMovie={loadMovie}
            />
            :
            <MovieContainer
            movie={movie}
            />
        }

    </main>
  )
}
