import "../assets/styles/CardContainer.css"
import { Card } from './Card'


export const CardContainer = ({list,loadMovie}) => {

  return (
    <section className ='cardContainer'>
           {  
           list.map(({poster_path,overview,title,id})=>(
                <Card
                id={id}
                key={id} 
                poster_path={poster_path}
                overview={overview}
                title={title}
                loadMovie={loadMovie}
                />
            ))
           }          
    </section>
  )
}
