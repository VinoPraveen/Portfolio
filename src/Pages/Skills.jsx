import SkillItem from './SkillItem';

function Skills() {
  const frontendSkills = [
    { id: 1, name: 'HTML5', category: 'Frontend' },
    { id: 2, name: 'CSS3', category: 'Frontend' },
    { id: 3, name: 'JavaScript', category: 'Frontend' },
  ];

  const programmingSkills = [
    { id: 4, name: 'Java', category: 'Programming' },
  ];

  const databaseSkills = [
    { id: 5, name: 'SQL', category: 'Database' },
  ];

  const learningSkills = [
    { id: 6, name: 'Core Java', category: 'Learning' },
    { id: 7, name: 'JDBC', category: 'Learning' },
    { id: 8, name: 'Spring Boot', category: 'Learning' },
  ];

  const professionalSkills = [
    'Problem-Solving',
    'Attention to Detail',
    'Self-Learning',
  ];

  return (
    <div id="Skills" className="skills-container reveal">
      <h1>Skills &amp; Expertise</h1>

      <section className="skills-section">
        <h2>Frontend</h2>
        <div className="skills-grid">
          {frontendSkills.map((skill) => (
            <SkillItem key={skill.id} skill={skill} />
          ))}
        </div>
      </section>

      <section className="skills-section">
        <h2>Programming</h2>
        <div className="skills-grid">
          {programmingSkills.map((skill) => (
            <SkillItem key={skill.id} skill={skill} />
          ))}
        </div>
      </section>

      <section className="skills-section">
        <h2>Database</h2>
        <div className="skills-grid">
          {databaseSkills.map((skill) => (
            <SkillItem key={skill.id} skill={skill} />
          ))}
        </div>
      </section>

      <section className="skills-section">
        <h2>Currently Learning</h2>
        <div className="skills-grid">
          {learningSkills.map((skill) => (
            <SkillItem key={skill.id} skill={skill} />
          ))}
        </div>
      </section>

      <section className="skills-section">
        <h2>Professional Strengths</h2>
        <div className="professional-skills">
          {professionalSkills.map((skill, index) => (
            <div key={index} className="professional-skill-badge">
              {skill}
            </div>
          ))}
        </div>
      </section>

      <section className="skills-section">
        <h2>Development Tools &amp; Platforms</h2>
        <div className="tools-grid">
          <div className="tool-card">
            <h4>Code Editors</h4>
            <p>VS Code, Eclipse IDE</p>
          </div>
          <div className="tool-card">
            <h4>Version Control</h4>
            <p>Git, GitHub</p>
          </div>
          <div className="tool-card">
            <h4>Productivity</h4>
            <p>MS Word, Excel, PowerPoint</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Skills;
