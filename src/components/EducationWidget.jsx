import './EducationWidget.css';

const EducationWidget = () => {
  const topics = [
    {
      id: 1,
      icon: 'school',
      title: 'Accademia Printify',
      description: 'Impara le basi del print on demand con i nostri corsi gratuiti',
      link: '#'
    },
    {
      id: 2,
      icon: 'people',
      title: 'Sellers Club',
      description: 'Unisciti alla community e connettiti con altri venditori',
      link: '#'
    },
    {
      id: 3,
      icon: 'support_agent',
      title: 'Centro Assistenza',
      description: 'Trova risposte alle tue domande nella nostra knowledge base',
      link: '#'
    },
    {
      id: 4,
      icon: 'video_library',
      title: 'Tutorial Video',
      description: 'Guide passo-passo per iniziare e far crescere il tuo business',
      link: '#'
    }
  ];

  return (
    <div className="education-widget">
      <div className="education-header">
        <h3 className="education-title">Risorse e Formazione</h3>
      </div>

      <div className="education-grid">
        {topics.map(topic => (
          <a key={topic.id} href={topic.link} className="education-card">
            <div className="education-icon">
              <span className="material-icons-outlined">{topic.icon}</span>
            </div>
            <div className="education-content">
              <h4 className="education-card-title">{topic.title}</h4>
              <p className="education-card-desc">{topic.description}</p>
            </div>
            <div className="education-arrow">
              <span className="material-icons-outlined">arrow_forward</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default EducationWidget;
