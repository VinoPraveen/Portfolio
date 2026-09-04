function SkillItem({ skill }) {
  return (
    <div className="skill-item">
      <div className="skill-header">
        <h4>{skill.name}</h4>
        <span className="category-badge">{skill.category}</span>
      </div>
    </div>
  );
}

export default SkillItem;
