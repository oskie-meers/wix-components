class CxKeyThemes extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'open' });

    shadow.innerHTML = `
<style>
@font-face { font-family: 'TTCommons'; src: url('https://cdn.jsdelivr.net/gh/oskie-meers/fonts@v1.0.0/TTCommons-DemiBold.woff2') format('woff2'); font-weight: 600; }
  @font-face { font-family: 'TTCommons'; src: url('https://cdn.jsdelivr.net/gh/oskie-meers/fonts@v1.0.0/TTCommons-Medium.woff2') format('woff2'); font-weight: 500; }
  @font-face { font-family: 'TTCommons'; src: url('https://cdn.jsdelivr.net/gh/oskiego-meers/fonts@v1.0.0/TTCommons-Light.woff2') format('woff2'); font-weight: 300; }

  *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
  :host { font-family: 'TTCommons', sans-serif; background: #F0F0F0; padding: 60px 48px; }

  .themes {
    max-width: 1600px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }

  .theme-card {
    background: white;
    border-radius: 16px;
    padding: 32px;
    border: 1px solid rgba(30,58,95,0.07);
    display: flex;
    flex-direction: column;
    gap: 14px;
    opacity: 0;
    transform: translateY(20px);
    animation: fadeUp 0.6s ease forwards;
  }
  .theme-card:nth-child(1) { animation-delay: 0.05s; }
  .theme-card:nth-child(2) { animation-delay: 0.1s; }
  .theme-card:nth-child(3) { animation-delay: 0.15s; }
  .theme-card:nth-child(4) { animation-delay: 0.2s; }
  .theme-card:nth-child(5) { animation-delay: 0.25s; }
  .theme-card:nth-child(6) { animation-delay: 0.3s; }
  @keyframes fadeUp { to { opacity: 1; transform: translateY(0); } }

  .theme-card::before {
    content: '';
    display: block;
    height: 3px;
    border-radius: 2px;
    margin-bottom: 4px;
  }
  .theme-card:nth-child(odd)::before  { background: #1e3a5f; }
  .theme-card:nth-child(even)::before { background: #3db8a8; }

  .theme-icon {
    width: 44px;
    height: 44px;
    border-radius: 11px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }
  .theme-card:nth-child(odd)  .theme-icon { background: rgba(30,58,95,0.07); }
  .theme-card:nth-child(even) .theme-icon { background: rgba(61,184,168,0.1); }
  .theme-icon svg { width: 22px; height: 22px; }

  .theme-title {
    font-size: 17px;
    font-weight: 600;
    color: #1e3a5f;
    line-height: 1.3;
  }

  .theme-desc {
    font-size: 15px;
    color: #6b85a0;
    line-height: 1.7;
    font-weight: 300;
    flex: 1;
  }

  @media (max-width: 1024px) { .themes { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 560px) { .themes { grid-template-columns: 1fr; } :host { padding: 40px 20px; } }
</style>
<div class="themes">

  <div class="theme-card">
    <div class="theme-icon">
      <svg viewBox="0 0 24 24" fill="none">
        <rect x="2" y="3" width="20" height="14" rx="2" fill="rgba(30,58,95,0.12)" stroke="#1e3a5f" stroke-width="1.75"/>
        <path d="M8 21h8M12 17v4" stroke="#1e3a5f" stroke-width="1.75" stroke-linecap="round"/>
        <path d="M7 9h2M11 9h6M7 12h4" stroke="#1e3a5f" stroke-width="1.5" stroke-linecap="round" opacity="0.5"/>
      </svg>
    </div>
    <div class="theme-title">AI, Automation and Human-Centred Design</div>
    <div class="theme-desc">AI was front and centre across both streams — from Spark NZ's GenAI-powered contact centre transformation and Xero's next phase of agent–AI collaboration, to Fonterra's and Salesforce's discussions on responsible integration. Speakers emphasised that AI success depends on trust, empathy, and human oversight.</div>
  </div>

  <div class="theme-card">
    <div class="theme-icon">
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M17 21V19C17 16.79 15.21 15 13 15H5C2.79 15 1 16.79 1 19V21" stroke="#3db8a8" stroke-width="1.75" stroke-linecap="round"/>
        <circle cx="9" cy="7" r="4" fill="rgba(61,184,168,0.15)" stroke="#3db8a8" stroke-width="1.75"/>
        <path d="M23 21V19C23 17.1 21.7 15.5 20 15.1M16 3.1C17.7 3.6 19 5.2 19 7S17.7 10.4 16 10.9" stroke="#3db8a8" stroke-width="1.75" stroke-linecap="round" opacity="0.5"/>
      </svg>
    </div>
    <div class="theme-title">Employee Experience as a CX Catalyst</div>
    <div class="theme-desc">Sessions led by Contact Energy, Lion, and Good CX highlighted the growing recognition that empowered, emotionally intelligent employees are the foundation of great customer outcomes. In a tight talent market, the "agent of 2026" will need to balance empathy, adaptability, and digital fluency.</div>
  </div>

  <div class="theme-card">
    <div class="theme-icon">
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M18 20V10M12 20V4M6 20v-6" stroke="#1e3a5f" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
        <rect x="3" y="3" width="18" height="18" rx="2" fill="rgba(30,58,95,0.08)" stroke="#1e3a5f" stroke-width="1.75" opacity="0.4"/>
      </svg>
    </div>
    <div class="theme-title">Data-Driven Personalisation and Real-Time Insights</div>
    <div class="theme-desc">Speakers from NZ Trade &amp; Enterprise, LIC, and Primepac demonstrated how organisations are harnessing customer data to deliver real-time personalisation and predictive insights. Many noted that data accessibility and governance remain barriers to fully data-led CX.</div>
  </div>

  <div class="theme-card">
    <div class="theme-icon">
      <svg viewBox="0 0 24 24" fill="none">
        <rect x="2" y="7" width="20" height="14" rx="2" fill="rgba(61,184,168,0.1)" stroke="#3db8a8" stroke-width="1.75"/>
        <path d="M16 7V5C16 3.9 15.1 3 14 3H10C8.9 3 8 3.9 8 5V7" stroke="#3db8a8" stroke-width="1.75" stroke-linecap="round"/>
        <path d="M12 12v3M10.5 13.5h3" stroke="#3db8a8" stroke-width="1.75" stroke-linecap="round" opacity="0.6"/>
      </svg>
    </div>
    <div class="theme-title">Omnichannel Experience and Consistency</div>
    <div class="theme-desc">Retail and service leaders such as Mitre 10, Auckland Transport, and Kiwibank shared how they're evolving to meet rising customer expectations for seamless, consistent experiences across every channel. Omnichannel integration emerged as a defining CX priority.</div>
  </div>

  <div class="theme-card">
    <div class="theme-icon">
      <svg viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="5" r="3" fill="rgba(30,58,95,0.1)" stroke="#1e3a5f" stroke-width="1.75"/>
        <circle cx="5" cy="19" r="3" fill="rgba(30,58,95,0.1)" stroke="#1e3a5f" stroke-width="1.75"/>
        <circle cx="19" cy="19" r="3" fill="rgba(30,58,95,0.1)" stroke="#1e3a5f" stroke-width="1.75"/>
        <path d="M12 8v4M12 12l-5 4M12 12l5 4" stroke="#1e3a5f" stroke-width="1.75" stroke-linecap="round"/>
      </svg>
    </div>
    <div class="theme-title">Culture, Leadership and Cross-Functional Collaboration</div>
    <div class="theme-desc">Sessions from Flybuys, Whakarongorau Aotearoa, Tonkin + Taylor, and Zip Co underscored the importance of embedding CX into organisational culture — moving CX from a department to a mindset.</div>
  </div>

  <div class="theme-card">
    <div class="theme-icon">
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="rgba(61,184,168,0.12)" stroke="#3db8a8" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M9 12l2 2 4-4" stroke="#3db8a8" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
    <div class="theme-title">Inclusion, Values and Purpose-Led Experience</div>
    <div class="theme-desc">Te W&#257;nanga o Aotearoa's session on embedding M&#257;ori values like koha (reciprocal giving) into digital design offered a powerful reminder that CX is also cultural. Purpose-driven design and inclusive customer journeys will define the next evolution of New Zealand's experience landscape.</div>
  </div>

</div>
`;
  }
}

customElements.define('cx-key-themes', CxKeyThemes);
