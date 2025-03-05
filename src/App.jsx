


import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Service from "./components/Service";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
function App() {

  return (
    
 <Router>
 
<Navbar/>
<Routes>
<Route path="/" element={<Home/>} />
<Route path="/About" element={<About/>} />
<Route path="/Service" element={<Service/>} />
<Route path="/Project" element={<Project/>} />
<Route path="/Contact" element={<Contact/>} />
</Routes>
<Footer/>

 </Router>
  
  );
}

export default App;