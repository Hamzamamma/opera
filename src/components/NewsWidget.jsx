import { useRef } from 'react';
import './NewsWidget.css';

const NewsWidget = () => {
  const scrollContainerRef = useRef(null);

  const articles = [
    {
      id: 1,
      title: '13 Idee di business per animali divertenti e redditizie da provare nel 2025',
      readTime: '10 minuti',
      category: 'Consigli aziendali e idee',
      image: 'https://images.ctfassets.net/5b8qvpm5zn23/4XqKzq0QZKxKFvqYHNlJHJ/0be8c7c9f3a3ee8b9d9f8d8c8f8e8f8e/pet-business-ideas.jpg'
    },
    {
      id: 2,
      title: '15 Nicchie Print on Demand per generare un reddito considerevole nel 2025',
      readTime: '13 minuti',
      category: 'Consigli aziendali e idee',
      image: 'https://images.ctfassets.net/5b8qvpm5zn23/2XqKzq0QZKxKFvqYHNlJHJ/0be8c7c9f3a3ee8b9d9f8d8c8f8e8f8e/pod-niches.jpg'
    },
    {
      id: 3,
      title: 'Denim it! Nuovi prodotti in denim disponibili',
      readTime: '5 minuti',
      category: 'Aggiornamenti prodotto',
      image: 'https://images.ctfassets.net/5b8qvpm5zn23/3XqKzq0QZKxKFvqYHNlJHJ/0be8c7c9f3a3ee8b9d9f8d8c8f8e8f8e/denim-products.jpg'
    },
    {
      id: 4,
      title: '10 Aggiornamenti importanti di Printify da conoscere',
      readTime: '16 minuti',
      category: 'Aggiornamenti Printify',
      image: 'https://images.ctfassets.net/5b8qvpm5zn23/5XqKzq0QZKxKFvqYHNlJHJ/0be8c7c9f3a3ee8b9d9f8d8c8f8e8f8e/updates.jpg'
    },
    {
      id: 5,
      title: 'Come creare design vincenti per il tuo negozio',
      readTime: '12 minuti',
      category: 'Guide di design',
      image: 'https://images.ctfassets.net/5b8qvpm5zn23/6XqKzq0QZKxKFvqYHNlJHJ/0be8c7c9f3a3ee8b9d9f8d8c8f8e8f8e/design-guide.jpg'
    }
  ];

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="news-widget">
      <div className="news-header">
        <h3 className="news-title">Notizie e Aggiornamenti</h3>
        <a href="#" className="see-more-link">
          Vedi tutto
          <span className="material-icons-outlined">arrow_forward</span>
        </a>
      </div>

      <div className="news-carousel-container">
        <button
          className="news-nav left"
          onClick={() => scroll('left')}
          aria-label="Scorri a sinistra"
        >
          <span className="material-icons-outlined">chevron_left</span>
        </button>

        <div className="news-carousel" ref={scrollContainerRef}>
          {/* Sample Order Card */}
          <div className="news-card sample-order-card">
            <div className="sample-order-content">
              <div className="sample-icon">
                <span className="material-icons-outlined">shopping_bag</span>
              </div>
              <h4 className="sample-title">Ordina un campione</h4>
              <p className="sample-desc">
                Prova la qualità dei nostri prodotti prima di vendere
              </p>
              <button className="sample-cta">
                Ordina ora
                <span className="material-icons-outlined">arrow_forward</span>
              </button>
            </div>
          </div>

          {/* News Articles */}
          {articles.map(article => (
            <div key={article.id} className="news-card">
              <div className="news-image">
                <div className="news-placeholder">
                  <span className="material-icons-outlined">article</span>
                </div>
              </div>

              <div className="news-content">
                <span className="news-category">{article.category}</span>
                <h4 className="news-article-title">{article.title}</h4>
                <div className="news-meta">
                  <span className="read-time">
                    <span className="material-icons-outlined">schedule</span>
                    {article.readTime} di lettura
                  </span>
                </div>
                <a href="#" className="news-cta">
                  Per saperne di più
                  <span className="material-icons-outlined">arrow_forward</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <button
          className="news-nav right"
          onClick={() => scroll('right')}
          aria-label="Scorri a destra"
        >
          <span className="material-icons-outlined">chevron_right</span>
        </button>
      </div>
    </div>
  );
};

export default NewsWidget;
