import { useRef, useState, useEffect } from 'react';

function SkillItem({ skill }) {
  const barRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = barRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="skill-item" ref={barRef}>
      <div className="skill-header">
        <h4>{skill.name}</h4>
        <span className="category-badge">{skill.category}</span>
      </div>
      <div className="skill-bar-track">
        <div
          className="skill-bar-fill"
          style={{ width: visible ? `${skill.proficiency}%` : '0%' }}
        >
          <span className="skill-bar-label">{skill.proficiency}%</span>
        </div>
      </div>
    </div>
  );
}

export default SkillItem;
