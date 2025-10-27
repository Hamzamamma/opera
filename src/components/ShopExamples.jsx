import './ShopExamples.css';

const ShopExamples = () => {
  const shopRow1 = [
    { id: 1, class: 'shop-1' },
    { id: 2, class: 'shop-2' },
    { id: 3, class: 'shop-dark' },
    { id: 4, class: 'shop-3' },
    { id: 5, class: 'shop-4' },
    { id: 6, class: 'shop-light' },
    { id: 7, class: 'shop-5' },
  ];

  const shopRow2 = [
    { id: 1, class: 'shop-6' },
    { id: 2, class: 'shop-7' },
    { id: 3, class: 'shop-dark' },
    { id: 4, class: 'shop-8' },
    { id: 5, class: 'shop-1' },
    { id: 6, class: 'shop-light' },
    { id: 7, class: 'shop-2' },
  ];

  return (
    <section className="shop-examples">
      <h2 className="section-title">
        Negozi completamente personalizzabili<br />
        al 100% di tua proprietà
      </h2>

      {/* Prima riga - Scroll a sinistra */}
      <div className="scroll-container">
        <div className="scroll-track">
          {/* Primo set */}
          {shopRow1.map((shop, index) => (
            <div key={`row1-${index}`} className={`shop-preview ${shop.class}`}></div>
          ))}
          {/* Duplicato per scroll infinito */}
          {shopRow1.map((shop, index) => (
            <div key={`row1-dup-${index}`} className={`shop-preview ${shop.class}`}></div>
          ))}
        </div>
      </div>

      {/* Seconda riga - Scroll a destra */}
      <div className="scroll-container">
        <div className="scroll-track scroll-track-reverse">
          {/* Primo set */}
          {shopRow2.map((shop, index) => (
            <div key={`row2-${index}`} className={`shop-preview ${shop.class}`}></div>
          ))}
          {/* Duplicato per scroll infinito */}
          {shopRow2.map((shop, index) => (
            <div key={`row2-dup-${index}`} className={`shop-preview ${shop.class}`}></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopExamples;
