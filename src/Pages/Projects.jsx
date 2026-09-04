import ProjectCard from './Projectcard';

function Projects() {
  const projectsList = [
    {
      id: 1,
      title: 'Farmer-to-Consumer Marketplace',
      shortDescription:
        'A responsive marketplace connecting local farmers directly with consumers for product discovery and enquiry.',
      description:
        'Built a responsive web application that enables farmers to list their products and lets consumers browse, discover, and enquire directly. The application supports an add-to-browse-to-inquiry flow, providing a clean interface for direct farm-to-consumer transactions.',
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      highlights: [
        'Responsive design optimized for mobile and desktop',
        'Product discovery through clean navigation and listings',
        'Add-to-browse-to-inquiry user flow',
        'Form handling for user enquiries and submissions',
        'Version control with Git and GitHub',
      ],
      features: 'Product Listings, Navigation, Form Handling, Responsive Layout',
      liveUrl: 'https://vinopraveen.github.io/Direct-farm/',
      githubUrl: 'https://github.com/vinopraveen/Direct-farm',
    },
    {
      id: 2,
      title: 'Personal Portfolio Website',
      shortDescription:
        'A developer portfolio showcasing technical projects and career direction.',
      description:
        'Designed and built a single-page portfolio using React.js and Vite to present academic and technical projects. Features smooth scroll navigation, interactive components, and responsive design across all devices. Deployed to GitHub Pages.',
      technologies: ['React.js', 'Vite', 'CSS3', 'JavaScript'],
      highlights: [
        'Component-based architecture with React',
        'Responsive design across all device sizes',
        'Interactive UI with scroll-driven animations',
        'Accessible markup with semantic HTML',
        'Deployed and hosted on GitHub Pages',
      ],
      features: 'Scroll Navigation, Interactive UI, Responsive Design, Contact Form',
      liveUrl: 'https://vinopraveen.github.io/Portfolio/',
      githubUrl: 'https://github.com/vinopraveen/Portfolio',
    },
  ];

  return (
    <div id="Projects" className="projects-container reveal">
      <h1>My Projects</h1>
      <p className="projects-intro">
        Practical web applications built with HTML, CSS, and JavaScript&mdash;each
        project demonstrating problem-solving, responsive design, and clean code.
      </p>

      <div className="projects-grid">
        {projectsList.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      <section className="projects-section">
        <h2>What I&apos;m Building Next</h2>
        <p>
          My next projects will incorporate Java full stack technologies as I
          expand beyond front-end development:
        </p>
        <ul className="next-projects">
          <li>REST APIs with Spring Boot</li>
          <li>Database connectivity with JDBC and SQL</li>
          <li>Full stack applications combining frontend and backend</li>
          <li>Form handling and validation with server-side logic</li>
          <li>Authentication and authorization basics</li>
        </ul>
      </section>
    </div>
  );
}

export default Projects;
