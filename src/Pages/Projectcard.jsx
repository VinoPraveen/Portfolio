import { useState } from 'react';

function ProjectCard({ project }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="project-card">
      <div className="project-header">
        <h3>{project.title}</h3>
        <div className="tech-stack">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-badge">{tech}</span>
          ))}
        </div>
      </div>

      <p className="project-description">{project.description}</p>

      <p className="project-features">
        <strong>Features:</strong> {project.features}
      </p>

      <button
        className="expand-btn"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? 'Show Less' : 'View Details'}
      </button>

      {expanded && (
        <div className="project-details">
          <h4>Key Highlights:</h4>
          <ul>
            {project.highlights.map((highlight, index) => (
              <li key={index}>{highlight}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ProjectCard;
