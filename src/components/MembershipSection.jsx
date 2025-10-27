import './MembershipSection.css';

const MembershipSection = () => {
  return (
    <section className="membership-section">
      <div className="membership-content">
        <div className="membership-text">
          <h2 className="membership-title">
            قدّم اشتراكات<br />
            شهرية
          </h2>
          <p className="membership-description">
            قدّم امتيازات حصرية، ومحتوى مخصص، وبث مباشر للمشتركين فقط، ووصول VIP على Discord للأعضاء. جميع الأدوات المتكاملة بشكل مثالي تتيح لك تتبع ومشاركة ومكافأة داعميك.
          </p>
          <div className="membership-buttons">
            <a href="#" className="btn btn-primary">ابدأ الآن</a>
            <a href="#" className="btn btn-secondary">استكشف أدوات الاشتراكات</a>
          </div>
        </div>
        <div className="membership-preview">
          {/* Gaming membership preview mockup */}
        </div>
      </div>
    </section>
  );
};

export default MembershipSection;
