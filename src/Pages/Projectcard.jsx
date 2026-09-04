import { useState, useRef, useEffect } from 'react';

function ProjectCard({ project, index = 0 }) {
  const [expanded, setExpanded] = useState(false);
  const cardRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`project-card ${visible ? 'revealed' : ''}`}
      ref={cardRef}
      style={{ transitionDelay: `${index * 0.12}s` }}
    >
      <div className="project-header">
        <h3>{project.title}</h3>
        <div className="tech-stack">
          {project.technologies.map((tech, i) => (
            <span key={i} className="tech-badge">{tech}</span>
          ))}
        </div>
      </div>

      <p className="project-short-desc">{project.shortDescription}</p>

      <p className="project-features">
        <strong>Features:</strong> {project.features}
      </p>

      <div className="project-actions">
        <button
          className="expand-btn"
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
        >
          {expanded ? 'Show Less' : 'View Details'}
          <span className={`expand-arrow ${expanded ? 'rotated' : ''}`} aria-hidden="true">&#8595;</span>
        </button>

        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary project-link-btn"
          >
            Live Demo &#8599;
          </a>
        )}

        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary project-link-btn"
          >
            View Code
          </a>
        )}
      </div>

      {expanded && (
        <div className="project-details">
          <p className="project-description">{project.description}</p>
          <h4>Key Highlights</h4>
          <ul>
            {project.highlights.map((highlight, i) => (
              <li key={i}>{highlight}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ProjectCard;
