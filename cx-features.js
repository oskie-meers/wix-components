class CxFeatures extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'open' });

    shadow.innerHTML = `
<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
  *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
  body { font-family: 'Inter', sans-serif; background: transparent; padding: 40px 20px; }

  .features {
    max-width: 1100px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }

  .feature-card {
    background: white;
    border-radius: 20px;
    padding: 36px 28px;
    box-shadow: 0 2px 16px rgba(30,58,95,0.07);
    border: 1px solid rgba(30,58,95,0.07);
    display: flex;
    flex-direction: column;
    gap: 20px;
    opacity: 0;
    transform: translateY(24px);
    animation: fadeUp 0.7s ease forwards;
  }
  .feature-card:nth-child(1) { animation-delay: 0.1s; }
  .feature-card:nth-child(2) { animation-delay: 0.2s; }
  .feature-card:nth-child(3) { animation-delay: 0.3s; }
  @keyframes fadeUp { to { opacity: 1; transform: translateY(0); } }

  .feature-card::before {
    content: '';
    display: block;
    height: 4px;
    border-radius: 2px;
    margin-bottom: 4px;
  }
  .feature-card:nth-child(1)::before { background: linear-gradient(90deg, #1e3a5f, #2a5a8a); }
  .feature-card:nth-child(2)::before { background: linear-gradient(90deg, #3db8a8, #2da898); }
  .feature-card:nth-child(3)::before { background: linear-gradient(90deg, #1e5a8a, #3db8a8); }

  .icon-wrap {
    width: 56px;
    height: 56px;
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }
  .feature-card:nth-child(1) .icon-wrap { background: rgba(30,58,95,0.08); }
  .feature-card:nth-child(2) .icon-wrap { background: rgba(61,184,168,0.1); }
  .feature-card:nth-child(3) .icon-wrap { background: rgba(30,90,138,0.08); }
  .icon-wrap svg { width: 26px; height: 26px; }

  .feature-title {
    font-size: 17px;
    font-weight: 700;
    color: #1e3a5f;
    line-height: 1.3;
  }

  .feature-desc {
    font-size: 14px;
    color: #6b85a0;
    line-height: 1.7;
    flex: 1;
  }

  .feature-tag {
    display: inline-block;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    padding: 5px 12px;
    border-radius: 50px;
    align-self: flex-start;
  }
  .feature-card:nth-child(1) .feature-tag { background: rgba(30,58,95,0.07); color: #1e3a5f; }
  .feature-card:nth-child(2) .feature-tag { background: rgba(61,184,168,0.12); color: #2a9888; }
  .feature-card:nth-child(3) .feature-tag { background: rgba(30,90,138,0.08); color: #1e5a8a; }

  @media (max-width: 900px) { .features { grid-template-columns: 1fr; max-width: 520px; } }
</style>
<div class="features">

  <div class="feature-card">
    <div class="icon-wrap">
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="3" width="7" height="18" rx="1.5" fill="rgba(30,58,95,0.15)" stroke="#1e3a5f" stroke-width="1.75" stroke-linejoin="round"/>
        <rect x="14" y="3" width="7" height="18" rx="1.5" fill="rgba(30,58,95,0.15)" stroke="#1e3a5f" stroke-width="1.75" stroke-linejoin="round"/>
      </svg>
    </div>
    <div class="feature-title">Two Streams, One Ticket</div>
    <div class="feature-desc">Access both streams at any point across the 2 days, all included in your ticket. Find out what's happening in the world of customer experience and customer service.</div>
  </div>

  <div class="feature-card">
    <div class="icon-wrap">
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="9" cy="7" r="4" fill="rgba(61,184,168,0.2)" stroke="#3db8a8" stroke-width="1.75"/>
        <circle cx="17" cy="10" r="3" fill="rgba(61,184,168,0.15)" stroke="#3db8a8" stroke-width="1.75" opacity="0.7"/>
        <path d="M1 21C1 18.24 4.69 16 9 16C13.31 16 17 18.24 17 21" stroke="#3db8a8" stroke-width="1.75" stroke-linecap="round"/>
        <path d="M17 16C19.76 16 22 17.34 22 19" stroke="#3db8a8" stroke-width="1.75" stroke-linecap="round" opacity="0.6"/>
      </svg>
    </div>
    <div class="feature-title">Experiential Experiences</div>
    <div class="feature-desc">Engage in peer-to-peer interactive sessions and take on a more hands-on approach to learning with interactive breakout sessions and peer-to-peer roundtables.</div>
  </div>

  <div class="feature-card">
    <div class="icon-wrap">
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 9L12 2L21 9V20C21 20.5523 20.5523 21 20 21H15V15H9V21H4C3.44772 21 3 20.5523 3 20V9Z" fill="rgba(30,90,138,0.15)" stroke="#1e5a8a" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
        <circle cx="12" cy="11" r="2" fill="rgba(30,90,138,0.2)" stroke="#1e5a8a" stroke-width="1.5"/>
      </svg>
    </div>
    <div class="feature-title">Discover Innovative Products & Services</div>
    <div class="feature-desc">Address some of the biggest challenges faced in the world of customer by checking out the vendor exhibition stands, all under one roof.</div>
  </div>

</div>
`;
  }
}

customElements.define('cx-features', CxFeatures);
