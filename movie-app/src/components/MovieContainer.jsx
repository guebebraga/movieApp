import "../assets/styles/MovieContainer.css"
import { Movie } from './Movie'
//import { Endpoints } from "../Config/Endpoints"

export const MovieContainer = ({movie,setCloseMovie}) => {
  
  const {id,title,poster_path,genres,overview,revenue,release_date,runtime,vote_average,spoken_languages}=movie
 
  return (
    <section id ='movieContainer'>
      {
      movie? 
      <Movie
                key={id}
                id ={id}
                title={title}
                overview={overview}
                release_date={release_date}
                runtime={runtime}
                genres={genres.map(item=>(<div key={item.id}>{item.name}</div>))}
                spoken_languages={spoken_languages.map(item=>(<p key={item.name}>{item.name}</p>))}
                revenue={revenue}
                vote_average={vote_average}
                poster_path={poster_path}
                setCloseMovie={setCloseMovie}
      />      :
      "No hay movie"
     }       
    </section>
  )
}


/*<Movie
                key={id}
                id ={id}
                title={title}
                poster_path={poster_path}
                genres={genres}
                overview={overview}
                revenue={revenue}
                release_date={release_date}
                runtime={runtime}
                vote_average={vote_average}
                spoken_languages={spoken_languages}
                />
      */

/*
<article id='movie'>
      <aside className='poster'>
          <img src={`${movieBASE_URL}${key}${lenguaje}${poster_path}`} alt="img"/>
      </aside>
      <article className='ditails'>
          <h1>{title}</h1>
          <button>+</button>
          <p>{genres}</p>
          <p>{overview}</p>
          <p>{revenue}</p>
          <p>{release_date}</p>
          <p>{runtime}</p>  
          <p>{vote_average}</p> 
          <p>{spoken_languages}</p>     
      </article>
  </article>
*/

/*
list.map(({id,name})=>(
<div>
<p>id</p>
<p>name</p>
</div>
))
*/