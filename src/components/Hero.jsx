import './Hero.css';
import mkbhdShop from '../assets/images/shops/mkbhd.webp';
import harryShop from '../assets/images/shops/harrymack.webp';
import philShop from '../assets/images/shops/phildefranco.webp';
import charlotteShop from '../assets/images/shops/charlotte.webp';
import icmapShop from '../assets/images/shops/icmap.webp';
import kalshiShop from '../assets/images/shops/kalshi.webp';
import nymagShop from '../assets/images/shops/nymag.webp';
import santagatoShop from '../assets/images/shops/santagato.webp';

const Hero = () => {
  const shopRow1 = [
    { id: 1, image: mkbhdShop, name: 'MKBHD', storeUrl: 'https://mkbhd.com' },
    { id: 2, image: kalshiShop, name: 'Kalshi', storeUrl: 'https://shop.kalshi.com' },
    { id: 3, image: philShop, name: 'Phil DeFranco', storeUrl: 'https://beautifulbastard.com' },
    { id: 4, image: santagatoShop, name: 'Santagato Studios', storeUrl: 'https://santagatostudios.com' },
    { id: 5, image: harryShop, name: 'Harry Mack', storeUrl: 'https://shop.harrymackofficial.com' },
    { id: 6, image: nymagShop, name: 'Paolo from TOKYO', storeUrl: 'https://tokyozebra.com' },
  ];

  const shopRow2 = [
    { id: 1, image: charlotteShop, name: 'Charlotte Dobre', storeUrl: 'https://shop.charlottedobre.net' },
    { id: 2, image: icmapShop, name: 'I Could Murder A Podcast', storeUrl: 'https://icmap.co.uk' },
    { id: 3, image: harryShop, name: 'Harry Mack', storeUrl: 'https://shop.harrymackofficial.com' },
    { id: 4, image: philShop, name: 'Phil DeFranco', storeUrl: 'https://beautifulbastard.com' },
    { id: 5, image: kalshiShop, name: 'Kalshi', storeUrl: 'https://shop.kalshi.com' },
    { id: 6, image: mkbhdShop, name: 'MKBHD', storeUrl: 'https://mkbhd.com' },
  ];

  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          منتجات ومتاجر سيحبها مجتمعك
        </h1>
        <p className="hero-description">
          انضم إلى أكثر من 200,000 منشئ محتوى يستخدمون Fourthwall لإنشاء منتجات عالية الجودة ومتاجر رائعة.
        </p>
        <a href="#" className="hero-button">
          ابدأ الآن
        </a>
        <p className="hero-subtext">
          بدون تكلفة شهرية. لا حاجة لبطاقة ائتمان.
        </p>
      </div>

      <div className="hero-carousel">
        <div className="scroll-container">
          <div className="scroll-track">
            {shopRow1.map((shop, index) => (
              <a
                key={`row1-${index}`}
                href={shop.storeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="shop-preview"
              >
                <div className="shop-badge">{shop.name} ↗</div>
                <img src={shop.image} alt={shop.name} />
              </a>
            ))}
            {shopRow1.map((shop, index) => (
              <a
                key={`row1-dup-${index}`}
                href={shop.storeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="shop-preview"
              >
                <div className="shop-badge">{shop.name} ↗</div>
                <img src={shop.image} alt={shop.name} />
              </a>
            ))}
          </div>
        </div>
        <div className="scroll-container">
          <div className="scroll-track scroll-track-reverse">
            {shopRow2.map((shop, index) => (
              <a
                key={`row2-${index}`}
                href={shop.storeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="shop-preview"
              >
                <div className="shop-badge">{shop.name} ↗</div>
                <img src={shop.image} alt={shop.name} />
              </a>
            ))}
            {shopRow2.map((shop, index) => (
              <a
                key={`row2-dup-${index}`}
                href={shop.storeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="shop-preview"
              >
                <div className="shop-badge">{shop.name} ↗</div>
                <img src={shop.image} alt={shop.name} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="product-grid">
        <a href="https://shop.nymag.com" target="_blank" rel="noopener noreferrer" className="product-card">
          <div className="shop-badge">Paolo from TOKYO ↗</div>
          <div className="product-images">
            <img src={nymagShop} alt="NY Mag Product 1" className="product-img" />
            <img src={nymagShop} alt="NY Mag Product 2" className="product-img" />
            <img src={nymagShop} alt="NY Mag Product 3" className="product-img" />
            <img src={nymagShop} alt="NY Mag Product 4" className="product-img" />
          </div>
        </a>

        <a href="https://mkbhd.com" target="_blank" rel="noopener noreferrer" className="product-card">
          <div className="shop-badge">MKBHD ↗</div>
          <img src={mkbhdShop} alt="MKBHD Product" className="product-single" />
        </a>

        <a href="https://shop.harrymackofficial.com" target="_blank" rel="noopener noreferrer" className="product-card">
          <div className="shop-badge">Harry Mack ↗</div>
          <div className="product-images">
            <img src={harryShop} alt="Harry Mack Product 1" className="product-img" />
            <img src={harryShop} alt="Harry Mack Product 2" className="product-img" />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
