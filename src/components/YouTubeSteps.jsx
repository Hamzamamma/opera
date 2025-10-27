import './YouTubeSteps.css';
import shopImage from '../assets/images/youtube-product-shelf.webp';
import connectImage from '../assets/images/youtube-connect.webp';
import promoteImage from '../assets/images/youtube-promote.webp';

const YouTubeSteps = () => {
  return (
    <section className="youtube-steps-section">
      <div className="youtube-container">
        <h1 className="youtube-title">البيع على YouTube في ثلاث خطوات بسيطة</h1>

        <div className="youtube-grid">
          {/* Card 1: Crea il tuo negozio */}
          <article className="youtube-card">
            <div className="youtube-card-visual">
              <img src={shopImage} alt="أنشئ متجرك" className="card-main-image" />
            </div>
            <div className="youtube-card-content">
              <h2 className="youtube-card-title">1. أنشئ متجرك</h2>
              <p className="youtube-card-desc">
                يتيح لك Fourthwall إنشاء متجر بدون الحاجة إلى كود. استخدم أدوات السحب والإفلات لبناء موقع فريد خاص بك. اعثر على المنتج المناسب لمعجبيك وارفع تصميمك.
              </p>
              <a href="#" className="youtube-card-link">ابدأ الآن ←</a>
            </div>
          </article>

          {/* Card 2: Collega gli account */}
          <article className="youtube-card">
            <div className="youtube-card-visual">
              <img src={connectImage} alt="ربط الحسابات" className="card-main-image" />
            </div>
            <div className="youtube-card-content">
              <h2 className="youtube-card-title">2. ربط الحسابات</h2>
              <p className="youtube-card-desc">
                اربط متجر Fourthwall الخاص بك بحساب YouTube الخاص بك. يمكنك القيام بذلك من خلال الانتقال إلى لوحة التحكم والعثور على YouTube ضمن "التطبيقات". اتبع دليلنا للحصول على تعليمات كاملة.
              </p>
              <a href="#" className="youtube-card-link">اتصل ←</a>
            </div>
          </article>

          {/* Card 3: Promuovi il tuo negozio */}
          <article className="youtube-card">
            <div className="youtube-card-visual">
              <img src={promoteImage} alt="روّج لمتجرك" className="card-main-image" />
            </div>
            <div className="youtube-card-content">
              <h2 className="youtube-card-title">3. روّج لمتجرك</h2>
              <p className="youtube-card-desc">
                أخيرًا، روّج لمتجرك الجديد ومنتجاتك المخصصة على وسائل التواصل الاجتماعي الخاصة بك. أعلن عن موقعك في مقاطع الفيديو الخاصة بك، وأخبر الأشخاص أنه يمكنهم التسوق أثناء مشاهدة محتواك.
              </p>
              <a href="#" className="youtube-card-link">اعرف المزيد ←</a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default YouTubeSteps;
