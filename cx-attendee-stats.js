class CxAttendeeStats extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'open' });

    shadow.innerHTML = `
<style>
*, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
  body { font-family: Arial, sans-serif; background: transparent; padding: 40px 20px; }

  .dashboard {
    max-width: 1100px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto auto;
    gap: 20px;
  }

  /* ── SECTION HEADER ── */
  .section-header {
    grid-column: 1 / -1;
    margin-bottom: 4px;
  }
  .section-header h2 {
    font-size: clamp(22px, 3vw, 32px);
    font-weight: 700;
    color: #1e3a5f;
    letter-spacing: -0.5px;
  }
  .section-header p {
    font-size: 15px;
    color: #6b85a0;
    margin-top: 6px;
  }
  .header-line {
    width: 48px;
    height: 3px;
    background: linear-gradient(90deg, #3db8a8, #1e3a5f);
    border-radius: 2px;
    margin-top: 12px;
  }

  /* ── CARDS ── */
  .card {
    background: white;
    border-radius: 16px;
    padding: 28px;
    box-shadow: 0 2px 12px rgba(30,58,95,0.07);
  }
  .card-label {
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #3db8a8;
    margin-bottom: 16px;
  }

  /* ── BIG NUMBERS CARD ── */
  .numbers-card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 24px;
  }
  .big-stat {
    display: flex;
    align-items: center;
    gap: 16px;
  }
  .big-stat-icon {
    width: 48px;
    height: 48px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }
  .big-stat-icon.teal { background: rgba(61,184,168,0.12); }
  .big-stat-icon.navy { background: rgba(30,58,95,0.1); }
  .big-stat-icon svg { width: 22px; height: 22px; }
  .big-stat-num {
    font-size: 36px;
    font-weight: 700;
    color: #1e3a5f;
    line-height: 1;
    background: linear-gradient(135deg, #1e3a5f, #3db8a8);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .big-stat-desc {
    font-size: 13px;
    color: #6b85a0;
    margin-top: 3px;
  }
  .stat-divider {
    height: 1px;
    background: #f0f4f8;
  }

  /* ── BREAKDOWN BARS CARD ── */
  .breakdown-card { grid-column: 2 / 4; }
  .breakdown-row {
    margin-bottom: 18px;
  }
  .breakdown-row:last-child { margin-bottom: 0; }
  .breakdown-meta {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 7px;
  }
  .breakdown-title {
    font-size: 13px;
    font-weight: 600;
    color: #1e3a5f;
  }
  .breakdown-sub {
    font-size: 11px;
    color: #8fa5be;
    margin-top: 1px;
  }
  .breakdown-pct {
    font-size: 15px;
    font-weight: 700;
    color: #1e3a5f;
    flex-shrink: 0;
  }
  .bar-track {
    height: 8px;
    background: #eef2f7;
    border-radius: 50px;
    overflow: hidden;
  }
  .bar-fill {
    height: 100%;
    border-radius: 50px;
    transform-origin: left;
    transform: scaleX(0);
    animation: growBar 1s ease forwards;
  }
  .bar-fill.c1 { background: linear-gradient(90deg, #1e3a5f, #2a5080); animation-delay: 0.1s; }
  .bar-fill.c2 { background: linear-gradient(90deg, #3db8a8, #4ecfbe); animation-delay: 0.2s; }
  .bar-fill.c3 { background: linear-gradient(90deg, #1e5a8a, #2a7ab5); animation-delay: 0.3s; }
  .bar-fill.c4 { background: linear-gradient(90deg, #7ab8d8, #9acce8); animation-delay: 0.4s; }
  .bar-fill.c5 { background: linear-gradient(90deg, #b8d4e8, #cce0f0); animation-delay: 0.5s; }
  @keyframes growBar { to { transform: scaleX(1); } }

  /* ── JOB TITLES CARD ── */
  .titles-card {
    grid-column: 1 / -1;
  }
  .titles-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 4px;
  }
  .title-pill {
    background: #f0f6f9;
    border: 1px solid rgba(30,58,95,0.1);
    border-radius: 50px;
    padding: 7px 16px;
    font-size: 13px;
    color: #1e3a5f;
    font-weight: 500;
    opacity: 0;
    transform: translateY(8px);
    animation: fadeUp 0.5s ease forwards;
  }
  .title-pill:nth-child(1) { animation-delay: 0.05s; }
  .title-pill:nth-child(2) { animation-delay: 0.1s; }
  .title-pill:nth-child(3) { animation-delay: 0.15s; }
  .title-pill:nth-child(4) { animation-delay: 0.2s; }
  .title-pill:nth-child(5) { animation-delay: 0.25s; }
  .title-pill:nth-child(6) { animation-delay: 0.3s; }
  .title-pill.highlight {
    background: linear-gradient(135deg, #1e3a5f, #2a5a8a);
    color: white;
    border-color: transparent;
  }
  .title-pill.teal-pill {
    background: linear-gradient(135deg, #3db8a8, #2da898);
    color: white;
    border-color: transparent;
  }
  @keyframes fadeUp { to { opacity: 1; transform: translateY(0); } }

  /* ── RESPONSIVE ── */
  @media (max-width: 768px) {
    .dashboard { grid-template-columns: 1fr; }
    .breakdown-card { grid-column: 1; }
    .titles-card { grid-column: 1; }
  }
</style>
<div class="dashboard">

  <!-- BIG NUMBERS -->
  <div class="card numbers-card">
    <div class="card-label">At a Glance</div>
    <div class="big-stat">
      <div class="big-stat-icon teal">
        <svg viewBox="0 0 24 24" fill="none">
          <path d="M17 21V19C17 16.79 15.21 15 13 15H5C2.79 15 1 16.79 1 19V21" stroke="#3db8a8" stroke-width="2" stroke-linecap="round"/>
          <circle cx="9" cy="7" r="4" fill="rgba(61,184,168,0.2)" stroke="#3db8a8" stroke-width="2"/>
          <path d="M23 21V19C23 17.1 21.7 15.5 20 15.1" stroke="#3db8a8" stroke-width="2" stroke-linecap="round" opacity="0.5"/>
          <path d="M16 3.1C17.7 3.6 19 5.2 19 7S17.7 10.4 16 10.9" stroke="#3db8a8" stroke-width="2" stroke-linecap="round" opacity="0.5"/>
        </svg>
      </div>
      <div>
        <div class="big-stat-num">222</div>
        <div class="big-stat-desc">Total Attendees</div>
      </div>
    </div>
    <div class="stat-divider"></div>
    <div class="big-stat">
      <div class="big-stat-icon navy">
        <svg viewBox="0 0 24 24" fill="none">
          <rect x="2" y="3" width="20" height="14" rx="2" fill="rgba(30,58,95,0.15)" stroke="#1e3a5f" stroke-width="2"/>
          <path d="M8 21h8M12 17v4" stroke="#1e3a5f" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </div>
      <div>
        <div class="big-stat-num">94</div>
        <div class="big-stat-desc">Organisations Represented</div>
      </div>
    </div>
  </div>

  <!-- BREAKDOWN BARS -->
  <div class="card breakdown-card">
    <div class="card-label">Attendee Breakdown by Role</div>

    <div class="breakdown-row">
      <div class="breakdown-meta">
        <div>
          <div class="breakdown-title">Middle Management</div>
          <div class="breakdown-sub">CX Manager · Contact Centre Manager · Operations Manager</div>
        </div>
        <div class="breakdown-pct">45%</div>
      </div>
      <div class="bar-track"><div class="bar-fill c1" style="width:45%"></div></div>
    </div>

    <div class="breakdown-row">
      <div class="breakdown-meta">
        <div>
          <div class="breakdown-title">Senior Management</div>
          <div class="breakdown-sub">Head of CX · Head of Transformation · GM Customer Delivery</div>
        </div>
        <div class="breakdown-pct">29%</div>
      </div>
      <div class="bar-track"><div class="bar-fill c2" style="width:29%"></div></div>
    </div>

    <div class="breakdown-row">
      <div class="breakdown-meta">
        <div>
          <div class="breakdown-title">Executive Level</div>
          <div class="breakdown-sub">Chief Customer Officer · Executive Director · CEO</div>
        </div>
        <div class="breakdown-pct">12%</div>
      </div>
      <div class="bar-track"><div class="bar-fill c3" style="width:12%"></div></div>
    </div>

    <div class="breakdown-row">
      <div class="breakdown-meta">
        <div>
          <div class="breakdown-title">Specialist Roles</div>
          <div class="breakdown-sub">CX Analyst · Service Designer · Customer Insights Specialist</div>
        </div>
        <div class="breakdown-pct">7%</div>
      </div>
      <div class="bar-track"><div class="bar-fill c4" style="width:7%"></div></div>
    </div>

    <div class="breakdown-row">
      <div class="breakdown-meta">
        <div>
          <div class="breakdown-title">Other</div>
          <div class="breakdown-sub">Experience Design · Customer Coordinator · Team Leader</div>
        </div>
        <div class="breakdown-pct">7%</div>
      </div>
      <div class="bar-track"><div class="bar-fill c5" style="width:7%"></div></div>
    </div>

  </div>

  <!-- JOB TITLES -->
  <div class="card titles-card">
    <div class="card-label">Top Job Titles in the Room</div>
    <div class="titles-grid">
      <span class="title-pill highlight">Chief Customer Officer</span>
      <span class="title-pill teal-pill">General Manager</span>
      <span class="title-pill highlight">Head of CX</span>
      <span class="title-pill">CX Manager</span>
      <span class="title-pill">Customer Service Manager</span>
      <span class="title-pill">Team Lead Contact Centre</span>
    </div>
  </div>

</div>
`;
  }
}

customElements.define('cx-attendee-stats', CxAttendeeStats);
