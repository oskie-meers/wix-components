class CxFeedback extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'open' });

    shadow.innerHTML = `
<style>
@font-face { font-family: 'TTCommons'; src: url('https://cdn.jsdelivr.net/gh/oskie-meers/fonts@v1.0.0/TTCommons-DemiBold.woff2') format('woff2'); font-weight: 600; }
  @font-face { font-family: 'TTCommons'; src: url('https://cdn.jsdelivr.net/gh/oskie-meers/fonts@v1.0.0/TTCommons-Light.woff2') format('woff2'); font-weight: 300; }
  *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
  :host { font-family: 'TTCommons', sans-serif; background: transparent; padding: 48px; }

  .feedback {
    max-width: 1100px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  .fb-card {
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 2px 16px rgba(30,58,95,0.08);
    border: 1px solid rgba(30,58,95,0.07);
    opacity: 0;
    transform: translateY(16px);
    animation: fadeUp 0.6s ease forwards;
  }
  .fb-card:nth-child(1) { animation-delay: 0.05s; }
  .fb-card:nth-child(2) { animation-delay: 0.1s; }
  .fb-card:nth-child(3) { animation-delay: 0.15s; }
  .fb-card:nth-child(4) { animation-delay: 0.2s; }
  @keyframes fadeUp { to { opacity: 1; transform: translateY(0); } }

  .fb-card img {
    width: 100%;
    display: block;
  }

  @media (max-width: 860px) { .feedback { grid-template-columns: 1fr; } }
  @media (max-width: 600px) { :host { padding: 24px 20px; } }
</style>
<div class="feedback">
  <div class="fb-card">
    <img src="https://static.wixstatic.com/media/958742_a60bbed2ac35442ea6aac1f3e6d7b279~mv2.png" alt="Attendee feedback">
  </div>
  <div class="fb-card">
    <img src="https://static.wixstatic.com/media/958742_6832367deef84124b464927dd64e4a34~mv2.png" alt="Attendee feedback">
  </div>
  <div class="fb-card">
    <img src="https://static.wixstatic.com/media/958742_22e0a6dce17f45bfb629630cef10b9fb~mv2.png" alt="Attendee feedback">
  </div>
  <div class="fb-card">
    <img src="https://static.wixstatic.com/media/958742_9ef04125fb6e4855bd95eada94010ab3~mv2.png" alt="Attendee feedback">
  </div>
</div>
`;
  }
}

customElements.define('cx-feedback', CxFeedback);
