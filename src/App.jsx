import { useEffect } from 'react';
import Home from "./Pages/Home";
import About from "./Pages/About";
import Skills from "./Pages/Skills";
import Projects from './Pages/Projects';
import Experience from './Pages/Experience';
import Education from './Pages/Education';
import Certifications from './Pages/Certifications';
import Contact from './Pages/Contact';
import Navbar from './Components/Navbar';
import './Components/Navbar.css';
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
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Certifications />
      <Contact />
    </div>
  );
}

export default App;
