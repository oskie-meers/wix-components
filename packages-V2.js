class MhwwPackages extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'open' });

    shadow.innerHTML = `
<style>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500;600;700&display=swap');
*, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

  html {
    scrollbar-width: none;
    -ms-overflow-style: none;
    overflow-x: hidden;
  }
  html::-webkit-scrollbar { display: none; }

  :host {
    --teal-dark:    #2d5f5e;
    --teal-mid:     #3a7a72;
    --teal-light:   #4a9e8e;
    --orange:       #e8824a;
    --orange-light: #f0a070;
    --gold-bg:      #fdf0d0;
    --silver-bg:    #e8f0ef;
    --text-dark:    #1a2e2e;
    --text-mid:     #3a5252;
    --radius:    clamp(12px, 2vw, 18px);
    --pad:       clamp(16px, 5vw, 60px);
    --space-sm:  clamp(12px, 2vw,   20px);
    --space-md:  clamp(20px, 3vw,   32px);
    --space-lg:  clamp(32px, 5vw,   64px);
  }

  body {
    font-family: 'DM Sans', sans-serif;
    background: transparent;
    color: var(--text-dark);
    line-height: 1.6;
    overflow-x: hidden;
  }

  .page {
    max-width: 1100px;
    margin: 0 auto;
    padding: var(--space-lg) var(--pad);
  }

  .section-label {
    display: flex;
    align-items: center;
    gap: clamp(8px, 2vw, 16px);
    margin-bottom: var(--space-md);
    flex-wrap: wrap;
  }
  .section-label-text {
    font-family: 'Playfair Display', serif;
    font-size: clamp(18px, 3vw, 28px);
    font-weight: 700;
    color: var(--teal-dark);
    white-space: nowrap;
  }
  .section-label-line {
    flex: 1; min-width: 20px; height: 2px;
    background: linear-gradient(to right, var(--teal-light), transparent);
  }
  .section-label-tag {
    background: var(--teal-dark);
    color: white;
    font-size: clamp(9px, 1.2vw, 11px);
    font-weight: 600;
    letter-spacing: 2px;
    text-transform: uppercase;
    padding: 4px clamp(8px, 1.5vw, 12px);
    border-radius: 50px;
    white-space: nowrap;
  }

  .card-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: clamp(12px, 2vw, 20px);
  }

  .pkg-card {
    border-radius: var(--radius);
    padding: clamp(16px, 3vw, 28px);
    position: relative;
    overflow: hidden;
    transition: transform 0.22s ease, box-shadow 0.22s ease;
    border: 1px solid rgba(0,0,0,0.06);
  }

  .card-gold   { background: var(--gold-bg); }
  .card-silver { background: var(--silver-bg); }
  .card-teal   { background: linear-gradient(145deg, var(--teal-dark), var(--teal-mid)); }
  .card-teal .pkg-name     { color: white; }
  .card-teal .pkg-desc     { color: rgba(255,255,255,0.82); }
  .card-teal .pkg-category { color: rgba(255,255,255,0.65); }

  .card-headline {
    background: linear-gradient(145deg, #1e4040, #2d5f5e);
    color: white;
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: clamp(20px, 4vw, 40px);
    align-items: center;
  }
  .card-headline .pkg-name { color: white; }
  .card-headline .pkg-desc { color: rgba(255,255,255,0.85); }

  .headline-badge {
    background: var(--orange);
    color: white;
    font-size: clamp(9px, 1.2vw, 11px);
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    padding: 5px 14px;
    border-radius: 50px;
    display: inline-block;
    margin-bottom: var(--space-sm);
  }
  .headline-features { list-style: none; margin-top: var(--space-sm); }
  .headline-features li {
    font-size: clamp(11px, 1.5vw, 14px);
    padding: 6px 0;
    border-bottom: 1px solid rgba(255,255,255,0.1);
    display: flex;
    align-items: flex-start;
    gap: 10px;
    color: rgba(255,255,255,0.85);
    line-height: 1.4;
  }
  .headline-features li::before {
    content: '→';
    color: var(--orange-light);
    flex-shrink: 0;
    font-size: 13px;
    margin-top: 1px;
  }

  .headline-visual { display: flex; flex-direction: column; gap: clamp(10px, 2vw, 16px); }
  .mock-logo-box {
    background: rgba(255,255,255,0.1);
    border: 1px solid rgba(255,255,255,0.15);
    border-radius: 12px;
    padding: clamp(12px, 2.5vw, 20px);
    text-align: center;
    backdrop-filter: blur(10px);
  }
  .mock-label {
    font-size: clamp(8px, 1.2vw, 11px);
    letter-spacing: 1.5px;
    text-transform: uppercase;
    opacity: 0.6;
    margin-bottom: 6px;
  }
  .mock-event-name {
    font-family: 'DM Sans', sans-serif;
    font-size: clamp(12px, 1.8vw, 16px);
    font-weight: 700;
    line-height: 1.3;
  }
  .mock-sponsored { font-size: clamp(8px, 1.1vw, 10px); opacity: 0.5; margin-top: 6px; }

  .pkg-icon {
    font-size: clamp(20px, 3vw, 28px);
    margin-bottom: clamp(8px, 1.5vw, 12px);
    display: block; line-height: 1;
  }
  .pkg-category {
    font-size: clamp(9px, 1.2vw, 11px);
    font-weight: 600;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: var(--teal-mid);
    margin-bottom: 4px;
  }
  .pkg-name {
    font-family: 'Playfair Display', serif;
    font-size: clamp(15px, 2.5vw, 20px);
    font-weight: 700;
    color: var(--text-dark);
    margin-bottom: clamp(6px, 1vw, 10px);
    line-height: 1.25;
  }
  .pkg-desc {
    font-size: clamp(11px, 1.5vw, 13.5px);
    color: var(--text-mid);
    line-height: 1.65;
  }

  .card-diamond {
    background: linear-gradient(145deg, var(--teal-dark), var(--teal-mid));
    color: white;
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: clamp(20px, 4vw, 40px);
    align-items: start;
  }
  .card-diamond .pkg-name { color: white; }
  .card-diamond .pkg-desc { color: rgba(255,255,255,0.85); }
  .card-diamond .pkg-category { color: rgba(255,255,255,0.6); }

  .diamond-features { list-style: none; margin-top: var(--space-sm); }
  .diamond-features li {
    font-size: clamp(11px, 1.5vw, 13.5px);
    padding: 6px 0;
    border-bottom: 1px solid rgba(255,255,255,0.1);
    display: flex;
    align-items: flex-start;
    gap: 10px;
    color: rgba(255,255,255,0.85);
    line-height: 1.4;
  }
  .diamond-features li::before {
    content: '→';
    color: var(--orange-light);
    flex-shrink: 0;
    font-size: 13px;
    margin-top: 1px;
  }

  .diamond-right { display: flex; flex-direction: column; gap: clamp(10px, 2vw, 14px); }
  .diamond-category-box {
    background: rgba(255,255,255,0.1);
    border: 1px solid rgba(255,255,255,0.15);
    border-radius: 12px;
    padding: clamp(12px, 2vw, 18px);
    backdrop-filter: blur(10px);
  }
  .diamond-box-title {
    font-size: clamp(9px, 1.2vw, 11px);
    font-weight: 700;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: var(--orange-light);
    margin-bottom: 10px;
  }
  .diamond-box-list { list-style: none; }
  .diamond-box-list li {
    font-size: clamp(10px, 1.4vw, 12.5px);
    color: rgba(255,255,255,0.8);
    padding: 4px 0;
    line-height: 1.4;
    display: flex;
    gap: 8px;
    align-items: flex-start;
  }
  .diamond-box-list li::before {
    content: '·';
    color: var(--orange-light);
    flex-shrink: 0;
    font-size: 16px;
    line-height: 1.2;
  }

  .diamond-or-label {
    text-align: center;
    font-size: clamp(10px, 1.4vw, 13px);
    font-weight: 700;
    letter-spacing: 3px;
    color: rgba(255,255,255,0.4);
    text-transform: uppercase;
    padding: 2px 0;
  }

  @media (max-width: 700px) {
    .card-headline { grid-template-columns: 1fr; }
    .headline-visual { display: none; }
    .card-diamond { grid-template-columns: 1fr; }
    .section-label-line { min-width: 0; }
  }
  @media (max-width: 520px) {
    .card-grid { grid-template-columns: 1fr; }
  }
  @media (max-width: 360px) {
    .section-label-line { display: none; }
  }
</style>
<div class="page">

  <div class="section-label">
    <span class="section-label-text">Leading Packages</span>
    <div class="section-label-line"></div>
    <span class="section-label-tag">Premium</span>
  </div>

  <div class="card-grid">

    <div class="pkg-card card-headline">
      <div>
        <span class="headline-badge">Exclusive — Only 1 Available</span>
        <div class="pkg-name" style="font-size: clamp(20px, 3.5vw, 32px); margin-bottom: 12px;">Headline Sponsor</div>
        <div class="pkg-desc" style="color: rgba(255,255,255,0.85); font-size: clamp(12px, 1.8vw, 15px);">The ultimate opportunity to position yourself at the forefront of this important issue. Your brand becomes synonymous with the entire event — named in the conference title, featured on all marketing materials seen by thousands of Australians, and given the largest speaking platform available.</div>
        <ul class="headline-features">
          <li>Conference named in partnership with your brand</li>
          <li>Largest theatre (Big Ideas Stage) named after your brand</li>
          <li>30-minute keynote slot + second speaking session</li>
          <li>Full attendee list with contact details (post-event)</li>
          <li>12m × 6m exhibition stand — the largest at the event</li>
          <li>Scan tech included, allowing you to scan delegate badges to generate leads</li>
        </ul>
      </div>
      <div class="headline-visual">
        <div class="mock-logo-box">
          <div class="mock-label">Event Branding</div>
          <div class="mock-event-name">National Mental Health &amp;<br>Wellbeing at Work Show</div>
          <div class="mock-sponsored">Supported by <strong>YOUR BRAND</strong></div>
        </div>
        <div class="mock-logo-box">
          <div class="mock-label">Big Ideas Stage</div>
          <div class="mock-event-name">Big Ideas Stage —<br>YOUR BRAND</div>
          <div class="mock-sponsored">Supported by <strong>YOUR BRAND</strong></div>
        </div>
      </div>
    </div>

    <div class="pkg-card card-diamond">
      <div>
        <span class="pkg-icon">💎</span>
        <div class="pkg-category">Leading Package</div>
        <div class="pkg-name" style="font-size: clamp(18px, 3vw, 26px); margin-bottom: 10px;">Diamond Sponsor</div>
        <div class="pkg-desc" style="color: rgba(255,255,255,0.85); font-size: clamp(12px, 1.6vw, 14px);">A prestigious partnership that puts your brand front and centre across all key touchpoints — with named stage branding, prime exhibition placement, and a full suite of speaking and marketing inclusions.</div>
        <ul class="diamond-features">
          <li>A stage named after your brand (What Works or Leadership Stage)</li>
          <li>6m × 6m stand — positioned at the front or next to your named stage</li>
          <li>20-minute speaking slot on your named stage + Demo Stage slot</li>
          <li>Full attendee list with contact details (post-event)</li>
          <li>Scan tech included, allowing you to scan delegate badges to generate leads</li>
        </ul>
      </div>
      <div class="diamond-right">
        <div class="mock-logo-box">
          <div class="mock-label">What Works Stage</div>
          <div class="mock-event-name">What Works Stage —<br>YOUR BRAND</div>
          <div class="mock-sponsored">Supported by <strong>YOUR BRAND</strong></div>
        </div>
        <div class="diamond-or-label">OR</div>
        <div class="mock-logo-box">
          <div class="mock-label">Leadership Stage</div>
          <div class="mock-event-name">Leadership Stage —<br>YOUR BRAND</div>
          <div class="mock-sponsored">Supported by <strong>YOUR BRAND</strong></div>
        </div>
      </div>
    </div>

    <div class="pkg-card card-gold">
      <span class="pkg-icon">🏆</span>
      <div class="pkg-category" style="color:#9a7020;">Leading Package</div>
      <div class="pkg-name">Gold Sponsor</div>
      <div class="pkg-desc">Elevate your brand with excellent visibility and engagement opportunities. Gold Sponsors enjoy dedicated speaking time, a 6m × 3m premium stand, and targeted marketing reach to an engaged audience of workplace wellbeing professionals.</div>
    </div>

    <div class="pkg-card card-silver">
      <span class="pkg-icon">🔘</span>
      <div class="pkg-category" style="color:#4a7070;">Leading Package</div>
      <div class="pkg-name">Silver Sponsor</div>
      <div class="pkg-desc">An accessible entry into premium sponsorship. Silver Sponsors gain valued brand presence at the event through a 6m × 3m premium stand, panel and demo slot, and handouts to all attendees on arrival.</div>
    </div>

  </div>
</div>
`;
  }
}

customElements.define('mhww-packages', MhwwPackages);
