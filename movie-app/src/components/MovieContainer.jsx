import "../assets/styles/MovieContainer.css"
import { Movie } from './Movie'
//import { Endpoints } from "../Config/Endpoints"

export const MovieContainer = ({movie,pullOutDetails}) => {
  
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
                pullOutDetails={pullOutDetails}
      />      
      :
      "No hay movie"
     }       
    </section>
  )
}


