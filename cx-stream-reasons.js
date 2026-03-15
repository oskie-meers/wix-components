class CxCxStream extends HTMLElement {
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
    background: linear-gradient(90deg, #1e3a5f, #2CA593);
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
    color: #2CA593;
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
    color: #2CA593;
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
  .focus-card:nth-child(even)::before { background: #2CA593; }

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
  .focus-card:nth-child(even) .focus-icon { background: rgba(44,165,147,0.1); }
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
          <circle cx="12" cy="12" r="9" fill="rgba(30,58,95,0.1)" stroke="#1e3a5f" stroke-width="1.75"/>
          <path d="M8 12s1.5-2 4-2 4 2 4 2" stroke="#1e3a5f" stroke-width="1.75" stroke-linecap="round"/>
          <circle cx="9" cy="9" r="1" fill="#1e3a5f"/>
          <circle cx="15" cy="9" r="1" fill="#1e3a5f"/>
        </svg>
      </div>
      <div class="focus-title">AI-Enabled Personalisation</div>
      <div class="focus-desc">Using predictive insight and automation to deliver more relevant customer interactions.</div>
    </div>

    <div class="focus-card">
      <div class="focus-icon">
        <svg viewBox="0 0 24 24" fill="none">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="rgba(44,165,147,0.12)" stroke="#2CA593" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M9 12l2 2 4-4" stroke="#2CA593" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <div class="focus-title">Responsible AI and Customer Trust</div>
      <div class="focus-desc">Balancing automation and innovation with transparency and ethical data use.</div>
    </div>

    <div class="focus-card">
      <div class="focus-icon">
        <svg viewBox="0 0 24 24" fill="none">
          <ellipse cx="12" cy="12" rx="10" ry="4" fill="rgba(30,58,95,0.1)" stroke="#1e3a5f" stroke-width="1.75"/>
          <path d="M2 12c0 2.21 4.48 4 10 4s10-1.79 10-4" stroke="#1e3a5f" stroke-width="1.75"/>
          <path d="M2 12v4c0 2.21 4.48 4 10 4s10-1.79 10-4v-4" stroke="#1e3a5f" stroke-width="1.75"/>
        </svg>
      </div>
      <div class="focus-title">Customer Data Integration and Insight</div>
      <div class="focus-desc">Connecting systems to build a clearer, more actionable view of the customer.</div>
    </div>

    <div class="focus-card">
      <div class="focus-icon">
        <svg viewBox="0 0 24 24" fill="none">
          <path d="M3 12h4l3-9 4 18 3-9h4" stroke="#2CA593" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        </svg>
      </div>
      <div class="focus-title">Journey Design Across Channels</div>
      <div class="focus-desc">Creating more consistent end-to-end customer experiences across digital, service and physical touchpoints.</div>
    </div>

    <div class="focus-card">
      <div class="focus-icon">
        <svg viewBox="0 0 24 24" fill="none">
          <path d="M18 20V10M12 20V4M6 20v-6" stroke="#1e3a5f" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
          <rect x="3" y="3" width="18" height="18" rx="2" fill="rgba(30,58,95,0.08)" stroke="#1e3a5f" stroke-width="1.75" opacity="0.4"/>
        </svg>
      </div>
      <div class="focus-title">CX Measurement That Drives Action</div>
      <div class="focus-desc">Linking experience metrics with operational improvement, loyalty and commercial outcomes.</div>
    </div>

    <div class="focus-card">
      <div class="focus-icon">
        <svg viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="5" r="3" fill="rgba(44,165,147,0.12)" stroke="#2CA593" stroke-width="1.75"/>
          <circle cx="5" cy="19" r="3" fill="rgba(44,165,147,0.12)" stroke="#2CA593" stroke-width="1.75"/>
          <circle cx="19" cy="19" r="3" fill="rgba(44,165,147,0.12)" stroke="#2CA593" stroke-width="1.75"/>
          <path d="M12 8v4M12 12l-5 4M12 12l5 4" stroke="#2CA593" stroke-width="1.75" stroke-linecap="round"/>
        </svg>
      </div>
      <div class="focus-title">Embedding CX Across the Organisation</div>
      <div class="focus-desc">Aligning culture, teams and strategy around better customer outcomes.</div>
    </div>
</div>
</div>
`;
  }
}

customElements.define('cx-cx-stream', CxCxStream);
