import './CustomProducts.css';
import heroImage from '../assets/images/custom-products-hero.webp';
import whyQuality from '../assets/images/why-quality.webp';
import whyBrandControl from '../assets/images/why-brand-control.webp';
import whyShipping from '../assets/images/why-shipping.webp';
import whyUseCases from '../assets/images/why-use-cases.avif';

const CustomProducts = () => {
  return (
    <>
      <section className="custom-hero">
        <div className="custom-hero-container">
          {/* Left: Content */}
          <div className="custom-hero-content">
            <h1 className="custom-hero-title">منتجات مخصصة ذات علامة تجارية لأعمالك</h1>

            <p className="custom-hero-description">
              قم بإنشاء منتجات شركة متميزة بدون متاعب — لفريقك أو عملائك أو أكبر معجبيك.
            </p>

            <div className="custom-hero-cta">
              <a href="#" className="custom-btn custom-btn-primary-lg">
                ابدأ الآن
              </a>
            </div>

            <p className="custom-hero-note">
              جودة ممتازة. شحن سريع. بدون حد أدنى.
            </p>
          </div>

          {/* Right: Visual */}
          <div className="custom-hero-visual">
            <img src={heroImage} alt="Prodotti brandizzati" className="custom-hero-image" />
          </div>
        </div>
      </section>

      {/* Why Businesses Section */}
      <section className="why-businesses">
        <div className="why-container">
          <div className="why-header">
            <h1 className="why-title">لماذا تستخدم الشركات Fourthwall</h1>
            <p className="why-subtitle">موثوق به من قبل فرق سريعة النمو في الشركات الناشئة والوكالات وغيرها</p>
          </div>

          <div className="why-grid">
            {/* Card 1: Set up in minutes */}
            <article className="why-card">
              <div className="why-icon-wrapper">
                <img src={whyQuality} alt="الإعداد في دقائق" className="why-card-image" />
              </div>
              <h3 className="why-card-title">الإعداد في دقائق</h3>
              <p className="why-card-desc">
                استخدم منشئنا بدون كود لإنشاء واجهة متجر ذات علامة تجارية ومنتجات تعكس شركتك.
              </p>
            </article>

            {/* Card 2: Sell or send with one link */}
            <article className="why-card">
              <div className="why-icon-wrapper">
                <img src={whyBrandControl} alt="البيع أو الإرسال برابط واحد" className="why-card-image" />
              </div>
              <h3 className="why-card-title">البيع أو الإرسال برابط واحد</h3>
              <p className="why-card-desc">
                أرسل هدايا الشركة مباشرة إلى الموظفين أو اجعل متجرك عامًا للعملاء والمعجبين والشركاء.
              </p>
            </article>

            {/* Card 3: No inventory required */}
            <article className="why-card">
              <div className="why-icon-wrapper">
                <img src={whyShipping} alt="لا حاجة لمخزون" className="why-card-image" />
              </div>
              <h3 className="why-card-title">لا حاجة لمخزون</h3>
              <p className="why-card-desc">
                سواء كانت طباعة عند الطلب أو تسليم مخصص، نحن نتعامل مع الإنتاج والتخزين والتعبئة والشحن — حتى لا تضطر إلى ذلك.
              </p>
            </article>

            {/* Card 4: For teams and customers */}
            <article className="why-card">
              <div className="why-icon-wrapper">
                <img src={whyUseCases} alt="للفرق والعملاء" className="why-card-image" />
              </div>
              <h3 className="why-card-title">للفرق <span className="why-highlight">و</span> العملاء</h3>
              <p className="why-card-desc">
                مثالي لهدايا الانضمام أو الجوائز الداخلية أو منتجات الفعاليات أو حزم المؤثرين أو أي شيء آخر قد تحتاجه.
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
};

export default CustomProducts;
