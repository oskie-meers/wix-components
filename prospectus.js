class MhwwProspectus extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'open' });

    shadow.innerHTML = `
<style>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500;600;700&display=swap');
  *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
  html { scrollbar-width: none; -ms-overflow-style: none; overflow-x: hidden; }
  html::-webkit-scrollbar { display: none; }
  :host {
    --teal-dark:    #2d5f5e;
    --teal-light:   #4a9e8e;
    --orange:       #e8824a;
    --orange-light: #f0a070;
    --pad:          clamp(16px, 5vw, 60px);
    --space-lg:     clamp(32px, 5vw, 64px);
  }
  body { font-family: 'DM Sans', sans-serif; background: transparent; overflow-x: hidden; margin: 0; padding: 0; }
  .page { max-width: 1100px; margin: 0 auto; padding: var(--space-lg) var(--pad); }
  .cta-section { background: linear-gradient(135deg, var(--teal-dark), var(--teal-light)); border-radius: clamp(16px, 3vw, 24px); padding: clamp(36px, 6vw, 60px) clamp(24px, 5vw, 60px); text-align: center; color: white; position: relative; overflow: hidden; }
  .cta-section::before { content: ''; position: absolute; top: -60px; right: -60px; width: min(300px, 50vw); height: min(300px, 50vw); border-radius: 50%; background: rgba(232,130,74,0.15); pointer-events: none; }
  .cta-section h2 { font-family: 'Playfair Display', serif; font-size: clamp(20px, 4vw, 36px); font-weight: 700; margin-bottom: clamp(10px, 2vw, 16px); position: relative; z-index: 1; }
  .cta-section p { font-size: clamp(13px, 2vw, 17px); opacity: 0.88; max-width: min(560px, 100%); margin: 0 auto clamp(20px, 3vw, 32px); position: relative; z-index: 1; }
  .cta-btn { background: var(--orange); color: white; border: none; padding: clamp(11px, 2vw, 16px) clamp(22px, 4vw, 40px); border-radius: 50px; font-size: clamp(13px, 1.8vw, 16px); font-weight: 600; cursor: pointer; transition: background 0.2s, transform 0.2s; text-decoration: none; display: inline-block; position: relative; z-index: 1; font-family: 'DM Sans', sans-serif; }
  @media (hover: hover) { .cta-btn:hover { background: var(--orange-light); transform: scale(1.04); } }
</style>
<div class="page">
  <div class="cta-section">
    <h2>Ready to Partner With Us?</h2>
    <p>Download the sponsorship prospectus to view the right package for your organisation or inquire about custom partnership opportunities.</p>
    <a href="https://mentalhealthshow.salusevents.org/prospectus" target="_blank" class="cta-btn">Download the Prospectus</a>
  </div>
</div>
`;
  }
}

customElements.define('mhww-prospectus', MhwwProspectus);
