// ─── Data ────────────────────────────────────────────────────────────────────

const SPEAKER = {
  photo: 'https://static.wixstatic.com/media/958742_749dd8bc72b54b4aad621ff2d59eb836~mv2.avif',
  name: 'Gavin Whalebone',
  title: 'Principal Intelligence Analyst',
  org: 'NSW Independent Commission Against Corruption',
};

const LEARN_ITEMS = [
  'How to pivot from a single data point to build a comprehensive digital profile using free, publicly available, and ethical tools.',
  'Methods for extracting intelligence from digital archives and Australian public records.',
  'The legal framework surrounding OSINT practices including when and why to gather information.',
  'How to maintain ethical standards while gathering intelligence.',
  'How to leverage emerging AI technologies to enhance your OSINT capabilities.',
  'How AI can be used to amplify collection, analysis, and insight generation, making your work more efficient and comprehensive.',
  'The shifting boundary between the surface and dark web. Learn how to access and use information from these areas, with a focus on ethical considerations and practical applications for OSINT.',
];

const TAKEAWAYS = [
  { icon: '🛠️', text: 'Gain practical, hands-on knowledge of OSINT techniques suitable for all experience levels, regardless of technical background.' },
  { icon: '🤖', text: 'Discover cutting-edge resources and use of AI tools to enhance your OSINT capabilities.' },
  { icon: '⚖️', text: 'Develop a clear understanding of the ethical and legal frameworks that govern OSINT practices.' },
  { icon: '📋', text: 'Walk away with a curated spreadsheet of over 100 verified OSINT resources to apply directly to your work.' },
];

// ─── Styles ───────────────────────────────────────────────────────────────────

const CSS = `
  @font-face { font-family: 'TT Commons'; src: url('https://cdn.jsdelivr.net/gh/oskie-meers/fonts@v1.0.0/TTCommons-Thin.woff2') format('woff2'); font-weight: 100; }
  @font-face { font-family: 'TT Commons'; src: url('https://cdn.jsdelivr.net/gh/oskie-meers/fonts@v1.0.0/TTCommons-ExtraLight.woff2') format('woff2'); font-weight: 200; }
  @font-face { font-family: 'TT Commons'; src: url('https://cdn.jsdelivr.net/gh/oskie-meers/fonts@v1.0.0/TTCommons-Light.woff2') format('woff2'); font-weight: 300; }
  @font-face { font-family: 'TT Commons'; src: url('https://cdn.jsdelivr.net/gh/oskie-meers/fonts@v1.0.0/TTCommons-Regular.woff2') format('woff2'); font-weight: 400; }
  @font-face { font-family: 'TT Commons'; src: url('https://cdn.jsdelivr.net/gh/oskie-meers/fonts@v1.0.0/TTCommons-Medium.woff2') format('woff2'); font-weight: 500; }
  @font-face { font-family: 'TT Commons'; src: url('https://cdn.jsdelivr.net/gh/oskie-meers/fonts@v1.0.0/TTCommons-DemiBold.woff2') format('woff2'); font-weight: 600; }
  @font-face { font-family: 'TT Commons'; src: url('https://cdn.jsdelivr.net/gh/oskie-meers/fonts@v1.0.0/TTCommons-ExtraBold.woff2') format('woff2'); font-weight: 800; }
  @font-face { font-family: 'TT Commons'; src: url('https://cdn.jsdelivr.net/gh/oskie-meers/fonts@v1.0.0/TTCommons-Black.woff2') format('woff2'); font-weight: 900; }

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :host {
    display: block;
    font-family: 'TT Commons', sans-serif;
  }

  .workshop-section {
    background: #f4f6f8;
    padding: 72px 24px;
    color: #1a2e44;
  }

  .workshop-inner {
    max-width: 1080px;
    margin: 0 auto;
  }

  .workshop-label {
    display: inline-block;
    background: #00a3b4;
    color: #fff;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    padding: 6px 16px;
    border-radius: 2px;
    margin-bottom: 20px;
  }

  .workshop-title {
    font-family: 'TT Commons', sans-serif;
    font-size: clamp(22px, 3.5vw, 36px);
    font-weight: 700;
    color: #0d2b45;
    line-height: 1.3;
    max-width: 780px;
    margin-bottom: 8px;
  }

  .workshop-meta {
    font-size: clamp(15px, 1.4vw, 18px);
    color: #00a3b4;
    font-weight: 600;
    margin-bottom: 40px;
    letter-spacing: 0.3px;
  }

  .workshop-card {
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 24px rgba(13,43,69,0.10);
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }

  .workshop-left {
    padding: 48px 52px;
    border-bottom: 1px solid #e8edf2;
  }

  .workshop-right {
    padding: 48px 52px;
    background: #0d2b45;
    color: #fff;
  }

  .section-heading {
    font-family: 'TT Commons', sans-serif;
    font-size: clamp(11px, 1vw, 13px);
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: #00a3b4;
    margin-bottom: 16px;
  }

  .workshop-right .section-heading {
    color: #00d4e8;
  }

  .workshop-overview {
    font-size: clamp(16px, 1.5vw, 19px);
    line-height: 1.75;
    color: #3d5166;
    margin-bottom: 32px;
  }

  .speaker-block {
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 24px;
    background: #f0f6f8;
    border-left: 4px solid #00a3b4;
    border-radius: 6px;
    margin-top: 4px;
  }

  .speaker-photo {
    width: 72px;
    height: 72px;
    border-radius: 50%;
    object-fit: cover;
    flex-shrink: 0;
    border: 3px solid #fff;
    box-shadow: 0 2px 10px rgba(0,0,0,0.15);
  }

  .speaker-info { flex: 1; }

  .speaker-role {
    font-size: clamp(10px, 0.9vw, 12px);
    font-weight: 700;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: #00a3b4;
    margin-bottom: 4px;
  }

  .speaker-name {
    font-family: 'TT Commons', sans-serif;
    font-size: clamp(17px, 1.5vw, 21px);
    font-weight: 700;
    color: #0d2b45;
    margin-bottom: 4px;
  }

  .speaker-title {
    font-size: clamp(13px, 1.2vw, 16px);
    color: #3d5166;
    line-height: 1.5;
  }

  .speaker-org {
    font-weight: 700;
    color: #0d2b45;
  }

  .learn-list {
    list-style: none;
    margin-bottom: 36px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0 32px;
  }

  .learn-list li {
    display: flex;
    gap: 14px;
    align-items: flex-start;
    font-size: clamp(16px, 1.5vw, 19px);
    line-height: 1.65;
    color: #b8cfe0;
    padding: 10px 0;
    border-bottom: 1px solid rgba(255,255,255,0.07);
  }

  .learn-list li:last-child { border-bottom: none; }

  .learn-icon {
    width: 20px;
    height: 20px;
    background: #00a3b4;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    margin-top: 2px;
  }

  .learn-icon svg { width: 10px; height: 10px; }

  .takeaways-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
  }

  .takeaway-card {
    background: rgba(0,163,180,0.12);
    border: 1px solid rgba(0,163,180,0.25);
    border-radius: 6px;
    padding: 16px;
  }

  .takeaway-card p {
    font-size: clamp(15px, 1.35vw, 18px);
    line-height: 1.55;
    color: #b8cfe0;
  }

  .takeaway-icon {
    font-size: 18px;
    margin-bottom: 8px;
    display: block;
  }

  @media (max-width: 760px) {
    .workshop-left  { padding: 36px 28px; }
    .workshop-right { padding: 36px 28px; }
    .learn-list     { grid-template-columns: 1fr; }
    .takeaways-grid { grid-template-columns: 1fr; }
  }
`;

