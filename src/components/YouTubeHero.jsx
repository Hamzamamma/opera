import './YouTubeHero.css';

const YouTubeHero = () => {
  const testimonials = [
    {
      name: 'DJENTBEARD',
      handle: '@djentbeard',
      avatar: '/images/youtube-testimonials/djentbeard.webp',
      quote: '@FourthwallHQ are the best in the business'
    },
    {
      name: 'Philip DeFranco 👊🏻',
      handle: '@PhillyD',
      avatar: '/images/youtube-testimonials/phillyd.webp',
      quote: 'Just my veeeeeeery biased opinion, BUT if you use Spring and/or just generally need clothing, merchandise, and/or membership services you should be using Fourthwall.com They\'ve got solutions for small and big creators alike.'
    },
    {
      name: 'Patrick Stirling',
      handle: '@PatrickStirling',
      avatar: '/images/youtube-testimonials/patrick.webp',
      quote: 'For all the things @FourthwallHQ does on the back end to make things easier for me, audience-facing features like these likely have a much larger impact than I realize. Feels great to be able to directly thank those who support me.'
    },
    {
      name: 'Muaaz',
      handle: '@mws',
      avatar: '/images/youtube-testimonials/muaaz.webp',
      quote: 'couldnt vouch for @FourthwallHQ enough, def tap in - they\'ll get you rightttt'
    },
    {
      name: 'Nightowl',
      handle: '@ajsarsfield',
      avatar: '/images/youtube-testimonials/nightowl.webp',
      quote: '@FourthwallHQ is a BIG vouch.. Especially if you live stream too, Quality is great, plenty of merch options'
    },
    {
      name: 'CodyRiffs',
      handle: '@codyriffs',
      avatar: '/images/youtube-testimonials/codyriffs.webp',
      quote: 'I just received a couple hoodies from my Winter Collection and they are so COMFY! Big shoutout to @FourthwallHQ for providing amazing quality items for creators 😊'
    },
    {
      name: 'YuuriVoice',
      handle: '@YuuriVoice',
      avatar: '/images/youtube-testimonials/yuuri.webp',
      quote: 'I\'ve seen what Fourthwall has cooking and can confirm that for anyone looking to build a membership and merch platform, they have all the right tools, functionality, and vision to succeed. Their features dunk all over Patreon.'
    },
    {
      name: 'Nythical🍄🌙',
      handle: '@Nythical_',
      avatar: '/images/youtube-testimonials/nythical.webp',
      quote: 'i love fourthwall! Would recommend to any creator by far the best option out there'
    },
    {
      name: 'ArielJade®',
      handle: '@ArielJadeLive',
      avatar: '/images/youtube-testimonials/arieljade.webp',
      quote: 'Y\'ALL. @FourthwallHQ is legit the BEST merch store I have found as a creative entrepreneur. I\'ve been designing like crazy. New Crew merch available now!'
    },
    {
      name: 'Aura',
      handle: '@aurahack',
      avatar: '/images/youtube-testimonials/aura.webp',
      quote: 'There\'s a lot more variety I can do now than just t-shirt and tanktop thanks to the stuff on offer from @FourthwallHQ *and* my OCs get to be the models from the start so I\'m really excited!! I HAVE A FASHION BRAND NOW :DDD'
    },
    {
      name: 'Moni',
      handle: '@monistreams',
      avatar: '/images/youtube-testimonials/moni.webp',
      quote: '@FourthwallHQ !!!!!!!!'
    }
  ];

  return (
    <section className="youtube-hero-section">
      <div className="youtube-hero-container">
        {/* Left: Content */}
        <div className="youtube-hero-content">
          <h1 className="youtube-hero-title">Lancia il tuo negozio YouTube</h1>
          <p className="youtube-hero-description">
            Crea una vetrina personalizzata per vendere merchandise, prodotti digitali e altro ancora al tuo pubblico.
          </p>
          <a href="#" className="youtube-hero-btn">Inizia ora</a>
        </div>

        {/* Right: Testimonials Carousel */}
        <div className="youtube-testimonials-slider">
          <div className="youtube-slider-track">
            {/* First set of testimonials */}
            {testimonials.map((testimonial, index) => (
              <div key={`testimonial-${index}`} className="youtube-testimonial-card">
                <div className="testimonial-header">
                  <div className="testimonial-user">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="testimonial-avatar"
                      onError={(e) => {
                        e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="48" height="48"%3E%3Crect width="48" height="48" fill="%23ddd"/%3E%3C/svg%3E';
                      }}
                    />
                    <div className="testimonial-info">
                      <div className="testimonial-name">{testimonial.name}</div>
                      <div className="testimonial-handle">{testimonial.handle}</div>
                    </div>
                  </div>
                  <div className="twitter-icon">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 4.52604C19.2746 4.84115 18.6633 4.85156 18.0155 4.53993C18.8514 4.05208 18.8897 3.7092 19.1918 2.78733C18.4094 3.23958 17.5423 3.56858 16.62 3.74566C15.8822 2.98003 14.8298 2.5 13.6651 2.5C11.4284 2.5 9.61593 4.26736 9.61593 6.44444C9.61593 6.75347 9.65158 7.05469 9.72019 7.34375C6.35537 7.17969 3.37106 5.60938 1.37409 3.22222C1.02566 3.80469 0.826056 4.48264 0.826056 5.20573C0.826056 6.57465 1.54161 7.78125 2.62698 8.48872C1.96311 8.46788 1.33933 8.2908 0.793976 7.99566C0.793085 8.01215 0.793085 8.02778 0.793085 8.04514C0.793085 9.9566 2.18856 11.5503 4.04206 11.9132C3.44858 12.0703 2.82303 12.0946 2.21262 11.9818C2.72857 13.5477 4.22385 14.6884 5.99537 14.7205C4.26216 16.0434 2.11371 16.5946 0 16.3533C1.79291 17.4722 3.91998 18.125 6.20745 18.125C13.6553 18.125 17.7277 12.1146 17.7277 6.90191C17.7277 6.73003 17.725 6.56076 17.717 6.39149C18.5074 5.83594 19.4573 5.31771 20 4.52604Z" fill="#FDFCFB"/>
                    </svg>
                  </div>
                </div>
                <p className="testimonial-quote">{testimonial.quote}</p>
              </div>
            ))}
            {/* Duplicate for infinite scroll */}
            {testimonials.map((testimonial, index) => (
              <div key={`testimonial-dup-${index}`} className="youtube-testimonial-card">
                <div className="testimonial-header">
                  <div className="testimonial-user">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="testimonial-avatar"
                      onError={(e) => {
                        e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="48" height="48"%3E%3Crect width="48" height="48" fill="%23ddd"/%3E%3C/svg%3E';
                      }}
                    />
                    <div className="testimonial-info">
                      <div className="testimonial-name">{testimonial.name}</div>
                      <div className="testimonial-handle">{testimonial.handle}</div>
                    </div>
                  </div>
                  <div className="twitter-icon">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 4.52604C19.2746 4.84115 18.6633 4.85156 18.0155 4.53993C18.8514 4.05208 18.8897 3.7092 19.1918 2.78733C18.4094 3.23958 17.5423 3.56858 16.62 3.74566C15.8822 2.98003 14.8298 2.5 13.6651 2.5C11.4284 2.5 9.61593 4.26736 9.61593 6.44444C9.61593 6.75347 9.65158 7.05469 9.72019 7.34375C6.35537 7.17969 3.37106 5.60938 1.37409 3.22222C1.02566 3.80469 0.826056 4.48264 0.826056 5.20573C0.826056 6.57465 1.54161 7.78125 2.62698 8.48872C1.96311 8.46788 1.33933 8.2908 0.793976 7.99566C0.793085 8.01215 0.793085 8.02778 0.793085 8.04514C0.793085 9.9566 2.18856 11.5503 4.04206 11.9132C3.44858 12.0703 2.82303 12.0946 2.21262 11.9818C2.72857 13.5477 4.22385 14.6884 5.99537 14.7205C4.26216 16.0434 2.11371 16.5946 0 16.3533C1.79291 17.4722 3.91998 18.125 6.20745 18.125C13.6553 18.125 17.7277 12.1146 17.7277 6.90191C17.7277 6.73003 17.725 6.56076 17.717 6.39149C18.5074 5.83594 19.4573 5.31771 20 4.52604Z" fill="#FDFCFB"/>
                    </svg>
                  </div>
                </div>
                <p className="testimonial-quote">{testimonial.quote}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default YouTubeHero;
