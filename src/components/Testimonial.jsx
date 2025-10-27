import { useState } from 'react';
import './Testimonial.css';
import mkbhdShop from '../assets/images/mkbhd-shop.webp';
import mkbhdProfile from '../assets/images/mkbhd-profile.webp';
import kalshiShop from '../assets/images/kalshi-shop.webp';
import kalshiLogo from '../assets/images/kalshi-logo.webp';
import philShop from '../assets/images/phil-shop.webp';
import philProfile from '../assets/images/phil-profile.webp';
import icmapShop from '../assets/images/icmap-shop.webp';
import icmapProfile from '../assets/images/icmap-profile.webp';
import harryShop from '../assets/images/harry-shop.webp';
import harryProfile from '../assets/images/harry-profile.webp';
import charlotteShop from '../assets/images/charlotte-shop.webp';
import charlotteProfile from '../assets/images/charlotte-profile.webp';

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      quote: "العمل مع Fourthwall تجربة رائعة. يتعاملون مع اللوجستيات والإنتاج، والأهم من ذلك، جودة خدمة العملاء. يمكنني التركيز على ما يهم: أوصي به لجميع منشئي المحتوى.",
      author: "MKBHD",
      link: "mkbhd.com",
      storeUrl: "https://mkbhd.com",
      shopImage: mkbhdShop,
      overlayImage: mkbhdProfile
    },
    {
      quote: "شكرًا لجعل إطلاق متجر أمرًا سهلاً للغاية. لا يمكنني التأكيد بما فيه الكفاية على مدى روعة هذه العملية، أو مقدار الوقت الذي وفره لنا Fourthwall. أنا معجب كبير.",
      author: "Shannon Magiera",
      role: "رئيس عمليات كبار الشخصيات والإعداد",
      link: "shop.kalshi.com",
      storeUrl: "https://shop.kalshi.com",
      shopImage: kalshiShop,
      overlayImage: kalshiLogo
    },
    {
      quote: "أذهلني Fourthwall. لم أكن أبيع أكثر فحسب، بل كان معجبي أكثر سعادة بكثير. كان منتجًا عالي الجودة على موقع يبدو أفضل وأسهل بكثير في الإدارة. أتطلع إلى إطلاق عضوياتي.",
      author: "Phil DeFranco",
      link: "beautifulbastard.com",
      storeUrl: "https://beautifulbastard.com",
      shopImage: philShop,
      overlayImage: philProfile
    },
    {
      quote: "على Patreon، كانت لدينا ميزات سمحت لنا بالنمو، لكن Fourthwall وسّعها. كنا سعداء جدًا بالقفز. لدينا الآن موقع بسيط وسهل الاستخدام يتيح لنا الاتصال مباشرة بالأعضاء.",
      author: "I Could Murder A Podcast",
      link: "icmap.co.uk",
      storeUrl: "https://icmap.co.uk",
      shopImage: icmapShop,
      overlayImage: icmapProfile
    },
    {
      quote: "لقد أذهلني رد فعل معجبي على موقعي ومتجري الجديد. كان تحولًا جذريًا. سمح لي الدخل الإضافي أيضًا بتوسيع فريقي وإنتاج محتوى أفضل لمعجبي.",
      author: "Harry Mack",
      link: "shop.harrymackofficial.com",
      storeUrl: "https://shop.harrymackofficial.com",
      shopImage: harryShop,
      overlayImage: harryProfile
    },
    {
      quote: "أعمل مع Fourthwall منذ سنوات وكانوا دائمًا متعاونين للغاية وممتعين في العمل معهم. أحب تطبيقهم أيضًا! يسمح لي بإرسال مقاطع فيديو شكر لكل من يشتري منتجاتي.",
      author: "Charlotte Dobre",
      link: "shop.charlottedobre.net",
      storeUrl: "https://shop.charlottedobre.net",
      shopImage: charlotteShop,
      overlayImage: charlotteProfile
    }
  ];

  const currentTestimonial = testimonials[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="testimonial-section">
      <div className="testimonial-container">
        <div className="testimonial-shop">
          <div className="shop-preview">
            <a href={currentTestimonial.storeUrl} target="_blank" rel="noopener noreferrer" className="shop-link">
              <img src={currentTestimonial.shopImage} alt={`${currentTestimonial.author} Shop`} className="shop-screenshot" />
            </a>
            <a href={currentTestimonial.storeUrl} target="_blank" rel="noopener noreferrer" className="profile-link">
              <img src={currentTestimonial.overlayImage} alt={currentTestimonial.author} className="profile-overlay" />
            </a>
          </div>
        </div>

        <div className="testimonial-content">
          <p className="quote-text">
            "{currentTestimonial.quote}"
          </p>

          <div className="quote-author">
            <div className="author-name">{currentTestimonial.author}</div>
            {currentTestimonial.role && (
              <div className="author-role">{currentTestimonial.role}</div>
            )}
            <a href={currentTestimonial.storeUrl} target="_blank" rel="noopener noreferrer" className="author-link">
              {currentTestimonial.link} →
            </a>
          </div>

          <div className="nav-arrows">
            <button className="arrow-btn" onClick={handlePrev}>
              <span>←</span>
            </button>
            <button className="arrow-btn" onClick={handleNext}>
              <span>→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
