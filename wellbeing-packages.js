class MhwwWellbeingPackages extends HTMLElement {
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
    <span class="section-label-text">Wellbeing Packages</span>
    <div class="section-label-line"></div>
    <span class="section-label-tag">Experiential</span>
  </div>
  <div class="card-grid">
    <div class="pkg-card card-mint">
      <div class="pkg-category">Wellbeing</div>
      <div class="pkg-name">Wellbeing &amp; Networking Zone Sponsor</div>
      <div class="pkg-desc">Sponsor the heart of the conference experience. The Wellbeing &amp; Networking Zone is where delegates unwind and connect — your brand presides over one of the most frequented spaces at the event.</div>
    </div>
    <div class="pkg-card card-mint">
      <div class="pkg-category">Wellbeing</div>
      <div class="pkg-name">Fun Run Sponsor</div>
      <div class="pkg-desc">Get active with your audience. Sponsoring the Fun Run aligns your brand with energy, health, and community — creating a memorable shared experience delegates associate with your values long after the event.</div>
    </div>
    <div class="pkg-card card-mint">
      <div class="pkg-category">Wellbeing</div>
      <div class="pkg-name">Massage Sponsor</div>
      <div class="pkg-desc">Be remembered for making people feel good. The branded massage area creates a genuinely positive, relaxed association with your brand as delegates enjoy a moment of calm during the event day.</div>
    </div>
    <div class="pkg-card card-mint">
      <div class="pkg-category">Wellbeing</div>
      <div class="pkg-name">Juice Bar Sponsor</div>
      <div class="pkg-desc">Fuel the conversation. Your branded Juice Bar becomes a naturally popular gathering point — a health-forward activation at the centre of refreshment, energy, and informal networking between sessions.</div>
    </div>
  </div>
</div>
`;
  }
}

customElements.define('mhww-wellbeing-packages', MhwwWellbeingPackages);
