import ProjectCard from './Projectcard';

function Projects() {
  const projectsList = [
    {
      id: 1,
      title: 'Farmer-to-Consumer Marketplace',
      shortDescription: 'A direct-to-consumer marketplace connecting local farmers with buyers.',
      description:
        'A responsive web application that lets farmers list their products and consumers browse and purchase directly. Built to simplify the local food supply chain with a clean, accessible interface.',
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      highlights: [
        'Responsive layout optimized for mobile and desktop',
        'Interactive product listings with vanilla JavaScript',
        'Form handling for user input and product submissions',
        'Git-based version control workflow',
      ],
      features: 'Product Listings, Navigation, Form Handling, Responsive Layout',
      github: 'https://github.com/vinopraveen',
    },
    {
      id: 2,
      title: 'Personal Portfolio Website',
      shortDescription: 'A developer portfolio showcasing projects and technical skills.',
      description:
        'A single-page portfolio built with React.js and Vite, featuring smooth scroll navigation, skill visualization, and a contact form. Designed to present my work and growth as a developer.',
      technologies: ['React.js', 'Vite', 'CSS3', 'JavaScript'],
      highlights: [
        'Component-based architecture with React',
        'Intersection Observer animations for scroll-driven reveals',
        'Responsive design across all device sizes',
        'Accessible markup with semantic HTML',
      ],
      features: 'Scroll Navigation, Skill Bars, Contact Form, Project Showcase',
      github: 'https://github.com/vinopraveen',
    },
  ];

  return (
    <div id="Projects" className="projects-container reveal">
      <h1>My Projects</h1>
      <p className="projects-intro">
        Hands-on projects that demonstrate my front-end development skills, problem-solving
        approach, and attention to user experience.
      </p>

      <div className="projects-grid">
        {projectsList.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      <section className="projects-section">
        <h2>What I&apos;m Building Next</h2>
        <p>
          I&apos;m focusing on deeper React.js projects to strengthen my front-end
          capabilities. My next builds will demonstrate:
        </p>
        <ul className="next-projects">
          <li>Component composition and reusable patterns</li>
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