// ─── Helpers ─────────────────────────────────────────────────────────────────

const checkSVG = `<svg viewBox="0 0 10 10" fill="none"><polyline points="2,5 4.5,7.5 8,3" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

// ─── Custom Element ───────────────────────────────────────────────────────────

class WorkshopOsint extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'open' });

    shadow.innerHTML = `
      <style>${CSS}</style>

      <section class="workshop-section">
        <div class="workshop-inner">

          <span class="workshop-label">Post-Summit Workshop</span>
          <h2 class="workshop-title">Next Generation Open-Source Intelligence: Using Open Data to Enhance Research, Analysis and Investigations</h2>
          <p class="workshop-meta">9:00 AM – 12:00 PM &nbsp;·&nbsp; Half-Day Workshop</p>

          <div class="workshop-card">

            <div class="workshop-left">
              <p class="section-heading">Workshop Overview</p>
              <p class="workshop-overview">
                Open-Source Intelligence (OSINT) is evolving rapidly and so are the challenges faced by investigators, analysts, and professionals across integrity, governance, compliance, and regulatory domains. This workshop introduces modern, ethically sound techniques for collecting, analysing, and operationalising OSINT to strengthen investigative and analytical outcomes.
                <br><br>
                Once centred on manual social media searches, OSINT now demands a broader, more structured approach. Many familiar resources and commercial platforms have introduced paywalls, licensing restrictions, and monitoring systems that can inadvertently reveal organisational interest. This workshop is essential for anyone looking to navigate these barriers effectively and provides you with the tools and techniques needed to maintain the highest standards of legality, accuracy, and ethics in your investigations.
                <br><br>
                Whether you're new to OSINT or an experienced practitioner, you'll leave equipped with contemporary tradecraft, a curated spreadsheet of more than 100 verified resources, and a deeper understanding of how information in the public domain can enhance your investigative and analytical practice.
              </p>

              <p class="section-heading">Workshop Leader</p>
              <div class="speaker-block">
                <img src="${SPEAKER.photo}" alt="${SPEAKER.name}" class="speaker-photo" />
                <div class="speaker-info">
                  <p class="speaker-role">Workshop Leader</p>
                  <p class="speaker-name">${SPEAKER.name}</p>
                  <p class="speaker-title">
                    ${SPEAKER.title}<br>
                    <span class="speaker-org">${SPEAKER.org}</span>
                  </p>
                </div>
              </div>
            </div>

            <div class="workshop-right">
              <p class="section-heading">Attend &amp; Learn</p>
              <ul class="learn-list">
                ${LEARN_ITEMS.map(item => `
                  <li>
                    <span class="learn-icon">${checkSVG}</span>
                    ${item}
                  </li>
                `).join('')}
              </ul>

              <p class="section-heading">Key Takeaways</p>
              <div class="takeaways-grid">
                ${TAKEAWAYS.map(t => `
                  <div class="takeaway-card">
                    <span class="takeaway-icon">${t.icon}</span>
                    <p>${t.text}</p>
                  </div>
                `).join('')}
              </div>
            </div>

          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('workshop-osint', WorkshopOsint);
