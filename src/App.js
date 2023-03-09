import Alert from './componets/Alert';
import Navbar from './componets/Navbar';
import TextForm from './componets/TextForm';
import About from './componets/About';
import './App.css';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";



function App() {
  const [mode, setMode] = useState({
    background: "#F8EAD8",
    nav: "#A7727D",
    box: "#F9F5E7",
    color: "Black"
  })

  const [alert, setAlert] = useState(null);

  const showAlert = (type, message) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000)
  };

  const toggleMode = (nav, background, box, color) => {
    setMode({
      nav: nav,
      box: box,
      color: color
    })
    document.body.style.background = background;
    showAlert("success", "Mode is changed.")

  }

  return (
    
      <Router>
        <Navbar tilte="Text Player" home="Home" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
          <Route exact path="/" element={<TextForm heading="Enter Text Here" mode={mode} showAlert={showAlert} />}></Route>
          <Route exact path="/about" element={ <About mode={mode}/>}></Route>
        </Routes>
      </Router>
  );
}

export default App;
