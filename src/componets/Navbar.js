import React from 'react'
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const handleLight=()=>{
    props.toggleMode("#A7727D","#F8EAD8","#F9F5E7","Black");
  }
  const handlePink=()=>{
    props.toggleMode("#4C0033","#790252","#AF0171","White");
  }
  const handleGrey=()=>{
    props.toggleMode("#2C3333","#395B64","#A5C9CA","White");
  }
  const handleGreen=()=>{
    props.toggleMode("#191A19","#1E5128","#4E9F3D","White");
  }
  return (

    <nav className={`navbar navbar-expand-lg`} style={{backgroundColor: (props.mode.nav), color: props.mode.color}}>
      <div className="container-fluid">
        <a className="navbar-brand" style={{color : props.mode.color}} href="/">{props.tilte}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item" >
              <Link className="nav-link active" style={{color : props.mode.color}} aria-current="page" to="/">{props.home}</Link>
            </li>
            <li className="nav-item" >
              <Link className="nav-link" style={{color : props.mode.color}} aria-current="page" to="/about">About us</Link>
            </li>
          </ul>
          
          
        </div>
        
        <button onClick={handleLight} className="circle light" type='button'></button>          
        <button onClick={handlePink} className="circle pink"></button>
        <button onClick={handleGrey} className="circle grey"></button>
        <button onClick={handleGreen} className="circle green"></button>
        
      </div>
    </nav>

  )
}
