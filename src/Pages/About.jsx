function About() {
  return (
    <div id="About" className="about-container reveal">
      <h1>About Me</h1>

      <section className="about-section">
        <h2>Who I Am</h2>
        <p>
          I&apos;m Vino Praveen, a front-end web developer based in Chennai, Tamil Nadu.
          I hold a B.Sc. in Computer Science and spend my time building practical,
          user-friendly web applications with modern technologies.
        </p>
      </section>

      <section className="about-section">
        <h2>What I Build</h2>
        <p>
          I started with HTML, CSS, and JavaScript and progressively moved toward
          component-based architecture with React.js. My projects include a
          farmer-to-consumer marketplace and this portfolio&mdash;each one teaching
          me something new about clean code, responsive design, and real-world problem solving.
        </p>
      </section>

      <section className="about-section">
        <h2>Currently Learning</h2>
        <p>
          I&apos;m deepening my React.js skills&mdash;component composition, hooks,
          state management, and dynamic routing. I&apos;m also exploring API
          integration and full-stack concepts to broaden what I can build end to end.
        </p>
      </section>

      <section className="about-section">
        <h2>Career Goal</h2>
        <p>
          I&apos;m looking for a junior front-end or full-stack developer role where I
          can contribute to real products, learn from experienced engineers, and grow
          into a well-rounded software developer.
        </p>
      </section>

      <section className="about-section">
        <h2>Education</h2>
        <div className="education-item">
          <h3>B.Sc. Computer Science</h3>
          <p className="school-name">Apollo Arts &amp; Science College, Chennai</p>
          <p className="year">2026</p>
        </div>
        <div className="education-item">
          <h3>Higher Secondary Education (+2)</h3>
          <p className="school-name">Government Higher Secondary School, Erode</p>
          <p className="year">2023</p>
        </div>
      </section>

      <section className="about-section">
        <h2>Internship Experience</h2>
        <div className="internship-item">
          <h3>Intern &mdash; Infogrow Solutions</h3>
          <p className="duration">25 Days</p>
          <p>
            Contributed to documentation and requirement-understanding processes for
            software development projects, supporting the team&apos;s SDLC workflow.
          </p>
        </div>
      </section>

      <section className="about-section">
        <h2>Certifications</h2>
        <ul className="certifications-list">
          <li>Cloud Security Fundamentals &mdash; IBM SkillsBuild</li>
          <li>Lingua Skill Cambridge Certificate (B1 Level) &mdash; 2024</li>
        </ul>
      </section>

      <section className="about-section">
        <h2>Languages</h2>
        <div className="languages-grid">
          <div className="language">
            <h4>English</h4>
            <p>Professional Proficiency</p>
          </div>
          <div className="language">
            <h4>Tamil</h4>
            <p>Native Proficiency</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
