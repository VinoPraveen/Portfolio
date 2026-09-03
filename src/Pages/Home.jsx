import { Link } from 'react-router-dom';


function Home() {
  return (
    <div id="Home" className="home-container">
      <section className="hero">
        <div className="hero-content">
          <h1>Hi, I'm Vino Praveen</h1>
          <p className="hero-subtitle">Front-End Web Developer & Folk Artist</p>
          <p className="hero-description">
            Passionate about building responsive, user-friendly web applications using React.js. 
            Currently learning and growing as a developer.
          </p>
          <div className="hero-buttons">
           <a href="#Projects" className="btn btn-primary">
  View My Work
</a>

<a href="#Contact" className="btn btn-secondary">
  Get In Touch
</a>
          </div>
        </div>
      </section> 

      <section className="quick-intro">
        <div className="intro-card">
          <h3> Learning</h3>
          <p>React.js</p>
        </div>
        <div className="intro-card">
          <h3> Tools</h3>
          <p>Git, GitHub, VS Code, Vite</p>
        </div>
        <div className="intro-card">
          <h3> Passionate About</h3>
          <p>Clean Code, UX Design, Problem Solving</p>
        </div>
      </section>
    </div>
  );
}

export default Home;
