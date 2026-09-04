import { useEffect } from 'react';
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from './Pages/Contact';
import Project from './Pages/Projects';
import Navbar from './Components/Navbar';
import './Components/Navbar.css';
import Skills from './Pages/Skills';
import './index.css';

function App() {
  useEffect(() => {
    const revealEls = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    revealEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Project />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
