
function About() {
  return (
    <div id="About" className="about-container">
      <h1>About Me</h1>

      <section className="about-section">
        <h2>Who Am I?</h2>
        <p>
          I'm Vino Praveen, a self-motivated front-end web developer from Chennai, Tamil Nadu. 
          With a B.Sc. in Computer Science, I'm passionate about building clean, user-friendly 
          web applications using modern technologies like React.js.
        </p>
      </section>

      <section className="about-section">
        <h2>My Journey</h2>
        <p>
          Starting with HTML, CSS, and JavaScript fundamentals, I've built several projects from scratch 
          including a Farmer-to-Consumer marketplace and a personal portfolio website. Currently, I'm 
          deepening my expertise in React.js to create more interactive and scalable applications.
        </p>
        <p>
          I'm a quick learner who thrives on solving problems and writing clean code. Every project 
          teaches me something new, and I'm always excited to apply these learnings to real-world applications.
        </p>
      </section>

      <section className="about-section">
        <h2>Education</h2>
        <div className="education-item">
          <h3>B.Sc. Computer Science</h3>
          <p className="school-name">Apollo Arts & Science College, Chennai</p>
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
          <h3>Intern at Infogrow Solutions</h3>
          <p className="duration">25 Days</p>
          <p>
            Contributed to documentation and requirement-understanding processes for software 
            development projects, supporting the team's SDLC workflow.
          </p>
        </div>
      </section>

      <section className="about-section">
        <h2>Certifications</h2>
        <ul className="certifications-list">
          <li>Cloud Security Fundamentals — IBM SkillsBuild</li>
          <li>Lingua Skill Cambridge Certificate (B1 Level) — 2024</li>
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

      <section className="about-section">
        <h2>Personal Values</h2>
        <p>
          I believe in writing code that others can understand and maintain. I value collaboration, 
          continuous learning, and approaching problems with creativity and analytical thinking. 
          Every line of code is an opportunity to build something meaningful.
        </p>
      </section>
    </div>
  );
}

export default About;
