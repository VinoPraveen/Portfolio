import SkillItem from './SkillItem';

function Skills() {
  const technicalSkills = [
    { id: 1, name: 'HTML5', proficiency: 90, category: 'Frontend' },
    { id: 2, name: 'CSS3', proficiency: 90, category: 'Frontend' },
    { id: 3, name: 'JavaScript', proficiency: 85, category: 'Frontend' },
    { id: 4, name: 'React.js', proficiency: 25, category: 'Frontend' },
    // { id: 5, name: 'React Router', proficiency: 70, category: 'Frontend' },
    { id: 6, name: 'Git & GitHub', proficiency: 85, category: 'Tools' },
    // { id: 7, name: 'Responsive Design', proficiency: 90, category: 'Concept' },
    { id: 8, name: 'SQL', proficiency: 70, category: 'Database' },
    { id: 9, name: 'Java', proficiency: 65, category: 'Languages' },
  ];

  const professionalSkills = [
    'Problem-Solving',
    'Attention to Detail',
    'Quick Learner',
    'Self-Learning',
    'Adaptability',
  
  ];

  return (
    <div id="Skills" className="skills-container">
      <h1>Skills & Expertise</h1>

      <section className="skills-section">
        <h2>Technical Skills</h2>
        <div className="skills-grid">
          {technicalSkills.map((skill) => (
            <SkillItem key={skill.id} skill={skill} />
          ))}
        </div>
      </section>

      <section className="skills-section">
        <h2>Professional Skills</h2>
        <div className="professional-skills">
          {professionalSkills.map((skill, index) => (
            <div key={index} className="professional-skill-badge">
              {skill}
            </div>
          ))}
        </div>
      </section>

      <section className="skills-section">
        <h2>Learning Path</h2>
        <div className="learning-path">
          <div className="path-item completed">
            <h4> HTML5 & CSS3</h4>
            <p>Knowssemantic HTML and modern CSS layouts</p>
          </div>
          <div className="path-item completed">
            <h4> JavaScript</h4>
            <p>Strong foundation in DOM manipulation </p>
          </div>
          <div className="path-item current">
            <h4> React.js</h4>
            <p>Currently mastering components, hooks, and routing</p>
          </div>
          <div className="path-item upcoming">
            <h4> Advanced React</h4>
            <p>Next: State management, API integration, Performance</p>
          </div>
        </div>
      </section>

      <section className="skills-section">
        <h2>Development Tools & Platforms</h2>
        <div className="tools-grid">
          <div className="tool-card">
            <h4>IDE & Editors</h4>
            <p>Visual Studio Code</p>
          </div>
          <div className="tool-card">
            <h4>Version Control</h4>
            <p>Git, GitHub</p>
          </div>
          <div className="tool-card">
            <h4>Build & Dev Tools</h4>
            <p>Vite, npm</p>
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
