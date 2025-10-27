import { useState } from 'react';
import './FeaturesSection.css';
import globalMapImg from '../assets/images/global-map.avif';
import dashboardImg from '../assets/images/dashboard.webp';
import platformsImg from '../assets/images/platforms.webp';
import hoodieImg from '../assets/images/hoodie-design.webp';

const FeaturesSection = () => {
  const [activeTab, setActiveTab] = useState('Orders');

  const platforms = [
    {
      name: 'Instagram Shop',
      desc: 'بيع منتجاتك مباشرة لمعجبيك على Instagram',
      icon: '📷',
      gradient: 'linear-gradient(135deg, #F58529, #DD2A7B, #8134AF)'
    },
    {
      name: 'StreamElements',
      desc: 'عرض البث والمشتريات عبر التنبيهات',
      icon: 'S',
      gradient: 'linear-gradient(135deg, #00C9FF, #92FE9D)',
      textColor: '#000'
    },
    {
      name: 'YouTube Product Shelf',
      desc: 'روّج للمنتجات من متجرك على قناتك على YouTube',
      icon: '▶',
      gradient: '#FF0000'
    },
    {
      name: 'Spotify',
      desc: 'منتجات للفنانين',
      icon: '🎵',
      gradient: '#1DB954'
    },
    {
      name: 'Twitch Product Gifting',
      desc: 'اسمح للمشاهدين بإهداء المنتجات',
      icon: '📺',
      gradient: '#9146FF'
    },
    {
      name: 'X (Twitter)',
      desc: 'رابط المتجر في السيرة الذاتية',
      icon: '𝕏',
      gradient: '#1DA1F2'
    },
    {
      name: 'TikTok Shop',
      desc: 'بيع المنتجات من متجرك مباشرة لمعجبيك على TikTok',
      icon: '♪',
      gradient: '#000',
      border: '2px solid #FF0050'
    },
    {
      name: 'Discord',
      desc: 'إصدارات حصرية للأعضاء',
      icon: '💬',
      gradient: '#5865F2'
    }
  ];

  const orders = [
    { name: 'Patricia Smith', product: 'Premium Bundle Pack', price: '$89.00', gradient: 'linear-gradient(135deg, #667eea, #764ba2)' },
    { name: 'Michael Chen', product: 'Creator Edition Hoodie', price: '$64.50', gradient: 'linear-gradient(135deg, #fa709a, #fee140)' },
    { name: 'Sarah Johnson', product: 'Limited Edition Tee', price: '$34.99', gradient: 'linear-gradient(135deg, #30cfd0, #330867)' }
  ];

  return (
    <section className="features-section">
      {/* Section Header */}
      <div className="section-header">
        <h2 className="section-title-main">نجعل التجارة الإلكترونية سهلة،</h2>
        <p className="section-subtitle-main">لا حاجة لخبرة</p>
      </div>

      {/* Features Grid */}
      <div className="features-grid">
        {/* Feature 1: Easy Management Tools */}
        <div className="feature-card">
          <h3 className="feature-title">أدوات إدارة بسيطة</h3>
          <p className="feature-description">
            تتبع طلباتك، وأدر منتجاتك، وراقب المبيعات في الوقت الفعلي من خلال لوحة تحكم ذكية وبديهية تحافظ على كل شيء واضحًا، سواء على سطح المكتب أو التطبيق.
          </p>

          <div className="dashboard-image-container">
            <img src={dashboardImg} alt="معاينة لوحة التحكم" className="dashboard-image" />
          </div>
        </div>

        {/* Feature 2: Global Manufacturing */}
        <div className="feature-card">
          <h3 className="feature-title">إنتاج عالمي، تسليم محلي</h3>
          <p className="feature-description">
            تضمن شبكة الإنتاج العالمية لدينا أن يتم تصنيع منتجاتك وشحنها من أماكن قريبة من عملائك، مما يقلل بشكل كبير من أوقات التسليم والتكاليف.
          </p>

          <div className="world-map">
            <img src={globalMapImg} alt="خريطة الإنتاج العالمي" className="map-image" />
          </div>
        </div>

        {/* Feature 3: Design Tool */}
        <div className="feature-card">
          <h3 className="feature-title">صمم المنتج المثالي</h3>
          <p className="feature-description">
            تجاوز التخصيص الأساسي. يساعدك مصمم المنتجات لدينا على إنشاء قطع فريدة حقًا مع أدوات متكاملة ودعم فنانين محترفين وعروض فائقة الواقعية.
          </p>

          <div className="hoodie-image-container">
            <img src={hoodieImg} alt="أداة تصميم المنتج" className="hoodie-image" />
          </div>
        </div>

        {/* Feature 4: Platform Integrations */}
        <div className="feature-card">
          <h3 className="feature-title">البيع والتفاعل على كل منصة</h3>
          <p className="feature-description">
            نحن متكاملون مع YouTube وInstagram وTikTok وTwitch وSpotify ومنصات أخرى لمساعدتك في بيع المنتجات ومكافأة المعجبين وتنمية علامتك التجارية أينما تنشئ المحتوى.
          </p>

          <div className="platforms-image-container">
            <img src={platformsImg} alt="تكاملات المنصات" className="platforms-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
