function Home() {
  return (
    <div id="Home" className="home-container">
      <section className="hero">
        <div className="hero-content">
          <h1>Hi, I&apos;m Vino Praveen</h1>
          <p className="hero-subtitle">Front-End Developer</p>
          <p className="hero-description">
            I build responsive, accessible web applications with React.js and modern
            front-end tools. Focused on writing clean code that delivers real user value.
          </p>
          <div className="hero-buttons">
            <a href="#Projects" className="btn btn-primary">View My Work</a>
            <a href="#Contact" className="btn btn-secondary">Get In Touch</a>
          </div>
        </div>
      </section>

      <section className="quick-intro">
        <div className="intro-card">
          <h3>Focus</h3>
          <p>React.js, JavaScript, Responsive UI</p>
        </div>
        <div className="intro-card">
          <h3>Tools</h3>
          <p>Git, GitHub, VS Code, Vite</p>
        </div>
        <div className="intro-card">
          <h3>Currently</h3>
          <p>Expanding into full-stack development and API integration</p>
        </div>
      </section>
    </div>
  );
}

export default Home;
