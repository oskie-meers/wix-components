class ConferenceDashboard extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'open' });

    const style = document.createElement('style');
    style.textContent = `:host { display: block; font-family: 'TTCommons', Arial, sans-serif; }

    @font-face {
      font-family: 'TTCommons';
      src: url('https://cdn.jsdelivr.net/gh/oskie-meers/fonts@v1.0.0/TTCommons-DemiBold.woff2') format('woff2');
      font-weight: 600;
    }
    @font-face {
      font-family: 'TTCommons';
      src: url('https://cdn.jsdelivr.net/gh/oskie-meers/fonts@v1.0.0/TTCommons-Light.woff2') format('woff2');
      font-weight: 300;
    }

    *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

    .dashboard { width: 100%; padding: 60px 24px; background: transparent; }
    .dashboard-inner { max-width: 1200px; margin: 0 auto; }

    /* ── LOGOS ── */
    .logos-row {
      display: flex; align-items: center; justify-content: center;
      gap: 40px; flex-wrap: wrap; margin-bottom: 56px;
      opacity: 0; animation: fadeInUp 0.8s ease 0.1s forwards;
    }
    .logos-row img { height: 40px; width: auto; object-fit: contain; opacity: 0.85; transition: opacity 0.2s; }
    .logos-row img:hover { opacity: 1; }
    .logo-divider { width: 1px; height: 32px; background: #c5d5d5; }

    /* ── HEADLINE STATS ── */
    .headline-stats {
      display: flex; flex-wrap: wrap; justify-content: center; gap: 0;
      margin-bottom: 56px;
      border-top: 1px solid #d8e5e5; border-bottom: 1px solid #d8e5e5;
    }
    .headline-stat {
      flex: 1 1 200px; text-align: center; padding: 40px 24px;
      border-right: 1px solid #d8e5e5;
      opacity: 0; animation: fadeInUp 0.8s ease forwards;
    }
    .headline-stat:last-child { border-right: none; }
    .headline-stat:nth-child(1) { animation-delay: 0.15s; }
    .headline-stat:nth-child(2) { animation-delay: 0.25s; }
    .headline-stat:nth-child(3) { animation-delay: 0.35s; }
    .headline-stat:nth-child(4) { animation-delay: 0.45s; }
    .headline-stat .num {
      font-size: 52px; font-weight: 300; letter-spacing: -1px; line-height: 1;
      background: linear-gradient(135deg, #2d5a5a 0%, #4a9b94 100%);
      -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
      margin-bottom: 10px;
    }
    .headline-stat .label { font-size: 14px; font-weight: 300; color: #6b8585; line-height: 1.4; max-width: 160px; margin: 0 auto; }

    /* ── CARDS GRID ── */
    .lower-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 24px; }

    .card {
      background: white; border-radius: 20px; padding: 32px;
      opacity: 0; animation: fadeInUp 0.8s ease forwards;
      box-shadow: 0 2px 20px rgba(45,90,90,0.06);
    }
    .card:nth-child(1) { animation-delay: 0.5s; }
    .card:nth-child(2) { animation-delay: 0.6s; }
    .card:nth-child(3) { animation-delay: 0.7s; }

    /* card header row: icon + title */
    .card-header {
      display: flex; align-items: center; gap: 10px; margin-bottom: 24px;
    }
    .card-icon {
      width: 36px; height: 36px; border-radius: 10px;
      display: flex; align-items: center; justify-content: center; flex-shrink: 0;
    }
    .card-icon svg { width: 18px; height: 18px; }
    .card-icon.coral { background: rgba(217,112,90,0.12); }
    .card-icon.teal  { background: rgba(74,155,148,0.12); }
    .card-icon.ocean { background: rgba(26,95,106,0.12); }

    .card-title {
      font-size: 13px; font-weight: 600; letter-spacing: 0.08em;
      text-transform: uppercase; color: #4a9b94;
    }

    /* ── REACH CARD ── */
    .reach-items { display: flex; flex-direction: column; gap: 0; }
    .reach-item {
      display: flex; align-items: center; gap: 16px;
      padding: 16px 0; border-bottom: 1px solid #eef4f4;
    }
    .reach-item:last-child { border-bottom: none; padding-bottom: 0; }
    .reach-item:first-child { padding-top: 0; }
    .reach-item-icon {
      width: 44px; height: 44px; border-radius: 12px;
      display: flex; align-items: center; justify-content: center; flex-shrink: 0;
    }
    .reach-item-icon svg { width: 22px; height: 22px; }
    .reach-item-icon.email { background: rgba(232,147,58,0.12); }
    .reach-item-icon.social { background: rgba(169,146,184,0.12); }
    .reach-text {}
    .reach-num {
      font-size: 30px; font-weight: 300; letter-spacing: -0.5px; line-height: 1;
      background: linear-gradient(135deg, #2d5a5a 0%, #4a9b94 100%);
      -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
    }
    .reach-label { font-size: 12px; font-weight: 300; color: #6b8585; margin-top: 3px; }

    /* ── LINKEDIN CARD ── */
    .li-impression-row {
      display: flex; align-items: center; gap: 12px;
      padding: 16px 0 20px; border-bottom: 1px solid #eef4f4; margin-bottom: 20px;
    }
    .li-impression-icon {
      width: 48px; height: 48px; border-radius: 12px; background: rgba(10,102,194,0.08);
      display: flex; align-items: center; justify-content: center; flex-shrink: 0;
    }
    .li-big-num {
      font-size: 40px; font-weight: 300; letter-spacing: -1px; line-height: 1;
      background: linear-gradient(135deg, #2d5a5a 0%, #4a9b94 100%);
      -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
    }
    .li-big-label { font-size: 12px; font-weight: 300; color: #6b8585; margin-top: 4px; }

    /* Audience donut + legend */
    .audience-section { display: flex; align-items: center; gap: 20px; }
    .donut-wrap { position: relative; flex-shrink: 0; width: 90px; height: 90px; }
    .donut-wrap svg { width: 90px; height: 90px; transform: rotate(-90deg); }
    .donut-center {
      position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%);
      text-align: center;
    }
    .donut-center span {
      font-size: 10px; font-weight: 300; color: #6b8585; line-height: 1.2; display: block;
    }

    .audience-legend { flex: 1; display: flex; flex-direction: column; gap: 7px; }
    .legend-row { display: flex; align-items: center; gap: 7px; }
    .legend-dot { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }
    .legend-label { font-size: 11px; font-weight: 300; color: #6b8585; flex: 1; }
    .legend-pct { font-size: 11px; font-weight: 600; color: #2d5a5a; }

    /* ── WEB STATS CARD ── */
    .web-stats-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0; }
    .web-stat {
      padding: 14px 0;
      border-bottom: 1px solid #eef4f4;
    }
    .web-stat:nth-child(odd) { padding-right: 16px; border-right: 1px solid #eef4f4; }
    .web-stat:nth-child(even) { padding-left: 16px; }
    .web-stat:nth-last-child(-n+2) { border-bottom: none; }
    .web-stat-header { display: flex; align-items: center; gap: 8px; margin-bottom: 6px; }
    .web-stat-dot { width: 6px; height: 6px; border-radius: 50%; flex-shrink: 0; }
    .web-stat-tag { font-size: 10px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.06em; color: #9bbcbc; }
    .w-num {
      font-size: 26px; font-weight: 300; letter-spacing: -0.5px; line-height: 1;
      background: linear-gradient(135deg, #2d5a5a 0%, #4a9b94 100%);
      -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
      margin-bottom: 4px;
    }
    .w-label { font-size: 11px; font-weight: 300; color: #6b8585; line-height: 1.4; }

    /* ── ANIMATIONS ── */
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(24px); }
      to   { opacity: 1; transform: translateY(0); }
    }

    /* Donut animation */
    .donut-seg { stroke-dashoffset: 283; transition: stroke-dashoffset 1.2s cubic-bezier(0.16,1,0.3,1); }

    /* ── RESPONSIVE ── */
    @media (max-width: 900px) {
      .lower-grid { grid-template-columns: 1fr 1fr; }
      .headline-stat .num { font-size: 38px; }
    }
    @media (max-width: 640px) {
      .lower-grid { grid-template-columns: 1fr; }
      .headline-stats { border: none; }
      .headline-stat { border: none; border-bottom: 1px solid #d8e5e5; flex: 1 1 45%; padding: 28px 16px; }
      .headline-stat:nth-child(odd) { border-right: 1px solid #d8e5e5; }
      .logos-row { gap: 20px; }
      .logo-divider { display: none; }
      .logos-row img { height: 30px; }
    }`;
    shadow.appendChild(style);

    const wrapper = document.createElement('div');
    wrapper.innerHTML = `<section class="dashboard">
  <div class="dashboard-inner">

    <!-- Logos -->
    <div class="logos-row">
      <img src="https://static.wixstatic.com/media/958742_d83adeaa258a434bbfce2927c18afdb5~mv2.png" alt="Salus">
      <div class="logo-divider"></div>
      <img src="https://static.wixstatic.com/media/958742_1e237ceeb1d34f1abc1cc0f7845eb375~mv2.png/v1/fill/w_193,h_38,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Aventedge%20Logo.png" alt="Aventedge">
      <div class="logo-divider"></div>
      <img src="https://static.wixstatic.com/media/958742_ebe57ed04f1b46adb935c937241c53d9~mv2.png/v1/crop/x_0,y_180,w_2746,h_970/fill/w_244,h_86,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/958742_ebe57ed04f1b46adb935c937241c53d9~mv2.png" alt="WLI">
    </div>

    <!-- Headline Stats (counters) -->
    <div class="headline-stats">
      <div class="headline-stat">
        <div class="num"><span class="counter" data-target="12">0</span></div>
        <div class="label">Years of Experience</div>
      </div>
      <div class="headline-stat">
        <div class="num"><span class="counter" data-target="11320">0</span></div>
        <div class="label">Speakers Since We Began</div>
      </div>
      <div class="headline-stat">
        <div class="num"><span class="counter" data-target="48110">0</span>+</div>
        <div class="label">Delegates &amp; Attendees</div>
      </div>
      <div class="headline-stat">
        <div class="num"><span class="counter" data-target="627">0</span></div>
        <div class="label">Sponsors &amp; Event Partners</div>
      </div>
    </div>

    <!-- Cards -->
    <div class="lower-grid">

      <!-- Our Reach -->
      <div class="card">
        <div class="card-header">
          <div class="card-title">Our Reach</div>
        </div>

        <div class="reach-items">
          <div class="reach-item">
            <div class="reach-item-icon email">
              <svg viewBox="0 0 24 24" fill="none">
                <rect x="2" y="4" width="20" height="16" rx="3" stroke="#e8933a" stroke-width="1.75"/>
                <path d="M2 8L12 14L22 8" stroke="#e8933a" stroke-width="1.75" stroke-linecap="round"/>
              </svg>
            </div>
            <div class="reach-text">
              <div class="reach-num">120,000</div>
              <div class="reach-label">Email database</div>
            </div>
          </div>
          <div class="reach-item">
            <div class="reach-item-icon social">
              <svg viewBox="0 0 24 24" fill="none">
                <circle cx="18" cy="5" r="3" stroke="#a992b8" stroke-width="1.75"/>
                <circle cx="6" cy="12" r="3" stroke="#a992b8" stroke-width="1.75"/>
                <circle cx="18" cy="19" r="3" stroke="#a992b8" stroke-width="1.75"/>
                <path d="M8.59 13.51L15.42 17.49M15.41 6.51L8.59 10.49" stroke="#a992b8" stroke-width="1.75" stroke-linecap="round"/>
              </svg>
            </div>
            <div class="reach-text">
              <div class="reach-num">11,000</div>
              <div class="reach-label">Social followers across all brands</div>
            </div>
          </div>
        </div>
      </div>

      <!-- LinkedIn -->
      <div class="card">
        <div class="card-header">
          <div class="card-title">2025 LinkedIn Stats</div>
        </div>

        <div class="li-impression-row">
          <div class="li-impression-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M2 12C2 12 5 5 12 5C19 5 22 12 22 12C22 12 19 19 12 19C5 19 2 12 2 12Z" stroke="#0a66c2" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
              <circle cx="12" cy="12" r="3" stroke="#0a66c2" stroke-width="1.75"/>
            </svg>
          </div>
          <div>
            <div class="li-big-num">39,474</div>
            <div class="li-big-label">Impressions</div>
          </div>
        </div>

        <!-- Donut chart + legend -->
        <div class="audience-section">
          <div class="donut-wrap">
            <svg viewBox="0 0 100 100">
              <!-- bg ring -->
              <circle cx="50" cy="50" r="38" fill="none" stroke="#eef4f4" stroke-width="14"/>
              <!-- segments, each offset calculated cumulatively from 0% -->
              <!-- circumference = 2π×38 ≈ 238.76, we use 239 -->
              <!-- Senior 32% → dash=76.5 -->
              <circle class="donut-seg" id="seg0" cx="50" cy="50" r="38" fill="none" stroke="#d9705a" stroke-width="14" stroke-dasharray="76.5 239" stroke-dashoffset="239"/>
              <!-- Entry 18% → dash=43, offset after senior -->
              <circle class="donut-seg" id="seg1" cx="50" cy="50" r="38" fill="none" stroke="#4a9b94" stroke-width="14" stroke-dasharray="43 239" stroke-dashoffset="239"/>
              <!-- Director 14% → dash=33.5 -->
              <circle class="donut-seg" id="seg2" cx="50" cy="50" r="38" fill="none" stroke="#a992b8" stroke-width="14" stroke-dasharray="33.5 239" stroke-dashoffset="239"/>
              <!-- Manager 14% -->
              <circle class="donut-seg" id="seg3" cx="50" cy="50" r="38" fill="none" stroke="#7aaa8e" stroke-width="14" stroke-dasharray="33.5 239" stroke-dashoffset="239"/>
              <!-- VP&Owner 8% → dash=19 -->
              <circle class="donut-seg" id="seg4" cx="50" cy="50" r="38" fill="none" stroke="#1a5f6a" stroke-width="14" stroke-dasharray="19 239" stroke-dashoffset="239"/>
              <!-- Other 14% -->
              <circle class="donut-seg" id="seg5" cx="50" cy="50" r="38" fill="none" stroke="#a0b8b8" stroke-width="14" stroke-dasharray="33.5 239" stroke-dashoffset="239"/>
            </svg>
            <div class="donut-center"><span>Audience<br>Seniority</span></div>
          </div>
          <div class="audience-legend">
            <div class="legend-row"><div class="legend-dot" style="background:#d9705a"></div><div class="legend-label">Senior</div><div class="legend-pct">32%</div></div>
            <div class="legend-row"><div class="legend-dot" style="background:#4a9b94"></div><div class="legend-label">Entry</div><div class="legend-pct">18%</div></div>
            <div class="legend-row"><div class="legend-dot" style="background:#a992b8"></div><div class="legend-label">Director</div><div class="legend-pct">14%</div></div>
            <div class="legend-row"><div class="legend-dot" style="background:#7aaa8e"></div><div class="legend-label">Manager</div><div class="legend-pct">14%</div></div>
            <div class="legend-row"><div class="legend-dot" style="background:#1a5f6a"></div><div class="legend-label">VP &amp; Owner</div><div class="legend-pct">8%</div></div>
            <div class="legend-row"><div class="legend-dot" style="background:#a0b8b8"></div><div class="legend-label">Other</div><div class="legend-pct">16%</div></div>
          </div>
        </div>
      </div>

      <!-- Web Stats -->
      <div class="card">
        <div class="card-header">
          <div class="card-title">2025 Web Stats</div>
        </div>

        <div class="web-stats-grid">
          <div class="web-stat">
            <div class="web-stat-header">
              <div class="web-stat-dot" style="background:#d9705a"></div>
              <div class="web-stat-tag">Page Views</div>
            </div>
            <div class="w-num">307,986</div>
            <div class="w-label">Total page views</div>
          </div>
          <div class="web-stat">
            <div class="web-stat-header">
              <div class="web-stat-dot" style="background:#4a9b94"></div>
              <div class="web-stat-tag">Visitors</div>
            </div>
            <div class="w-num">157,000</div>
            <div class="w-label">Unique visitors</div>
          </div>
          <div class="web-stat">
            <div class="web-stat-header">
              <div class="web-stat-dot" style="background:#a992b8"></div>
              <div class="web-stat-tag">Avg Views</div>
            </div>
            <div class="w-num">26,632</div>
            <div class="w-label">Per event webpage</div>
          </div>
          <div class="web-stat">
            <div class="web-stat-header">
              <div class="web-stat-dot" style="background:#7aaa8e"></div>
              <div class="web-stat-tag">Avg Unique</div>
            </div>
            <div class="w-num">19,782</div>
            <div class="w-label">Unique visitors per event</div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>`;
    shadow.appendChild(wrapper);

    // Only animate the headline counters
  function animateCounter(el, target) {
    const duration = 2000;
    const start = performance.now();
    const update = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      const value = Math.floor(ease * target);
      el.textContent = value.toLocaleString();
      if (progress < 1) requestAnimationFrame(update);
      else el.textContent = target.toLocaleString();
    };
    requestAnimationFrame(update);
  }

  // Donut animation — spin each segment into place
  function animateDonut() {
    // circumference ≈ 239, each segment: dasharray stays fixed, we animate dashoffset
    // segments are stacked; offset = circumference - (sum of previous segments)
    const segs = [
      { id: 'seg0', pct: 0.32 },
      { id: 'seg1', pct: 0.18 },
      { id: 'seg2', pct: 0.14 },
      { id: 'seg3', pct: 0.14 },
      { id: 'seg4', pct: 0.08 },
      { id: 'seg5', pct: 0.16 },
    ];
    const C = 239;
    let cumulative = 0;
    segs.forEach((s, i) => {
      const el = shadow.getElementById(s.id);
      if (!el) return;
      const offset = C - cumulative * C;
      setTimeout(() => { el.style.strokeDashoffset = offset; }, 200 + i * 60);
      cumulative += s.pct;
    });
  }

  function startAnimations() {
    shadow.querySelectorAll('.counter').forEach((el, i) => {
      setTimeout(() => animateCounter(el, parseInt(el.dataset.target)), i * 100);
    });
    animateDonut();
  }

  if ('IntersectionObserver' in window) {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { startAnimations(); obs.unobserve(e.target); } });
    }, { threshold: 0.1 });
    obs.observe(shadow.querySelector('.dashboard'));
  } else {
    setTimeout(startAnimations, 500);
  }
  }
}

customElements.define('conference-dashboard', ConferenceDashboard);
