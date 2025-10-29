import { useRef } from 'react';
import './StartSomethingGreatWidget.css';

const StartSomethingGreatWidget = () => {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.offsetWidth;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="start-something-great-widget">
      <div className="start-header">
        <h3 className="start-title">Inizia qualcosa di grande oggi</h3>
        <a href="#" className="see-more-link">
          Vedi di più
          <span className="material-icons-outlined">arrow_forward</span>
        </a>
      </div>

      <div className="start-carousel-container">
        <button
          className="start-nav left"
          onClick={() => scroll('left')}
          aria-label="Scorri a sinistra"
        >
          <span className="material-icons-outlined">chevron_left</span>
        </button>

        <div className="start-carousel" ref={scrollContainerRef}>
          <div className="start-slide">
            <div className="start-slide-image">
              <span className="material-icons-outlined">store</span>
            </div>
            <div className="start-slide-content">
              <h4 className="start-slide-title">
                Crea il tuo negozio online
              </h4>
              <p className="start-slide-desc">
                Inizia a vendere con un negozio personalizzato e professionale
              </p>
            </div>
          </div>
        </div>

        <button
          className="start-nav right"
          onClick={() => scroll('right')}
          aria-label="Scorri a destra"
        >
          <span className="material-icons-outlined">chevron_right</span>
        </button>
      </div>
    </div>
  );
};

export default StartSomethingGreatWidget;
