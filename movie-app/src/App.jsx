import { useEffect, useState } from 'react'
import '../src/assets/styles/App.css'
import { Navbar } from './components/Navbar'
import {HttpClient} from "../src/utils/HttpClient"
import {Endpoints} from "../src/Config/Endpoints"
import {CardContiner} from "../src/components/CardContiner"

function App() {
  const [list,setList]= useState([]);

  useEffect(()=>{
    loadList();
  },[]);

  const loadList=()=>{
    /*const[ BASE_URL,key,lenguaje,page]=Endpoints*/
    HttpClient.customFetch(`https://api.themoviedb.org/3/movie/popular?api_key=ddef6f236a598c1deb2e37dfab33a79f&language=en-US&page=1`,
    null,
    handleSucces,
    handleError
    )
  };
  const handleSucces =(response)=>{
    if (response){
      setList(response.results.slice(0,8))
    }
    console.log(list)
  }

  const handleError=(error)=>{
    console.log(error);
  }
  return (
    <div className="App">
      <Navbar/>
      <CardContiner
      list={list}
      />

    </div>
  )
}
export default App
