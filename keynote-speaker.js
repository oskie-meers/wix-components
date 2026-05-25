const template = document.createElement('template');
template.innerHTML = `
<style>
  @font-face { font-family: 'TT Commons'; src: url('https://github.com/oskie-meers/fonts/blob/main/TTCommons-Light.woff2?raw=true') format('woff2'); font-weight: 300; }
  @font-face { font-family: 'TT Commons'; src: url('https://github.com/oskie-meers/fonts/blob/main/TTCommons-Regular.woff2?raw=true') format('woff2'); font-weight: 400; }
  @font-face { font-family: 'TT Commons'; src: url('https://github.com/oskie-meers/fonts/blob/main/TTCommons-Medium.woff2?raw=true') format('woff2'); font-weight: 500; }
  @font-face { font-family: 'TT Commons'; src: url('https://github.com/oskie-meers/fonts/blob/main/TTCommons-DemiBold.woff2?raw=true') format('woff2'); font-weight: 600; }
  @font-face { font-family: 'TT Commons'; src: url('https://github.com/oskie-meers/fonts/blob/main/TTCommons-Bold.woff2?raw=true') format('woff2'); font-weight: 700; }

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :host {
    --teal: #195859;
    --purple: #B8A4C9;
    --white: #ffffff;
    --off-white: #F5F5F5;
    display: block;
    font-family: 'TT Commons', sans-serif;
    background: var(--off-white);
    padding: 64px 24px;
  }

  .section-label {
    text-align: center;
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--purple);
    margin-bottom: 12px;
  }

  .section-heading {
    text-align: center;
    font-size: 32px;
    font-weight: 700;
    color: var(--teal);
    margin-bottom: 40px;
  }

  .card {
    background: var(--white);
    border-radius: 16px;
    box-shadow: 0 4px 32px rgba(25, 88, 89, 0.08);
    max-width: 860px;
    margin: 0 auto;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    animation: fadeUp 0.7s ease both;
  }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(24px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  .card-image-col {
    flex: 0 0 300px;
    position: relative;
    min-height: 380px;
    background: var(--teal);
  }

  .card-image-col img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top;
    display: block;
  }

  .accent-bar {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 6px;
    background: linear-gradient(90deg, var(--teal) 0%, var(--purple) 100%);
  }

  .card-content {
    flex: 1;
    padding: 44px 44px 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0;
  }

  .keynote-badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: rgba(184, 164, 201, 0.15);
    border: 1px solid var(--purple);
    color: var(--purple);
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    border-radius: 100px;
    padding: 5px 14px;
    width: fit-content;
    margin-bottom: 22px;
  }

  .keynote-badge svg {
    width: 12px;
    height: 12px;
    fill: var(--purple);
  }

  .speaker-name {
    font-size: 30px;
    font-weight: 700;
    color: var(--teal);
    line-height: 1.15;
    margin-bottom: 6px;
  }

  .speaker-title {
    font-size: 15px;
    font-weight: 500;
    color: var(--purple);
    letter-spacing: 0.02em;
    margin-bottom: 24px;
  }

  .divider {
    width: 40px;
    height: 3px;
    background: linear-gradient(90deg, var(--teal), var(--purple));
    border-radius: 2px;
    margin-bottom: 22px;
  }

  .speaker-bio {
    font-size: 15px;
    font-weight: 400;
    color: #3a3a3a;
    line-height: 1.75;
    margin-bottom: 32px;
  }

  .learn-more {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: var(--teal);
    color: var(--white);
    font-family: 'TT Commons', sans-serif;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.04em;
    text-decoration: none;
    padding: 13px 26px;
    border-radius: 8px;
    width: fit-content;
    transition: background 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
  }

  .learn-more:hover {
    background: #0f3c3d;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(25, 88, 89, 0.25);
  }

  .learn-more svg {
    width: 16px;
    height: 16px;
    stroke: var(--white);
    fill: none;
    transition: transform 0.2s ease;
  }

  .learn-more:hover svg {
    transform: translateX(3px);
  }

  @media (max-width: 720px) {
    .card {
      flex-direction: column;
    }
    .card-image-col {
      flex: 0 0 280px;
      min-height: 280px;
    }
    .card-content {
      padding: 32px 28px 32px;
    }
    .section-heading {
      font-size: 24px;
    }
  }
</style>

<div class="section-label">
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#B8A4C9" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
  Keynote Speaker
</div>
<h2 class="section-heading">Confirmed Keynote</h2>

<div class="card">
  <div class="card-image-col">
    <img
      src="https://static.wixstatic.com/media/958742_c7dd3031c94b40a5a3e8fbc1f4b41308~mv2.jpg"
      alt="Marie Boland – CEO of Safe Work Australia"
      loading="lazy"
    />
    <div class="accent-bar"></div>
  </div>

  <div class="card-content">
    <div class="keynote-badge">
      <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
      Keynote Speaker
    </div>

    <h3 class="speaker-name">Marie Boland</h3>
    <p class="speaker-title">CEO of Safe Work Australia</p>

    <div class="divider"></div>

    <p class="speaker-bio">
      As one of Australia's leading voices on workplace health and safety policy, Marie brings extensive experience across government, regulation and organisational leadership.<br><br>
      Marie will share insights into the evolving landscape of psychosocial health and safety, including the growing expectations on employers, the role of leadership in creating mentally healthy workplaces, and the practical steps organisations can take to move from policy to meaningful cultural change.
    </p>

    <a
      class="learn-more"
      href="https://mentalhealthshow.salusevents.org/post/marie-bolan-confirmed-as-keynote-speaker-for-the-national-mental-health-and-wellbeing-at-work-show"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn More
      <svg viewBox="0 0 24 24" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
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
