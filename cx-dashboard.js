class CxDashboard extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'open' });

    shadow.innerHTML = `
<style>
@font-face { font-family: 'TTCommons'; src: url('https://cdn.jsdelivr.net/gh/oskie-meers/fonts@v1.0.0/TTCommons-DemiBold.woff2') format('woff2'); font-weight: 600; }
  @font-face { font-family: 'TTCommons'; src: url('https://cdn.jsdelivr.net/gh/oskie-meers/fonts@v1.0.0/TTCommons-Medium.woff2') format('woff2'); font-weight: 500; }
  @font-face { font-family: 'TTCommons'; src: url('https://cdn.jsdelivr.net/gh/oskie-meers/fonts@v1.0.0/TTCommons-Light.woff2') format('woff2'); font-weight: 300; }
  *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
  :host { font-family: 'TTCommons', sans-serif; background: transparent; padding: 48px; color: #1e3a5f; }

  .dash { max-width: 1600px; margin: 0 auto; }

  .top-row { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-bottom: 24px; }
  .metric { background: #f4f7fa; border-radius: 14px; padding: 28px 32px; }
  .metric-label { font-size: 13px; font-weight: 500; color: #6b85a0; margin-bottom: 8px; letter-spacing: 0; }
  .metric-value { font-size: 48px; font-weight: 600; color: #1e3a5f; line-height: 1; }
  .metric-sub { font-size: 14px; color: #8fa5be; margin-top: 6px; font-weight: 300; }
  .stars { color: #f0a030; font-size: 22px; letter-spacing: 3px; margin-top: 8px; }

  .charts-row { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px; align-items: start; }
  .chart-card { background: white; border: 1px solid rgba(30,58,95,0.08); border-radius: 16px; padding: 32px; }
  .chart-title { font-size: 13px; font-weight: 600; color: #6b85a0; margin-bottom: 24px; letter-spacing: 0; }

  .bar-row { display: flex; align-items: center; gap: 12px; margin-bottom: 14px; }
  .bar-label { font-size: 14px; color: #4a6585; width: 140px; flex-shrink: 0; line-height: 1.3; font-weight: 300; }
  .bar-track { flex: 1; height: 8px; background: #eef2f7; border-radius: 4px; overflow: hidden; }
  .bar-fill { height: 100%; border-radius: 4px; transform-origin: left; transform: scaleX(0); animation: growBar 0.8s ease forwards; }
  .bar-row:nth-child(2) .bar-fill { animation-delay: 0.05s; }
  .bar-row:nth-child(3) .bar-fill { animation-delay: 0.1s; }
  .bar-row:nth-child(4) .bar-fill { animation-delay: 0.15s; }
  .bar-row:nth-child(5) .bar-fill { animation-delay: 0.2s; }
  @keyframes growBar { to { transform: scaleX(1); } }
  .bar-pct { font-size: 14px; font-weight: 600; color: #1e3a5f; width: 36px; text-align: right; flex-shrink: 0; }

  .pills-card { background: white; border: 1px solid rgba(30,58,95,0.08); border-radius: 16px; padding: 32px; }
  .pills-wrap { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 16px; }
  .pill { font-size: 14px; border-radius: 50px; padding: 7px 18px; font-weight: 500; }
  .pill-navy { background: #1e3a5f; color: #e0eaf4; }
  .pill-blue { background: #2D7BA4; color: #e0f0f8; }
  .pill-light { background: #eef2f7; color: #4a6585; }

  .legend { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 16px; }
  .legend-item { display: flex; align-items: center; gap: 6px; font-size: 12px; color: #6b85a0; font-weight: 300; }
  .legend-dot { width: 10px; height: 10px; border-radius: 2px; flex-shrink: 0; }

  @media (max-width: 900px) {
    .charts-row { grid-template-columns: 1fr; }
    .top-row { grid-template-columns: repeat(3, 1fr); }
    :host { padding: 24px 20px; }
  }
  @media (max-width: 600px) {
    .top-row { grid-template-columns: 1fr; }
    .metric-value { font-size: 36px; }
    .metric { padding: 20px; }
    .chart-card { padding: 16px; }
    .pills-card { padding: 16px; }
    .bar-row { gap: 8px; }
    .bar-label { width: auto; flex: 0 0 38%; font-size: 12px; }
    .bar-pct { font-size: 12px; width: 28px; }
    .pill { font-size: 12px; padding: 5px 12px; }
    .pills-wrap { gap: 8px; }
    .legend-item { font-size: 11px; }
  }
  @media (max-width: 400px) {
    .bar-label { flex: 0 0 44%; font-size: 11px; }
  }
</style>
<div class="dash">

  <div class="top-row">
    <div class="metric">
      <div class="metric-label">Total Attendees</div>
      <div class="metric-value">222</div>
      <div class="metric-sub">2025 event</div>
    </div>
    <div class="metric">
      <div class="metric-label">Organisations Represented</div>
      <div class="metric-value">94</div>
      <div class="metric-sub">Accounts</div>
    </div>
    <div class="metric">
      <div class="metric-label">Customer Satisfaction</div>
      <div class="metric-value">8.1<span style="font-size:22px;color:#8fa5be;font-weight:300">/10</span></div>
      <div class="stars">&#9733;&#9733;&#9733;&#9733;&#9734;</div>
    </div>
  </div>

  <div class="charts-row">

    <div style="display:flex;flex-direction:column;gap:20px;">
    <div class="chart-card">
      <div class="chart-title">Seniority Breakdown</div>
      <div class="bar-row">
        <div class="bar-label">Middle Management</div>
        <div class="bar-track"><div class="bar-fill" style="width:45%;background:#1e3a5f;"></div></div>
        <div class="bar-pct">45%</div>
      </div>
      <div class="bar-row">
        <div class="bar-label">Senior Management</div>
        <div class="bar-track"><div class="bar-fill" style="width:29%;background:#2D7BA4;"></div></div>
        <div class="bar-pct">29%</div>
      </div>
      <div class="bar-row">
        <div class="bar-label">Executive Level</div>
        <div class="bar-track"><div class="bar-fill" style="width:12%;background:#3db8a8;"></div></div>
        <div class="bar-pct">12%</div>
      </div>
      <div class="bar-row">
        <div class="bar-label">Specialist Roles</div>
        <div class="bar-track"><div class="bar-fill" style="width:7%;background:#7ab8d8;"></div></div>
        <div class="bar-pct">7%</div>
      </div>
      <div class="bar-row">
        <div class="bar-label">Other</div>
        <div class="bar-track"><div class="bar-fill" style="width:7%;background:#b8d4e8;"></div></div>
        <div class="bar-pct">7%</div>
      </div>
    </div>

    <div class="pills-card">
    <div class="chart-title">Top Job Titles</div>
    <div class="pills-wrap">
      <span class="pill pill-navy">Chief Customer Officer</span>
      <span class="pill pill-blue">General Manager</span>
      <span class="pill pill-navy">Head of CX</span>
      <span class="pill pill-light">CX Manager</span>
      <span class="pill pill-light">Customer Service Manager</span>
      <span class="pill pill-light">Team Lead Contact Centre</span>
    </div>
    </div>
    </div>

    <div class="chart-card">
      <div class="chart-title">Industry Breakdown</div>
      <div style="position:relative;height:260px;">
        <canvas id="industryChart"></canvas>
      </div>
      <div class="legend" id="industryLegend"></div>
    </div>

  </div>

</div>
`;

    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.js';
    script.onload = function() {
const industries = [
    { label: 'Government & Public Services', value: 21, color: '#1e3a5f' },
    { label: 'Financial & Professional Services', value: 18, color: '#2D7BA4' },
    { label: 'Agriculture, Food & Manufacturing', value: 16, color: '#3db8a8' },
    { label: 'Energy, Utilities & Infrastructure', value: 14, color: '#5bc8b8' },
    { label: 'Technology & Digital', value: 10, color: '#7ab8d8' },
    { label: 'Consumer & Services', value: 10, color: '#9acce8' },
    { label: 'Healthcare & Social Services', value: 5, color: '#b8d4e8' },
    { label: 'Transport & Logistics', value: 3, color: '#cce0f0' },
    { label: 'Defence', value: 2, color: '#ddeef8' },
  ];

  new Chart(shadow.getElementById('industryChart'), {
    type: 'doughnut',
    data: {
      labels: industries.map(d => d.label),
      datasets: [{
        data: industries.map(d => d.value),
        backgroundColor: industries.map(d => d.color),
        borderWidth: 2,
        borderColor: '#ffffff'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: '62%',
      plugins: {
        legend: { display: false },
        tooltip: { callbacks: { label: function(ctx) { return ' ' + ctx.label + ': ' + ctx.raw + '%'; } } }
      }
    }
  });

  const legend = shadow.getElementById('industryLegend');
  industries.forEach(d => {
    const item = document.createElement('div');
    item.className = 'legend-item';
    item.innerHTML = '<div class="legend-dot" style="background:' + d.color + '"></div>' + d.label + ' ' + d.value + '%';
    legend.appendChild(item);
  });
    };
    document.head.appendChild(script);
  }
}

customElements.define('cx-dashboard', CxDashboard);
