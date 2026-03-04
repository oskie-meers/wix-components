class MhwwBranding extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'open' });

    shadow.innerHTML = `
<style>

@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500;600;700&display=swap');
*, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
  html { scrollbar-width: none; -ms-overflow-style: none; overflow-x: hidden; }
  html::-webkit-scrollbar { display: none; }
  :host {
    --teal-dark:  #2d5f5e;
    --teal-mid:   #3a7a72;
    --teal-light: #4a9e8e;
    --coral-bg:   #fde8dc;
    --mint-bg:    #d8eeea;
    --text-dark:  #1a2e2e;
    --text-mid:   #3a5252;
    --space-sm:   clamp(12px, 2vw, 20px);
    --space-md:   clamp(20px, 3vw, 32px);
    --space-lg:   clamp(32px, 5vw, 64px);
    --radius:     clamp(12px, 2vw, 18px);
    --pad:        clamp(16px, 5vw, 60px);
  }
  body { font-family: 'DM Sans', sans-serif; background: transparent; color: var(--text-dark); line-height: 1.6; overflow-x: hidden; }
  .page { max-width: 1100px; margin: 0 auto; padding: var(--space-lg) var(--pad); }
  .section-label { display: flex; align-items: center; gap: clamp(8px, 2vw, 16px); margin-bottom: var(--space-md); flex-wrap: wrap; }
  .section-label-text { font-family: 'Playfair Display', serif; font-size: clamp(18px, 3vw, 28px); font-weight: 700; color: var(--teal-dark); white-space: nowrap; }
  .section-label-line { flex: 1; min-width: 20px; height: 2px; background: linear-gradient(to right, var(--teal-light), transparent); }
  .section-label-tag { background: var(--teal-dark); color: white; font-size: clamp(9px, 1.2vw, 11px); font-weight: 600; letter-spacing: 2px; text-transform: uppercase; padding: 4px clamp(8px, 1.5vw, 12px); border-radius: 50px; white-space: nowrap; }
  .card-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: clamp(12px, 2vw, 20px); }
  .pkg-card { border-radius: var(--radius); padding: clamp(16px, 3vw, 28px); position: relative; overflow: hidden; transition: transform 0.22s ease, box-shadow 0.22s ease; border: 1px solid rgba(0,0,0,0.06); }
  .card-coral { background: var(--coral-bg); }
  .card-mint  { background: var(--mint-bg); }
  .pkg-icon { font-size: clamp(20px, 3vw, 28px); margin-bottom: clamp(8px, 1.5vw, 12px); display: block; line-height: 1; }
  .pkg-category { font-size: clamp(9px, 1.2vw, 11px); font-weight: 600; letter-spacing: 1.5px; text-transform: uppercase; color: var(--teal-mid); margin-bottom: 4px; }
  .pkg-name { font-family: 'Playfair Display', serif; font-size: clamp(15px, 2.5vw, 20px); font-weight: 700; color: var(--text-dark); margin-bottom: clamp(6px, 1vw, 10px); line-height: 1.25; }
  .pkg-desc { font-size: clamp(11px, 1.5vw, 13.5px); color: var(--text-mid); line-height: 1.65; }
  @media (max-width: 900px) { .card-grid { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 520px) { .card-grid { grid-template-columns: 1fr; } }
  @media (max-width: 360px) { .section-label-line { display: none; } }
</style>
<div class="page">
  <div class="section-label">
    <span class="section-label-text">Branding Packages</span>
    <div class="section-label-line"></div>
    <span class="section-label-tag">Targeted</span>
  </div>
  <div class="card-grid">
    <div class="pkg-card card-coral">
      <div class="pkg-category">Branding</div>
      <div class="pkg-name">Lanyard Sponsor</div>
      <div class="pkg-desc">Your brand worn by every single attendee throughout the event. Maximum exposure from the moment delegates arrive to the moment they leave — a highly visible, wearable reminder of your presence.</div>
    </div>
    <div class="pkg-card card-coral">
      <div class="pkg-category">Branding</div>
      <div class="pkg-name">Delegate Bag Sponsor</div>
      <div class="pkg-desc">Put your brand directly into the hands of every attendee. Your logo prominently displayed on delegate bags distributed to all participants, with the opportunity to include branded inserts inside.</div>
    </div>
    <div class="pkg-card card-coral">
      <div class="pkg-category">Branding</div>
      <div class="pkg-name">App &amp; Wi-Fi Sponsor</div>
      <div class="pkg-desc">Own the digital experience. Your brand is the first thing attendees see when they connect to Wi-Fi and open the event app — ensuring consistent digital touchpoints throughout the entire conference day.</div>
    </div>
    <div class="pkg-card card-coral">
      <div class="pkg-category">Branding</div>
      <div class="pkg-name">Charging Station Sponsor</div>
      <div class="pkg-desc">A practical sponsorship that generates genuine gratitude. Branded charging stations become a valuable destination for attendees, giving your brand extended, quality dwell time in a high-traffic area.</div>
    </div>
  </div>
</div>
`;
  }
}

customElements.define('mhww-branding', MhwwBranding);
