import { useEffect, useState } from 'react'
import '../src/assets/styles/App.css'
import { Navbar } from './components/Navbar'
import {HttpClient} from "../src/utils/HttpClient"
import {Endpoints} from "../src/Config/Endpoints"
import {Container} from "./components/Container"
import axios from "axios"

function App() {
  const [list,setList]= useState([]);
  const [movie,setMovie]=useState({title:'NO TE RINDAS'});
  const [selectMovie,setSelectMovie]=useState(false)

  useEffect(()=>{
    loadList();
  },[]);

  
  const loadList=()=>{
    const {BASE_URL,key,lenguaje,page}= Endpoints
    HttpClient.customFetch(`${BASE_URL}${key}${lenguaje}${page}`,
    null,
    handleSuccess,
    handleError
    )
  };
  
  const handleSearch = (result)=> {
    console.log(result)
    setList(result)
  }

  const handleSuccess =(response)=>{
    if (response){
      setList(response.results.slice(0,8))
      console.log(list)
    }
  }

  const handleError=(error)=>{
    console.log(error);
  }
  
  const loadMovie= async(id)=>{
    const {movieBASE_URL,key,lenguaje}=Endpoints
    const {data} = await axios.get(`${movieBASE_URL}id${key}${lenguaje}`.replace('id',id))
    if (data){
    //const laData= JSON.parse(JSON.stringify(data))
    console.log(data)    
    setMovie(data)
    setSelectMovie(true)
    }
    }
  return (

    <div className="App"> 
     <Navbar 
     setList={handleSearch}
     />
     <Container
      list={list}
      movie={movie}
      loadMovie={loadMovie}
      selectMovie={selectMovie}
      />
    </div>

  )
}
export default App
//Object.assign({} , data)
//setMovie(Object.entries(data))
//setMovie(movie.push(data))
//setMovie(Object.keys(movie))