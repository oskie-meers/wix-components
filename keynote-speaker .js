const template = document.createElement('template');
template.innerHTML = `
<style>
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  :host { display: block; font-family: 'DM Sans', sans-serif; background: #195859; padding: 64px 24px; }
  .ks-card { background: #fff; border-radius: 16px; box-shadow: 0 8px 40px rgba(0,0,0,0.18); max-width: 1100px; margin: 0 auto; display: flex; overflow: hidden; }
  .ks-img-col { flex: 0 0 360px; position: relative; }
  .ks-img-col img { width: 100%; height: 100%; object-fit: cover; object-position: center top; display: block; min-height: 420px; }
  .ks-accent { position: absolute; bottom: 0; left: 0; right: 0; height: 5px; background: linear-gradient(90deg, #195859, #B8A4C9); }
  .ks-body { flex: 1; padding: 52px 56px; display: flex; flex-direction: column; justify-content: center; }
  .ks-badge { display: inline-flex; align-items: center; gap: 6px; background: rgba(184,164,201,0.13); border: 1px solid #B8A4C9; color: #B8A4C9; font-size: 10px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; border-radius: 100px; padding: 5px 14px; width: fit-content; margin-bottom: 20px; }
  .ks-name { font-size: 34px; font-weight: 700; color: #195859; line-height: 1.15; margin-bottom: 6px; }
  .ks-title { font-size: 16px; font-weight: 500; color: #B8A4C9; margin-bottom: 24px; }
  .ks-divider { width: 40px; height: 3px; background: linear-gradient(90deg, #195859, #B8A4C9); border-radius: 2px; margin-bottom: 24px; }
  .ks-bio { font-size: 15px; color: #3a3a3a; line-height: 1.78; margin-bottom: 36px; }
  .ks-btn { display: inline-flex; align-items: center; gap: 8px; background: #195859; color: #fff; font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 600; letter-spacing: 0.04em; text-decoration: none; padding: 14px 28px; border-radius: 8px; width: fit-content; transition: background 0.2s, transform 0.2s; }
  .ks-btn:hover { background: #0f3c3d; transform: translateY(-2px); }
  @media (max-width: 720px) {
    .ks-card { flex-direction: column; }
    .ks-img-col { flex: 0 0 280px; min-height: 280px; }
    .ks-body { padding: 32px 28px; }
    .ks-name { font-size: 26px; }
  }
</style>

<div class="ks-card">
  <div class="ks-img-col">
    <img src="https://static.wixstatic.com/media/958742_c7dd3031c94b40a5a3e8fbc1f4b41308~mv2.jpg" alt="Marie Boland – CEO of Safe Work Australia" loading="lazy" />
    <div class="ks-accent"></div>
  </div>
  <div class="ks-body">
    <div class="ks-badge">★ Keynote Speaker</div>
    <h2 class="ks-name">Marie Boland</h2>
    <p class="ks-title">CEO of Safe Work Australia</p>
    <div class="ks-divider"></div>
    <p class="ks-bio">
      As one of Australia's leading voices on workplace health and safety policy, Marie brings extensive experience across government, regulation and organisational leadership.<br><br>
      Marie will share insights into the evolving landscape of psychosocial health and safety — the growing expectations on employers, the role of leadership in creating mentally healthy workplaces, and the practical steps organisations can take to move from policy to meaningful cultural change.
    </p>
    <a class="ks-btn" href="https://mentalhealthshow.salusevents.org/post/marie-bolan-confirmed-as-keynote-speaker-for-the-national-mental-health-and-wellbeing-at-work-show" target="_blank" rel="noopener noreferrer">
      Learn More →
    </a>
  </div>
</div>
`;

class KeynoteSpeaker extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('keynote-speaker', KeynoteSpeaker);
