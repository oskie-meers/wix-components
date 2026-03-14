class CxCcStream extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'open' });

    shadow.innerHTML = `
<style>
@font-face { font-family: 'TTCommons'; src: url('https://cdn.jsdelivr.net/gh/oskie-meers/fonts@v1.0.0/TTCommons-DemiBold.woff2') format('woff2'); font-weight: 600; }
  @font-face { font-family: 'TTCommons'; src: url('https://cdn.jsdelivr.net/gh/oskie-meers/fonts@v1.0.0/TTCommons-Medium.woff2') format('woff2'); font-weight: 500; }
  @font-face { font-family: 'TTCommons'; src: url('https://cdn.jsdelivr.net/gh/oskie-meers/fonts@v1.0.0/TTCommons-Light.woff2') format('woff2'); font-weight: 300; }

  *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
  body { font-family: 'TTCommons', sans-serif; background: transparent; }

  .cc-stream {
    max-width: 1600px;
    margin: 0 auto;
    padding: 0;
  }

  /* ── HERO ── */
  .hero {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-bottom: 64px;
    background: #F0F0F0;
    border-radius: 20px;
    padding: 64px;
    border: none;
  }

  .stream-logo {
    max-width: 320px;
    height: auto;
    margin-bottom: 36px;
  }

  .hero-divider {
    width: 48px;
    height: 3px;
    background: linear-gradient(90deg, #1e3a5f, #2D7BA4);
    border-radius: 2px;
    margin: 0 auto 32px;
  }

  .hero-intro {
    width: 100%;
    margin: 0 0 24px;
  }

  .hero-intro p {
    font-size: 17px;
    line-height: 1.8;
    color: #4a6585;
    font-weight: 300;
    margin-bottom: 16px;
  }

  .hero-intro p:last-child { margin-bottom: 0; }

  .hero-cta {
    font-size: 15px;
    font-weight: 600;
    color: #2D7BA4;
    margin-top: 20px;
    display: inline-block;
  }

  /* ── FOCUS AREAS ── */
  .focus-label {
    text-align: center;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 2.5px;
    text-transform: uppercase;
    color: #2D7BA4;
    margin-bottom: 28px;
  }

  .focus-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }

  .focus-card {
    background: white;
    border-radius: 16px;
    padding: 28px;
    border: 1px solid rgba(30,58,95,0.08);
    display: flex;
    flex-direction: column;
    gap: 12px;
    opacity: 0;
    transform: translateY(20px);
    animation: fadeUp 0.6s ease forwards;
  }
  .focus-card:nth-child(1) { animation-delay: 0.05s; }
  .focus-card:nth-child(2) { animation-delay: 0.1s; }
  .focus-card:nth-child(3) { animation-delay: 0.15s; }
  .focus-card:nth-child(4) { animation-delay: 0.2s; }
  .focus-card:nth-child(5) { animation-delay: 0.25s; }
  .focus-card:nth-child(6) { animation-delay: 0.3s; }
  @keyframes fadeUp { to { opacity: 1; transform: translateY(0); } }

  .focus-card::before {
    content: '';
    display: block;
    height: 3px;
    border-radius: 2px;
    margin-bottom: 4px;
  }
  .focus-card:nth-child(odd)::before  { background: #1e3a5f; }
  .focus-card:nth-child(even)::before { background: #2D7BA4; }

  .focus-icon {
    width: 44px;
    height: 44px;
    border-radius: 11px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }
  .focus-card:nth-child(odd)  .focus-icon { background: rgba(30,58,95,0.07); }
  .focus-card:nth-child(even) .focus-icon { background: rgba(45,123,164,0.1); }
  .focus-icon svg { width: 22px; height: 22px; }

  .focus-title {
    font-size: 16px;
    font-weight: 600;
    color: #1e3a5f;
    line-height: 1.3;
  }

  .focus-desc {
    font-size: 14px;
    color: #6b85a0;
    line-height: 1.7;
    font-weight: 300;
  }

  @media (max-width: 900px) { .focus-grid { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 560px) {
    .cc-stream { padding: 40px 20px; }
    .focus-grid { grid-template-columns: 1fr; }
    .stream-logo { max-width: 240px; }
  }
</style>
<div class="cc-stream">

  <!-- FOCUS AREAS -->
  <div class="focus-grid">

    <div class="focus-card">
      <div class="focus-icon">
        <svg viewBox="0 0 24 24" fill="none">
          <rect x="2" y="3" width="20" height="14" rx="2" fill="rgba(30,58,95,0.12)" stroke="#1e3a5f" stroke-width="1.75"/>
          <path d="M8 21h8M12 17v4" stroke="#1e3a5f" stroke-width="1.75" stroke-linecap="round"/>
          <path d="M7 10h2M11 10h6" stroke="#1e3a5f" stroke-width="1.5" stroke-linecap="round" opacity="0.5"/>
          <path d="M7 13h4" stroke="#1e3a5f" stroke-width="1.5" stroke-linecap="round" opacity="0.5"/>
        </svg>
      </div>
      <div class="focus-title">AI Copilots and Agent Assist</div>
      <div class="focus-desc">Improving productivity, quality and consistency at the frontline.</div>
    </div>

    <div class="focus-card">
      <div class="focus-icon">
        <svg viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="9" fill="rgba(45,123,164,0.12)" stroke="#2D7BA4" stroke-width="1.75"/>
          <path d="M12 8v4l3 3" stroke="#2D7BA4" stroke-width="1.75" stroke-linecap="round"/>
          <path d="M7 3.34A9 9 0 0 0 3.34 7" stroke="#2D7BA4" stroke-width="1.5" stroke-linecap="round" opacity="0.4"/>
        </svg>
      </div>
      <div class="focus-title">Automation and Smarter Self-Service</div>
      <div class="focus-desc">Designing chatbots, IVR and digital channels that resolve issues faster without frustrating customers and damaging trust.</div>
    </div>

    <div class="focus-card">
      <div class="focus-icon">
        <svg viewBox="0 0 24 24" fill="none">
          <path d="M17 21V19C17 16.79 15.21 15 13 15H5C2.79 15 1 16.79 1 19V21" stroke="#1e3a5f" stroke-width="1.75" stroke-linecap="round"/>
          <circle cx="9" cy="7" r="4" fill="rgba(30,58,95,0.12)" stroke="#1e3a5f" stroke-width="1.75"/>
          <path d="M23 21V19C23 17.1 21.7 15.5 20 15.1M16 3.1C17.7 3.6 19 5.2 19 7S17.7 10.4 16 10.9" stroke="#1e3a5f" stroke-width="1.75" stroke-linecap="round" opacity="0.5"/>
        </svg>
      </div>
      <div class="focus-title">Agent Experience, Retention and Capability</div>
      <div class="focus-desc">Supporting performance, wellbeing and development in an AI-enabled service environment.</div>
    </div>

    <div class="focus-card">
      <div class="focus-icon">
        <svg viewBox="0 0 24 24" fill="none">
          <path d="M18 20V10M12 20V4M6 20v-6" stroke="#2D7BA4" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
          <rect x="3" y="3" width="18" height="18" rx="2" fill="rgba(45,123,164,0.08)" stroke="#2D7BA4" stroke-width="1.75" opacity="0.4"/>
        </svg>
      </div>
      <div class="focus-title">Real-Time Data and Service Intelligence</div>
      <div class="focus-desc">Using live customer data and analytics to improve routing, decision-making and customer outcomes.</div>
    </div>

    <div class="focus-card">
      <div class="focus-icon">
        <svg viewBox="0 0 24 24" fill="none">
          <rect x="2" y="7" width="20" height="14" rx="2" fill="rgba(30,58,95,0.1)" stroke="#1e3a5f" stroke-width="1.75"/>
          <path d="M16 7V5C16 3.9 15.1 3 14 3H10C8.9 3 8 3.9 8 5V7" stroke="#1e3a5f" stroke-width="1.75" stroke-linecap="round"/>
          <path d="M12 12v4M10 14h4" stroke="#1e3a5f" stroke-width="1.75" stroke-linecap="round" opacity="0.5"/>
        </svg>
      </div>
      <div class="focus-title">Omnichannel Service Delivery</div>
      <div class="focus-desc">Delivering consistent support across voice, messaging, digital and self-service channels.</div>
    </div>

    <div class="focus-card">
      <div class="focus-icon">
        <svg viewBox="0 0 24 24" fill="none">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="rgba(45,123,164,0.15)" stroke="#2D7BA4" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <div class="focus-title">Operational Efficiency and Measurable Value</div>
      <div class="focus-desc">Balancing service quality, cost control and business impact.</div>
    </div>

  </div>
</div>
`;
  }
}

customElements.define('cx-cc-stream', CxCcStream);
