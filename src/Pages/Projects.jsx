import ProjectCard from './Projectcard';

function Projects() {
  const projectsList = [
    {
      id: 1,
      title: 'Farmer-to-Consumer Web Application',
      description: 'A responsive marketplace web application that connects farmers and consumers directly. Features interactive product listings, navigation, and form handling.',
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      highlights: [
        'Responsive design for mobile-friendly experience',
        'Interactive features with vanilla JavaScript',
        'Version control with Git and GitHub',
        'Clean, accessible UI for better usability'
      ],
      features: 'Product Listings • Navigation • Form Handling • Responsive Layout'
    },
    {
      id: 2,
      title: 'Personal Portfolio Website',
      description: 'A responsive personal portfolio showcasing academic and technical projects. Built with vanilla JavaScript and optimized for accessibility across devices.',
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      highlights: [
        'Interactive UI components with vanilla JavaScript',
        'Optimized for accessibility and SEO',
        'Cross-device compatibility',
        'Clean, professional design'
      ],
      features: 'Responsive Design • Interactive UI • Accessibility Focus • Project Showcase'
    }
  ];

  return (
    <div id="Projects" className="projects-container">
      <h1>My Projects</h1>
      <p className="projects-intro">
        Here are some of the web applications I've built. Each project demonstrates my skills 
        in front-end development, problem-solving, and user experience design.
      </p>

      <div className="projects-grid">
        {projectsList.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <section className="projects-section">
        <h2>What I'm Building Next</h2>
        <p>
          I'm currently focusing on React.js projects to strengthen my front-end capabilities. 
          My next portfolio piece will be a React-based application that demonstrates:
        </p>
        <ul className="next-projects">
          <li>Component composition and reusability</li>
          <li>State management with hooks</li>
          <li>Dynamic routing with React Router</li>
          <li>Form handling and validation</li>
          <li>API integration and data fetching</li>
        </ul>
      </section>
    </div>
  );
}

export default Projects;
