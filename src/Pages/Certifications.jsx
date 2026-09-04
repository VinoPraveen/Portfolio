function Certifications() {
  const certs = [
    {
      title: 'Cloud Security Fundamentals',
      issuer: 'IBM SkillsBuild',
    },
    {
      title: 'Lingua Skill Cambridge Certificate',
      issuer: 'B1 Level — 2024',
    },
  ];

  return (
    <div className="about-container reveal">
      <h1>Certifications</h1>

      <div className="certifications-grid">
        {certs.map((cert, index) => (
          <div key={index} className="certification-card">
            <div className="cert-icon" aria-hidden="true">&#10003;</div>
            <div>
              <h2>{cert.title}</h2>
              <p className="cert-issuer">{cert.issuer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certifications;
