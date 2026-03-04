class MhwwExhibition extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'open' });

    shadow.innerHTML = `
<style>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500;600;700&display=swap');
*, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
  html { scrollbar-width: none; -ms-overflow-style: none; overflow-x: hidden; }
  html::-webkit-scrollbar { display: none; }
  :host {
    --teal-dark:   #2d5f5e;
    --teal-mid:    #3a7a72;
    --teal-light:  #4a9e8e;
    --orange-light: #f0a070;
    --silver-bg:   #e8f0ef;
    --text-dark:   #1a2e2e;
    --text-mid:    #3a5252;
    --space-md:    clamp(20px, 3vw, 32px);
    --space-lg:    clamp(32px, 5vw, 64px);
    --radius:      clamp(12px, 2vw, 18px);
    --pad:         clamp(16px, 5vw, 60px);
  }
  body { font-family: 'DM Sans', sans-serif; background: transparent; color: var(--text-dark); line-height: 1.6; overflow-x: hidden; }
  .page { max-width: 1100px; margin: 0 auto; padding: var(--space-lg) var(--pad); }
  .section-label { display: flex; align-items: center; gap: clamp(8px, 2vw, 16px); margin-bottom: var(--space-md); flex-wrap: wrap; }
  .section-label-text { font-family: 'Playfair Display', serif; font-size: clamp(18px, 3vw, 28px); font-weight: 700; color: var(--teal-dark); white-space: nowrap; }
  .section-label-line { flex: 1; min-width: 20px; height: 2px; background: linear-gradient(to right, var(--teal-light), transparent); }
  .section-label-tag { background: var(--teal-dark); color: white; font-size: clamp(9px, 1.2vw, 11px); font-weight: 600; letter-spacing: 2px; text-transform: uppercase; padding: 4px clamp(8px, 1.5vw, 12px); border-radius: 50px; white-space: nowrap; }
  .card-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: clamp(12px, 2vw, 20px); }
  .pkg-card { border-radius: var(--radius); padding: clamp(16px, 3vw, 28px); position: relative; overflow: hidden; transition: transform 0.22s ease, box-shadow 0.22s ease; border: 1px solid rgba(0,0,0,0.06); }
  .card-premium { background: linear-gradient(145deg, #2a5555, #3a7a72); border: none; }
  .card-silver  { background: var(--silver-bg); }
  .pkg-icon { font-size: clamp(20px, 3vw, 28px); margin-bottom: clamp(8px, 1.5vw, 12px); display: block; line-height: 1; }
  .pkg-category { font-size: clamp(9px, 1.2vw, 11px); font-weight: 600; letter-spacing: 1.5px; text-transform: uppercase; color: var(--teal-mid); margin-bottom: 4px; }
  .card-premium .pkg-category { color: var(--orange-light); }
  .pkg-name { font-family: 'Playfair Display', serif; font-size: clamp(15px, 2.5vw, 24px); font-weight: 700; color: var(--text-dark); margin-bottom: clamp(6px, 1vw, 10px); line-height: 1.25; }
  .card-premium .pkg-name { color: white; }
  .pkg-desc { font-size: clamp(11px, 1.5vw, 13.5px); color: var(--text-mid); line-height: 1.65; }
  .card-premium .pkg-desc { color: rgba(255,255,255,0.85); }
  @media (max-width: 520px) { .card-grid { grid-template-columns: 1fr; } }
  @media (max-width: 360px) { .section-label-line { display: none; } }
</style>
<div class="page">
  <div class="section-label">
    <span class="section-label-text">Exhibition Packages</span>
    <div class="section-label-line"></div>
    <span class="section-label-tag">Stand-Based</span>
  </div>
  <div class="card-grid">
    <div class="pkg-card card-premium">
      <span class="pkg-icon">⭐</span>
      <div class="pkg-category">Exhibition</div>
      <div class="pkg-name">Premium Exhibition Package</div>
      <div class="pkg-desc">Secure a prime location in the exhibition hall with a larger stand footprint and enhanced inclusions. Premium positions are strategically placed for maximum delegate flow, ensuring your team has every opportunity to engage, generate leads, and make meaningful connections.</div>
    </div>
    <div class="pkg-card card-silver">
      <span class="pkg-icon">🏢</span>
      <div class="pkg-category">Exhibition</div>
      <div class="pkg-name">Standard Exhibition Package</div>
      <div class="pkg-desc">A fantastic platform to showcase your products and services to a highly targeted audience. Your stand gives your team dedicated space to meet delegates, run demonstrations, collect leads, and build brand awareness throughout the full event day.</div>
    </div>
  </div>
</div>
`;
  }
}

customElements.define('mhww-exhibition', MhwwExhibition);
