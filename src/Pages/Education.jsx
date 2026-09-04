function Education() {
  const educationItems = [
    {
      degree: 'B.Sc. Computer Science',
      school: 'Apollo Arts & Science College, Chennai',
      year: '2026',
      details: 'Relevant coursework: Programming fundamentals, Data Structures, Database Management, Web Technologies',
    },
    {
      degree: 'Higher Secondary Education (+2)',
      school: 'Government Higher Secondary School, Erode',
      year: '2023',
      details: 'Science stream',
    },
    {
      degree: 'SSLC',
      school: 'Government Higher Secondary School, Erode',
      year: '2021',
      details: '',
    },
  ];

  return (
    <div id="Education" className="about-container reveal">
      <h1>Education</h1>

      <div className="education-timeline">
        {educationItems.map((item, index) => (
          <div key={index} className="education-entry">
            <div className="education-dot" />
            <div className="education-content">
              <h2>{item.degree}</h2>
              <p className="school-name">{item.school}</p>
              <p className="year">{item.year}</p>
              {item.details && <p className="education-details">{item.details}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;
