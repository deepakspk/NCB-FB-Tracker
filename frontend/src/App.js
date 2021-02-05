import React from "react";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Contact from "./contact/Contact";
import './App.css';



function App() {
  return (
    <div className="App">
      <Router>
        <Contact />
      </Router>      
    </div>
  );
}

export default App;
