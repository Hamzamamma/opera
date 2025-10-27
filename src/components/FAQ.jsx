import { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Fourthwall mi addebita qualcosa per creare un sito web e il catalogo prodotti?",
      answer: "No! Fourthwall è completamente gratuito. Non ci sono costi mensili, spese di configurazione o costi nascosti. Paghi solo quando effettui una vendita."
    },
    {
      question: "Quanto guadagnerò con Fourthwall?",
      answer: "I tuoi guadagni dipendono dalla dimensione del tuo pubblico, dal coinvolgimento e dai prezzi dei prodotti. La maggior parte dei creator vede entrate significative nei primi mesi."
    },
    {
      question: "Fourthwall gestisce pagamenti e fatturazione?",
      answer: "Sì! Gestiamo tutta l'elaborazione dei pagamenti, la fatturazione e la documentazione fiscale. Tu ti concentri sulla creazione, noi gestiamo il resto."
    },
    {
      question: "Come gestisce Fourthwall la produzione?",
      answer: "Abbiamo una rete globale di produttori che realizzano articoli su richiesta. Questo significa nessun costo anticipato o gestione dell'inventario per te."
    },
    {
      question: "Posso personalizzare i prodotti con i miei design?",
      answer: "Assolutamente! I nostri strumenti di design ti permettono di creare prodotti personalizzati con il tuo marchio, le tue opere d'arte e design unici. Hai il controllo creativo completo."
    },
    {
      question: "Fourthwall si occupa della spedizione e del servizio clienti?",
      answer: "Sì! Gestiamo tutta la logistica di spedizione e forniamo un servizio clienti dedicato per i tuoi acquirenti, così puoi concentrarti sulla creazione di contenuti."
    },
    {
      question: "Posso utilizzare i dati del mio negozio per comprendere meglio i miei fan?",
      answer: "Sì! Ottieni analisi dettagliate sulle tue vendite, dati demografici dei clienti e performance dei prodotti per aiutarti a prendere decisioni informate."
    },
    {
      question: "Come faccio a iniziare a vendere il mio merchandise e configurare il mio Fourthwall?",
      answer: "Iniziare è facile! Registrati gratuitamente, personalizza il tuo negozio, aggiungi prodotti e sei pronto per iniziare a vendere. L'intero processo richiede meno di 30 minuti."
    },
    {
      question: "Ci sono requisiti per utilizzare Fourthwall?",
      answer: "Nessun requisito specifico! Che tu abbia 100 o 1 milione di follower, Fourthwall è progettato per aiutare i creator di tutte le dimensioni ad avere successo."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <h2 className="faq-title">Domande frequenti</h2>

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

        <a href="#" className="get-started-btn">Inizia ora →</a>
      </div>
    </section>
  );
};

export default FAQ;
