import { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "هل يتقاضى Fourthwall رسومًا لإنشاء موقع ويب وكتالوج منتجات؟",
      answer: "لا! Fourthwall مجاني تمامًا. لا توجد تكاليف شهرية أو رسوم إعداد أو تكاليف مخفية. أنت تدفع فقط عندما تقوم بالبيع."
    },
    {
      question: "كم سأربح مع Fourthwall؟",
      answer: "تعتمد أرباحك على حجم جمهورك ومستوى تفاعلهم وأسعار المنتجات. يرى معظم منشئي المحتوى إيرادات كبيرة في الأشهر الأولى."
    },
    {
      question: "هل يتعامل Fourthwall مع المدفوعات والفواتير؟",
      answer: "نعم! نتعامل مع جميع معالجة المدفوعات والفواتير والوثائق الضريبية. أنت تركز على الإنشاء، ونحن نتعامل مع الباقي."
    },
    {
      question: "كيف يتعامل Fourthwall مع الإنتاج؟",
      answer: "لدينا شبكة عالمية من المصنعين الذين ينتجون المنتجات عند الطلب. هذا يعني عدم وجود تكاليف مقدمة أو إدارة مخزون بالنسبة لك."
    },
    {
      question: "هل يمكنني تخصيص المنتجات بتصميماتي الخاصة؟",
      answer: "بالتأكيد! تسمح لك أدوات التصميم الخاصة بنا بإنشاء منتجات مخصصة بعلامتك التجارية وأعمالك الفنية وتصميماتك الفريدة. لديك سيطرة إبداعية كاملة."
    },
    {
      question: "هل يتعامل Fourthwall مع الشحن وخدمة العملاء؟",
      answer: "نعم! نتعامل مع جميع لوجستيات الشحن ونوفر خدمة عملاء مخصصة للمشترين، حتى تتمكن من التركيز على إنشاء المحتوى."
    },
    {
      question: "هل يمكنني استخدام بيانات متجري لفهم معجبي بشكل أفضل؟",
      answer: "نعم! تحصل على تحليلات مفصلة حول مبيعاتك والبيانات الديموغرافية للعملاء وأداء المنتجات لمساعدتك في اتخاذ قرارات مستنيرة."
    },
    {
      question: "كيف أبدأ في بيع منتجاتي وإعداد Fourthwall الخاص بي؟",
      answer: "البدء سهل! سجل مجانًا، وخصص متجرك، وأضف المنتجات، وستكون جاهزًا للبدء في البيع. تستغرق العملية بأكملها أقل من 30 دقيقة."
    },
    {
      question: "هل هناك متطلبات لاستخدام Fourthwall؟",
      answer: "لا توجد متطلبات محددة! سواء كان لديك 100 أو مليون متابع، فإن Fourthwall مصمم لمساعدة منشئي المحتوى من جميع الأحجام على النجاح."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <h2 className="faq-title">الأسئلة الشائعة</h2>

        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
          >
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <span className="faq-text">{faq.question}</span>
              <span className="faq-toggle"></span>
            </div>
            <div className="faq-answer">
              <p className="faq-answer-text">{faq.answer}</p>
            </div>
          </div>
        ))}

        <a href="#" className="get-started-btn">ابدأ الآن ←</a>
      </div>
    </section>
  );
};

export default FAQ;
