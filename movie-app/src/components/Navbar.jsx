import React from 'react'
import { useState } from 'react'
import "../assets/styles/Navbar.css"
import { HttpClient } from '../utils/HttpClient'
import { Endpoints } from '../Config/Endpoints'
import logo from '../assets/img/logoTDT.png'

export const Navbar = (props) => {
  
  const [title,setTitle]= useState("");

  const handleSubmit= e =>{
    e.preventDefault();
    HttpClient.customFetch(`${Endpoints.searchMovieBASE_URL}${Endpoints.key}${Endpoints.lenguaje}&query=${title}${Endpoints.page}&include_adult=false`,
    null,
    handleSucces,
    handleError
    )  
  }
  const handleSucces =(response)=>{
    if (response){
      console.log(response)
      props.setList(response.results)
    } 
  }

  const handleError=(error)=>{
    console.log(error);
  }
  

  return (
    <aside id="nav">
        <form  className="nav" onSubmit={handleSubmit}>
        <img className='logo' src={logo} 
         alt="img" />
        <div className="searchContiner">
        <input className="buscar" type="text" placeholder='  Buscar..' onChange={e=> setTitle(e.target.value)}/>
        <button className='lupa' type='submit'><span className="material-symbols-outlined">search</span></button>
        </div>
        <input className="favoritos"type="submit" value={'Ver Favoritos 3'}/>
        </form>

    </aside>
  )
}
