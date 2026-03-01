class ConferenceStats extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'open' });

    const style = document.createElement('style');
    style.textContent = `
      @font-face {
        font-family: 'TTCommons';
        src: url('https://cdn.jsdelivr.net/gh/oskie-meers/fonts@v1.0.0/TTCommons-DemiBold.woff2') format('woff2');
        font-weight: 600;
        font-style: normal;
      }
      @font-face {
        font-family: 'TTCommons';
        src: url('https://cdn.jsdelivr.net/gh/oskie-meers/fonts@v1.0.0/TTCommons-Light.woff2') format('woff2');
        font-weight: 300;
        font-style: normal;
      }

      *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
      :host { display: block; font-family: 'TTCommons', Arial, sans-serif; width: 100%; }
      .stats-section { width: 100%; background: transparent; padding: 20px 24px; }

      /* Use flexbox instead of grid — it naturally centres orphan items */
      .stats-grid {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 40px;
        max-width: 1400px;
        margin: 0 auto;
      }
      .stat-item {
        text-align: center;
        opacity: 0;
        transform: translateY(30px);
        animation: fadeInUp 0.8s ease forwards;
        /* Each item takes up 1/5 minus gaps at full width */
        flex: 0 0 calc(20% - 32px);
      }
      .stat-item:nth-child(1) { animation-delay: 0.1s; }
      .stat-item:nth-child(2) { animation-delay: 0.2s; }
      .stat-item:nth-child(3) { animation-delay: 0.3s; }
      .stat-item:nth-child(4) { animation-delay: 0.4s; }
      .stat-item:nth-child(5) { animation-delay: 0.5s; }
      @keyframes fadeInUp { to { opacity: 1; transform: translateY(0); } }

      .icon-wrapper {
        width: 80px;
        height: 80px;
        margin: 0 auto 24px;
        border-radius: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        animation: float 3s ease-in-out infinite;
      }
      .stat-item:nth-child(1) .icon-wrapper { background: linear-gradient(135deg, rgba(217,112,90,0.18) 0%, rgba(217,112,90,0.07) 100%); animation-delay: 0s; }
      .stat-item:nth-child(2) .icon-wrapper { background: linear-gradient(135deg, rgba(232,147,58,0.18) 0%, rgba(232,147,58,0.07) 100%); animation-delay: 0.5s; }
      .stat-item:nth-child(3) .icon-wrapper { background: linear-gradient(135deg, rgba(169,146,184,0.18) 0%, rgba(169,146,184,0.07) 100%); animation-delay: 1s; }
      .stat-item:nth-child(4) .icon-wrapper { background: linear-gradient(135deg, rgba(122,170,142,0.18) 0%, rgba(122,170,142,0.07) 100%); animation-delay: 1.5s; }
      .stat-item:nth-child(5) .icon-wrapper { background: linear-gradient(135deg, rgba(26,95,106,0.15) 0%, rgba(26,95,106,0.06) 100%); animation-delay: 2s; }

      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
      }

      .icon-wrapper svg { width: 40px; height: 40px; }

      .stat-number {
        font-size: 48px;
        font-weight: 300;
        letter-spacing: -1px;
        margin-bottom: 12px;
        background: linear-gradient(135deg, #2d5a5a 0%, #4a9b94 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        line-height: 1;
      }
      .stat-label {
        font-size: 16px;
        color: #6b8585;
        font-weight: 300;
        line-height: 1.5;
        max-width: 220px;
        margin: 0 auto;
      }

      /* 3-col: each item ~33% width, orphans naturally centre via justify-content: center */
      @media (max-width: 1200px) {
        .stat-item { flex: 0 0 calc(33.333% - 34px); }
        .stats-grid { gap: 50px; }
      }

      /* Scale down at 1000px, still 3-col */
      @media (max-width: 1000px) {
        .stat-item { flex: 0 0 calc(33.333% - 22px); }
        .stats-grid { gap: 32px; }
        .stat-number { font-size: 38px; }
        .icon-wrapper { width: 64px; height: 64px; }
        .icon-wrapper svg { width: 32px; height: 32px; }
        .stat-label { font-size: 14px; }
      }

      /* 2-col, orphan naturally centres */
      @media (max-width: 768px) {
        .stat-item { flex: 0 0 calc(50% - 20px); }
        .stats-grid { column-gap: 28px; row-gap: 48px; }
        .stat-number { font-size: 32px; }
        .icon-wrapper { width: 56px; height: 56px; }
        .icon-wrapper svg { width: 28px; height: 28px; }
        .stat-label { font-size: 13px; }
      }

      /* Small mobile: tighter sizing, still 2-col */
      @media (max-width: 480px) {
        .stats-section { padding: 16px; }
        .stat-item { flex: 0 0 calc(50% - 12px); }
        .stats-grid { column-gap: 20px; row-gap: 40px; }
        .stat-number { font-size: 28px; }
        .icon-wrapper { width: 48px; height: 48px; margin-bottom: 12px; }
        .icon-wrapper svg { width: 24px; height: 24px; }
        .stat-label { font-size: 12px; }
      }
    `;
    shadow.appendChild(style);

    const stats = [
      {
        target: 2000, suffix: '+', label: 'Industry Leaders',
        svg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="#d9705a" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
          <circle cx="9" cy="7" r="4" fill="rgba(217,112,90,0.2)" stroke="#d9705a" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="#d9705a" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" opacity="0.5"/>
          <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="#d9705a" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" opacity="0.5"/>
        </svg>`
      },
      {
        target: 120, suffix: '+', label: 'Expert Speakers',
        svg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="9" y="1" width="6" height="11" rx="3" fill="rgba(232,147,58,0.25)" stroke="#e8933a" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M19 10V12C19 16.4183 15.866 20 12 20C8.13401 20 5 16.4183 5 12V10" stroke="#e8933a" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
          <line x1="12" y1="20" x2="12" y2="23" stroke="#e8933a" stroke-width="1.75" stroke-linecap="round"/>
          <line x1="8" y1="23" x2="16" y2="23" stroke="#e8933a" stroke-width="1.75" stroke-linecap="round"/>
        </svg>`
      },
      {
        target: 50, suffix: '+', label: 'Solution Providers',
        svg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 21H15" stroke="#a992b8" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M12 3C8.68629 3 6 5.68629 6 9C6 11.2208 7.21441 13.1599 9 14.1973V17C9 17.5523 9.44772 18 10 18H14C14.5523 18 15 17.5523 15 17V14.1973C16.7856 13.1599 18 11.2208 18 9C18 5.68629 15.3137 3 12 3Z" fill="rgba(169,146,184,0.25)" stroke="#a992b8" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
          <line x1="9" y1="14" x2="15" y2="14" stroke="#a992b8" stroke-width="1.75" stroke-linecap="round"/>
        </svg>`
      },
      {
        target: 10, suffix: '+', label: 'Wellbeing Activities to Take Part In',
        svg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" fill="rgba(122,170,142,0.3)" stroke="#7aaa8e" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`
      },
      {
        target: 4, suffix: '', label: 'Theatres Full of Case Studies and Talks',
        svg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2V7" stroke="#1a5f6a" stroke-width="1.75" stroke-linecap="round"/>
          <path d="M7 7H17L15.5 19H8.5L7 7Z" fill="rgba(26,95,106,0.15)" stroke="#1a5f6a" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M9 7L9.8 4H14.2L15 7" stroke="#1a5f6a" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M8.5 19L7 22H17L15.5 19" stroke="#1a5f6a" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M10 12H14" stroke="#1a5f6a" stroke-width="1.75" stroke-linecap="round"/>
          <path d="M10 14.5H14" stroke="#1a5f6a" stroke-width="1.5" stroke-linecap="round" opacity="0.5"/>
        </svg>`
      }
    ];

    const section = document.createElement('section');
    section.className = 'stats-section';
    const grid = document.createElement('div');
    grid.className = 'stats-grid';

    stats.forEach(({ target, suffix, label, svg }) => {
      const item = document.createElement('div');
      item.className = 'stat-item';
      const iconWrapper = document.createElement('div');
      iconWrapper.className = 'icon-wrapper';
      iconWrapper.innerHTML = svg;
      const number = document.createElement('div');
      number.className = 'stat-number';
      number.innerHTML = `<span class="counter" data-target="${target}">0</span>${suffix}`;
      const lbl = document.createElement('div');
      lbl.className = 'stat-label';
      lbl.textContent = label;
      item.appendChild(iconWrapper);
      item.appendChild(number);
      item.appendChild(lbl);
      grid.appendChild(item);
    });

    section.appendChild(grid);
    shadow.appendChild(section);

    function animateCounter(element, target) {
      const increment = target / (2000 / 16);
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) { element.textContent = target.toLocaleString(); clearInterval(timer); }
        else { element.textContent = Math.floor(current).toLocaleString(); }
      }, 16);
    }

    function startCounters() {
      shadow.querySelectorAll('.counter').forEach((counter, index) => {
        setTimeout(() => animateCounter(counter, parseInt(counter.getAttribute('data-target'))), index * 100);
      });
    }

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) { startCounters(); observer.unobserve(entry.target); }
        });
      }, { threshold: 0.1 });
      observer.observe(this);
    } else {
      setTimeout(startCounters, 500);
    }
  }
}

customElements.define('conference-stats', ConferenceStats);
