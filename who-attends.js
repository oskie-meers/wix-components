class WhoAttends extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });

    // ─── STYLES ───────────────────────────────────────────────────────────────
    const styles = `
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
        background: transparent;
      }

      .who-attends {
        padding: 48px 0;
        background: transparent;
      }

      .columns {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 24px;
        align-items: stretch;
      }

      .column {
        background: #fff;
        border-radius: 16px;
        overflow: hidden;
        box-shadow: 0 2px 20px rgba(26,92,82,0.07);
        display: flex;
        flex-direction: column;
      }

      .col-header {
        padding: 18px 22px 16px;
        display: flex;
        align-items: center;
        gap: 10px;
        border-bottom: 1px solid rgba(0,0,0,0.05);
      }

      .col-header.teal     { background: #1a5c52; }
      .col-header.orange   { background: #e8883a; }
      .col-header.lavender { background: #9b8fc0; }

      .col-icon {
        width: 32px;
        height: 32px;
        border-radius: 8px;
        background: rgba(255,255,255,0.2);
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
      }

      .col-icon svg {
        width: 17px;
        height: 17px;
        stroke: white;
        fill: none;
        stroke-width: 2;
        stroke-linecap: round;
        stroke-linejoin: round;
      }

      .col-title {
        font-family: 'TT Commons', sans-serif;
        font-weight: 700;
        font-size: 15px;
        color: #fff;
        letter-spacing: 0.01em;
        line-height: 1.2;
      }

      .col-body {
        padding: 18px 20px 22px;
        display: flex;
        flex-direction: column;
        gap: 8px;
        flex: 1;
      }

      .tag {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 9px 14px;
        border-radius: 8px;
        font-family: 'TT Commons', sans-serif;
        font-size: 13.5px;
        font-weight: 400;
        color: #1a2e2b;
        line-height: 1.35;
        transition: background 0.18s ease, transform 0.18s ease;
        cursor: default;
      }

      .tag:hover { transform: translateX(3px); }

      .col-teal     .tag { background: #e8f4f1; }
      .col-orange   .tag { background: #fdf3eb; }
      .col-lavender .tag { background: #f0eef8; }

      .col-teal     .tag:hover { background: #d4ece7; }
      .col-orange   .tag:hover { background: #fae5d2; }
      .col-lavender .tag:hover { background: #e4e0f4; }

      .tag-dot {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        flex-shrink: 0;
      }

      .col-teal     .tag-dot { background: #1a5c52; }
      .col-orange   .tag-dot { background: #e8883a; }
      .col-lavender .tag-dot { background: #9b8fc0; }

      @media (max-width: 860px) {
        .columns { grid-template-columns: 1fr; gap: 16px; align-items: start; }
        .column { display: block; }
        .col-body { flex: none; }
      }
    `;

    // ─── DATA ─────────────────────────────────────────────────────────────────
    const COLUMNS = [
      {
        id: 'teal',
        header: 'teal',
        title: 'C-Suite Titles',
        icon: '<circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>',
        items: [
          'Chief Executive Officer (CEO)',
          'Chief Operating Officer (COO)',
          'Chief Information Officer (CIO)',
          'Chief People Officer / CHRO',
          'Chief Wellbeing Officer (CWO)',
          'Chief Medical Officer (CMO)',
          'Chief Compliance Officer (CCO)',
          'Chief Legal Officer / General Counsel',
        ]
      },
      {
        id: 'orange',
        header: 'orange',
        title: 'HR Titles',
        icon: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
        items: [
          'HR Director',
          'HR Compliance Manager',
          'Director of People & Culture',
          'Head of Human Resources',
          'Head of People & Culture',
          'Head of Workforce Strategy',
          'Head of Wellbeing',
          'People Analytics Manager',
        ]
      },
      {
        id: 'lavender',
        header: 'lavender',
        title: 'Other Key Titles',
        icon: '<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/>',
        items: [
          'General Manager',
          'EAP Manager',
          'Occupational Health Manager',
          'State & Regional Managers',
          'Wellbeing Clinician / Psychologist',
          'Frontline Manager / Senior Manager',
        ]
      },
    ];

    // ─── RENDER ───────────────────────────────────────────────────────────────
    const columnsHTML = COLUMNS.map(col => `
      <div class="column col-${col.id}">
        <div class="col-header ${col.header}">
          <div class="col-icon">
            <svg viewBox="0 0 24 24">${col.icon}</svg>
          </div>
          <span class="col-title">${col.title}</span>
        </div>
        <div class="col-body">
          ${col.items.map(item => `
            <div class="tag"><span class="tag-dot"></span>${item}</div>
          `).join('')}
        </div>
      </div>
    `).join('');

    this.shadowRoot.innerHTML = `
      <style>${styles}</style>
      <section class="who-attends">
        <div class="columns">
          ${columnsHTML}
        </div>
      </section>
    `;
  }
}

customElements.define('who-attends', WhoAttends);
