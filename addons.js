class MhwwAddons extends HTMLElement {
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
    --teal-light: #4a9e8e;
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
  .section-label { display: flex; align-items: center; gap: clamp(8px, 2vw, 16px); margin-bottom: var(--space-sm); flex-wrap: wrap; }
  .section-label-text { font-family: 'Playfair Display', serif; font-size: clamp(18px, 3vw, 28px); font-weight: 700; color: var(--teal-dark); white-space: nowrap; }
  .section-label-line { flex: 1; min-width: 20px; height: 2px; background: linear-gradient(to right, var(--teal-light), transparent); }
  .section-label-tag { background: var(--teal-dark); color: white; font-size: clamp(9px, 1.2vw, 11px); font-weight: 600; letter-spacing: 2px; text-transform: uppercase; padding: 4px clamp(8px, 1.5vw, 12px); border-radius: 50px; white-space: nowrap; }
  .section-intro { margin-bottom: var(--space-md); color: var(--text-mid); font-size: clamp(12px, 1.8vw, 15px); }
  .addon-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: clamp(12px, 2vw, 16px); }
  .addon-card { background: white; border: 2px dashed rgba(45,95,94,0.2); border-radius: var(--radius); padding: clamp(14px, 2.5vw, 22px) clamp(14px, 2.5vw, 24px); transition: border-color 0.2s, background 0.2s, transform 0.2s; display: flex; align-items: flex-start; gap: clamp(10px, 2vw, 16px); }
  @media (hover: hover) { .addon-card:hover { border-color: var(--teal-light); background: var(--mint-bg); transform: translateY(-2px); } }
  .addon-icon { font-size: clamp(18px, 2.5vw, 24px); flex-shrink: 0; line-height: 1; margin-top: 2px; }
  .addon-name { font-weight: 600; font-size: clamp(12px, 1.8vw, 15px); color: var(--text-dark); margin-bottom: 4px; line-height: 1.3; }
  .addon-desc { font-size: clamp(11px, 1.4vw, 13px); color: var(--text-mid); line-height: 1.55; }
  @media (max-width: 600px) { .addon-grid { grid-template-columns: 1fr; } }
  @media (max-width: 360px) { .section-label-line { display: none; } }
</style>
<div class="page">
  <div class="section-label">
    <span class="section-label-text">Add-On Opportunities</span>
    <div class="section-label-line"></div>
    <span class="section-label-tag">Enhance Your Package</span>
  </div>
  <p class="section-intro">Complement your sponsorship or exhibition package with targeted add-ons designed to boost visibility, engagement, and ROI.</p>
  <div class="addon-grid">
    <div class="addon-card">
      <div class="addon-icon">🎤</div>
      <div>
        <div class="addon-name">Demo Zone Presentation</div>
        <div class="addon-desc">Secure dedicated presentation time in the Demo Zone — a high-traffic area where delegates actively seek out product insights and live demonstrations from exhibitors.</div>
      </div>
    </div>
    <div class="addon-card">
      <div class="addon-icon">📐</div>
      <div>
        <div class="addon-name">Increased Stand Size</div>
        <div class="addon-desc">Upgrade your exhibition footprint for greater presence, more display space, and increased capacity to engage multiple delegates simultaneously throughout the event day.</div>
      </div>
    </div>
    <div class="addon-card">
      <div class="addon-icon">📊</div>
      <div>
        <div class="addon-name">Scan-Tech for Lead Generation</div>
        <div class="addon-desc">Equip your team with digital scanning technology to effortlessly capture delegate details, making post-event follow-up faster, smarter, and more effective.</div>
      </div>
    </div>
    <div class="addon-card">
      <div class="addon-icon">📰</div>
      <div>
        <div class="addon-name">Showguide Adverts</div>
        <div class="addon-desc">Place your brand in the official event show guide — a tangible reference document that delegates keep and refer back to well beyond the conference itself.</div>
      </div>
    </div>
    <div class="addon-card">
      <div class="addon-icon">🪪</div>
      <div>
        <div class="addon-name">Additional Staff Passes</div>
        <div class="addon-desc">Bring more of your team to maximise coverage across your stand and sessions. Additional passes ensure you have the right people in the right place throughout the full event.</div>
      </div>
    </div>
  </div>
</div>
`;
  }
}

customElements.define('mhww-addons', MhwwAddons);
