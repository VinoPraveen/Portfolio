import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from './Pages/Contact';
import Project from './Pages/Projects';
import Navbar from './Components/Navbar';
import Skills from './Pages/Skills';
import './index.css';


function App() {
  return (
    <div>
      <Navbar />
      <Home/>
       <About/>
      <Project/>
      <Skills/>
        <Contact/>
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Projects" element={<Project />} />
        <Route path="/Skills" element={<Skills />} />
      </Routes> */}
    </div>
  );
}

export default App;
