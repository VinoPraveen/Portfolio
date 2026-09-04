function About() {
  return (
    <div id="About" className="about-container reveal">
      <h1>About Me</h1>

      <section className="about-section">
        <h2>Who I Am</h2>
        <p>
          I&apos;m Vino Praveen A, a B.Sc. Computer Science graduate from
          Apollo Arts &amp; Science College, Chennai. I&apos;m building a
          career in software development with a focus on Java full stack
          technologies.
        </p>
      </section>

      <section className="about-section">
        <h2>What I Build</h2>
        <p>
          I&apos;ve built practical web applications using HTML, CSS, and
          JavaScript&mdash;including a farmer-to-consumer marketplace that
          connects local farmers with buyers. I write clean, responsive code
          and care about user experience and accessibility.
        </p>
      </section>

      <section className="about-section">
        <h2>Currently Learning</h2>
        <p>
          I&apos;m actively developing my Java full stack skills. Currently
          focused on Core Java, JDBC for database connectivity, and Spring Boot
          for building production-ready applications. I&apos;m also strengthening
          my SQL fundamentals for backend development.
        </p>
      </section>

      <section className="about-section">
        <h2>Career Direction</h2>
        <p>
          I&apos;m looking for an entry-level developer role where I can apply my
          web development foundation, grow my Java full stack capabilities, and
          contribute to real projects alongside experienced engineers.
        </p>
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
