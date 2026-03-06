// Inline the component directly so we don't need CDN
    class CxConferenceStats extends HTMLElement {
      connectedCallback() {
        const shadow = this.attachShadow({ mode: 'open' });

        const style = document.createElement('style');
        style.textContent = `
          *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
          :host { display: block; font-family: Arial, sans-serif; width: 100%; }
          .stats-section { width: 100%; background: transparent; padding: 20px 24px; }
          .stats-grid { display: flex; flex-wrap: wrap; justify-content: center; gap: 40px; max-width: 1400px; margin: 0 auto; }
          .stat-item { text-align: center; opacity: 0; transform: translateY(30px); animation: fadeInUp 0.8s ease forwards; flex: 0 0 calc(20% - 32px); }
          .stat-item:nth-child(1) { animation-delay: 0.1s; }
          .stat-item:nth-child(2) { animation-delay: 0.2s; }
          .stat-item:nth-child(3) { animation-delay: 0.3s; }
          .stat-item:nth-child(4) { animation-delay: 0.4s; }
          .stat-item:nth-child(5) { animation-delay: 0.5s; }
          @keyframes fadeInUp { to { opacity: 1; transform: translateY(0); } }
          .icon-wrapper { width: 80px; height: 80px; margin: 0 auto 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; animation: float 3s ease-in-out infinite; background: #1e2d4a; }
          .stat-item:nth-child(1) .icon-wrapper { animation-delay: 0s; background: rgba(61,184,168,0.15); }
          .stat-item:nth-child(2) .icon-wrapper { animation-delay: 0.5s; background: rgba(30,58,95,0.12); }
          .stat-item:nth-child(3) .icon-wrapper { animation-delay: 1s; background: rgba(61,184,168,0.15); }
          .stat-item:nth-child(4) .icon-wrapper { animation-delay: 1.5s; background: rgba(30,58,95,0.12); }
          .stat-item:nth-child(5) .icon-wrapper { animation-delay: 2s; background: rgba(61,184,168,0.15); }
          @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }
          .icon-wrapper svg { width: 36px; height: 36px; }
          .stat-number { font-size: 48px; font-weight: 700; letter-spacing: -1px; margin-bottom: 12px; background: linear-gradient(135deg, #1e3a5f 0%, #3db8a8 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; line-height: 1; }
          .stat-label { font-size: 15px; color: #4a6585; font-weight: 400; line-height: 1.5; max-width: 180px; margin: 0 auto; }
          @media (max-width: 1000px) { .stat-item { flex: 0 0 calc(33.333% - 22px); } .stats-grid { gap: 32px; } .stat-number { font-size: 38px; } .icon-wrapper { width: 64px; height: 64px; } }
          @media (max-width: 768px) { .stat-item { flex: 0 0 calc(50% - 20px); } .stat-number { font-size: 32px; } }
          @media (max-width: 480px) { .stat-item { flex: 0 0 calc(50% - 12px); } .stat-number { font-size: 28px; } }
        `;
        shadow.appendChild(style);

        const stats = [
          { target: 250, suffix: '+', label: 'CX & Customer Service Leaders', svg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="#3db8a8" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/><circle cx="9" cy="7" r="4" fill="rgba(61,184,168,0.2)" stroke="#3db8a8" stroke-width="1.75"/><path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="#3db8a8" stroke-width="1.75" stroke-linecap="round" opacity="0.5"/><path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="#3db8a8" stroke-width="1.75" stroke-linecap="round" opacity="0.5"/></svg>` },
          { target: 45, suffix: '+', label: 'Expert Speakers', svg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="9" y="1" width="6" height="11" rx="3" fill="rgba(30,58,95,0.2)" stroke="#1e3a5f" stroke-width="1.75" stroke-linecap="round"/><path d="M19 10V12C19 16.4183 15.866 20 12 20C8.13401 20 5 16.4183 5 12V10" stroke="#1e3a5f" stroke-width="1.75" stroke-linecap="round"/><line x1="12" y1="20" x2="12" y2="23" stroke="#1e3a5f" stroke-width="1.75" stroke-linecap="round"/><line x1="8" y1="23" x2="16" y2="23" stroke="#1e3a5f" stroke-width="1.75" stroke-linecap="round"/></svg>` },
          { target: 12, suffix: '', label: 'Breakout Zones', svg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="8" height="8" rx="1.5" fill="rgba(61,184,168,0.2)" stroke="#3db8a8" stroke-width="1.75"/><rect x="13" y="3" width="8" height="8" rx="1.5" fill="rgba(61,184,168,0.2)" stroke="#3db8a8" stroke-width="1.75"/><rect x="3" y="13" width="8" height="8" rx="1.5" fill="rgba(61,184,168,0.2)" stroke="#3db8a8" stroke-width="1.75"/><rect x="13" y="13" width="8" height="8" rx="1.5" fill="rgba(61,184,168,0.2)" stroke="#3db8a8" stroke-width="1.75"/></svg>` },
          { target: 2, suffix: '', label: 'Streams', svg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="7" height="18" rx="1" fill="rgba(30,58,95,0.2)" stroke="#1e3a5f" stroke-width="1.75" stroke-linejoin="round"/><rect x="14" y="3" width="7" height="18" rx="1" fill="rgba(30,58,95,0.2)" stroke="#1e3a5f" stroke-width="1.75" stroke-linejoin="round"/></svg>` },
          { target: 1, suffix: '', label: 'Showcase Area', svg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" fill="rgba(61,184,168,0.2)" stroke="#3db8a8" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/></svg>` }
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

        function animateCounter(el, target) {
          const inc = target / (2000 / 16);
          let cur = 0;
          const t = setInterval(() => {
            cur += inc;
            if (cur >= target) { el.textContent = target.toLocaleString(); clearInterval(t); }
            else { el.textContent = Math.floor(cur).toLocaleString(); }
          }, 16);
        }

        function startCounters() {
          shadow.querySelectorAll('.counter').forEach((c, i) => {
            setTimeout(() => animateCounter(c, parseInt(c.getAttribute('data-target'))), i * 100);
          });
        }

        if ('IntersectionObserver' in window) {
          const obs = new IntersectionObserver((entries) => {
            entries.forEach(e => { if (e.isIntersecting) { startCounters(); obs.unobserve(e.target); } });
          }, { threshold: 0.1 });
          obs.observe(this);
        } else {
          setTimeout(startCounters, 500);
        }
      }
    }
    customElements.define('cx-conference-stats', CxConferenceStats);