function Home() {
  return (
    <div id="Home" className="home-container">
      <section className="hero">
        <div className="hero-content">
          <h1>Hi, I&apos;m Vino Praveen A</h1>
          <p className="hero-subtitle">Aspiring Java Full Stack Developer</p>
          <p className="hero-description">
            B.Sc. Computer Science graduate building practical web applications
            with HTML, CSS, and JavaScript while growing into Java full stack
            development with Core Java, JDBC, and Spring Boot.
          </p>
          <div className="hero-buttons">
            <a href="#Projects" className="btn btn-primary">View My Projects</a>
            <a href="#Contact" className="btn btn-secondary">Contact Me</a>
          </div>
        </div>
      </section>

      <section className="quick-intro">
        <div className="intro-card">
          <h3>Foundation</h3>
          <p>HTML5, CSS3, JavaScript, Java, SQL</p>
        </div>
        <div className="intro-card">
          <h3>Currently Learning</h3>
          <p>Core Java, JDBC, Spring Boot</p>
        </div>
        <div className="intro-card">
          <h3>Tools</h3>
          <p>VS Code, Eclipse IDE, Git, GitHub</p>
        </div>
      </section>
    </div>
  );
}

export default Home;
