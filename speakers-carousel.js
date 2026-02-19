class SpeakersCarousel extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });

    // ─── SPEAKER DATA ─────────────────────────────────────────────────────────
    // To add/update speakers: edit the SPEAKERS array below.
    // headshot & logo are optional — use initials + color + bg as fallback.
    const SPEAKERS = [
      {
        name: "Georgie Harman",
        title: "Chief Executive Officer",
        org: "Beyond Blue",
        headshot: "https://static.wixstatic.com/media/958742_62201240abd44b988b6f70dc86537466~mv2.jpg",
        logo: "https://static.wixstatic.com/media/958742_00250bb8eee244a581be677915f276b7~mv2.png",
      },
      {
        name: "Hon Emma McBride MP",
        title: "Assistant Minister for Mental Health & Suicide Prevention",
        org: "Australian Government",
        headshot: "https://static.wixstatic.com/media/958742_7a6d8bca51c94a97819ff93213ac79b6~mv2.jpg",
        logo: "https://static.wixstatic.com/media/958742_b79a7069ffd6485cb30d711b7dc6d21b~mv2.png",
      },
      {
        name: "Dr. Clinton Schultz",
        title: "Director",
        org: "Black Dog Institute",
        headshot: "https://static.wixstatic.com/media/958742_5852029d04264c3fa30fc984eacae411~mv2.jpg",
        logo: "https://static.wixstatic.com/media/958742_5aaf8f18e0824dc5b609a69f780ae04b~mv2.webp",
      },
      {
        name: "Luke Fleming",
        title: "Chief People Officer",
        org: "ICC Sydney",
        headshot: "https://static.wixstatic.com/media/958742_9f11b965e35149acb5a29ae9013d671c~mv2.jpg",
        logo: "https://static.wixstatic.com/media/958742_1bf57f84a2a34c69bfc9c73c5ea98233~mv2.png",
      },
      {
        name: "Benjamin Morris",
        title: "Group General Manager, HR Culture & Capability",
        org: "Mirvac",
        headshot: "https://static.wixstatic.com/media/958742_e17ba10ea46d49edbd1ce1e24a725502~mv2.jpg",
        logo: "https://static.wixstatic.com/media/958742_edf8c53cd02a464888ba2e5ccf1866b6~mv2.png",
      },
      { name: "Lauren Pendergast",       title: "Leadership & Competence Leader",              org: "IKEA",                        initials: "LP", color: "#3a6ab5", bg: "#e8eef8" },
      { name: "Shruti Ganeriwala",       title: "Chief HR Officer",                            org: "Unilever ANZ & APAC",         initials: "SG", color: "#2a7a6e", bg: "#e8f4f2" },
      { name: "Grace Molloy",            title: "Founder & CEO",                               org: "Menopause Friendly Australia", initials: "GM", color: "#9b4fc0", bg: "#f2e8f8" },
      { name: "Charlotte Anderson",      title: "Head of People Experience",                   org: "Canva",                       initials: "CA", color: "#c06a2e", bg: "#faf0e6" },
      { name: "Darren Fewster",          title: "Executive Director Wellbeing",                org: "Telstra",                     initials: "DF", color: "#1a5c52", bg: "#e6f0ee" },
      { name: "Nick Farhan",             title: "Director People, Culture & Talent",           org: "Infrastructure Australia",    initials: "NF", color: "#7a6eb5", bg: "#eeedf5" },
      { name: "Greg Newman",             title: "Principal People Analytics Partner",          org: "Rio Tinto",                   initials: "GN", color: "#b54040", bg: "#f5e8e8" },
      { name: "Melanie Barrett",         title: "Senior People Analytics Specialist",          org: "Nestle",                      initials: "MB", color: "#3a8a56", bg: "#e8f4ec" },
      { name: "Jess Fox",                title: "3× Olympic Gold Medallist",                   org: "",                            initials: "JF", color: "#c0503a", bg: "#f8ece8" },
      { name: "Simone Clarke",           title: "Chief Executive Officer",                     org: "UN Women Australia",          initials: "SC", color: "#2a5ab5", bg: "#e8edf5" },
      { name: "Ryan Baker",              title: "Chief Operating Officer",                     org: "Bunnings",                    initials: "RB", color: "#2a7a3e", bg: "#e8f4ec" },
      { name: "Jessica Farrell",         title: "Vice President Innovation",                   org: "BHP",                         initials: "JF", color: "#7a4a2e", bg: "#f5ece6" },
      { name: "Catherine Hunter",        title: "Chief Executive Officer",                     org: "Diversity Council Australia", initials: "CH", color: "#9b8fc0", bg: "#f0edf8" },
      { name: "Andrew Yates",            title: "Chief Executive Officer",                     org: "KPMG Australia",              initials: "AY", color: "#9b6fc0", bg: "#f2eef8" },
      { name: "Tanja Hirvonen",          title: "Chief Executive Officer",                     org: "Thirilli",                    initials: "TH", color: "#3a6ab5", bg: "#e8eef8" },
      { name: "Phillipa Thomas",         title: "Chief Executive Officer",                     org: "Mental Health Victoria",      initials: "PT", color: "#c0404a", bg: "#f8e8ea" },
      { name: "Tara J Lal",              title: "Emergency Services Lived Experience Lead",    org: "Black Dog Institute",         initials: "TL", color: "#1a5c52", bg: "#e6f0ee" },
      { name: "Prof. Marcia Langton AO", title: "Associate Provost",                           org: "University of Melbourne",     initials: "ML", color: "#2a7a6e", bg: "#e8f4f2" },
      { name: "Lucy Poole",              title: "Deputy Chief Executive Officer",              org: "Digital Transformation Agency", initials: "LP", color: "#5a3ab5", bg: "#ece8f5" },
      { name: "Mason Gismondi",          title: "Head of Culture & Psychosocial Safety",       org: "Bupa Asia Pacific",           initials: "MG", color: "#2a5ab5", bg: "#e8edf5" },
    ];

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

      .speakers-section {
        padding: 40px 48px 48px;
        background: transparent;
      }

      .carousel-wrapper {
        overflow: hidden;
      }

      .carousel-track {
        display: flex;
        gap: 18px;
        transition: transform 0.65s cubic-bezier(0.4, 0, 0.2, 1);
        will-change: transform;
      }

      .speaker-card {
        flex: 0 0 calc((100% - 72px) / 5);
        min-width: 0;
        background: transparent;
        border-radius: 14px;
        overflow: hidden;
        transition: transform 0.28s ease;
        cursor: default;
      }

      .speaker-card:hover {
        transform: translateY(-5px);
      }

      .card-image-wrap {
        position: relative;
        aspect-ratio: 1 / 1;
        overflow: hidden;
        background: #e8f0ee;
      }

      .card-image-wrap img.headshot {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: top center;
        display: block;
      }

      .avatar-placeholder {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: 'TT Commons', sans-serif;
        font-weight: 800;
        font-size: clamp(24px, 2.5vw, 36px);
        letter-spacing: -1px;
      }

      .card-logo-badge {
        position: absolute;
        bottom: 8px;
        right: 8px;
        width: 54px;
        height: 54px;
        background: white;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 2px 10px rgba(0,0,0,0.15);
        padding: 6px;
      }

      .card-logo-badge img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        display: block;
      }

      .logo-text-fallback {
        font-family: 'TT Commons', sans-serif;
        font-size: 8px;
        font-weight: 800;
        color: #1a5c52;
        text-align: center;
        line-height: 1.2;
      }

      .card-body {
        padding: 12px 4px 16px;
        background: transparent;
      }

      .card-name {
        font-weight: 600;
        font-size: 16px;
        color: #1a2e2b;
        margin-bottom: 4px;
        line-height: 1.3;
        white-space: normal;
        word-wrap: break-word;
      }

      .card-title {
        font-size: 13px;
        font-weight: 500;
        color: #e8883a;
        line-height: 1.4;
        margin-bottom: 3px;
        white-space: normal;
        word-wrap: break-word;
      }

      .card-org {
        font-size: 13px;
        font-weight: 400;
        color: #4a6461;
        white-space: normal;
        word-wrap: break-word;
      }

      .carousel-controls {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 18px;
        margin-top: 32px;
      }

      .carousel-btn {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: 1.5px solid #1a5c52;
        background: transparent;
        color: #1a5c52;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.2s ease;
      }

      .carousel-btn:hover {
        background: #1a5c52;
        color: white;
      }

      .carousel-btn svg {
        display: block;
      }

      .carousel-dots {
        display: flex;
        gap: 7px;
        align-items: center;
      }

      .dot {
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background: rgba(26,92,82,0.2);
        cursor: pointer;
        transition: all 0.3s ease;
      }

      .dot.active {
        width: 22px;
        border-radius: 4px;
        background: #1a5c52;
      }

      @media (max-width: 1100px) {
        .speaker-card { flex: 0 0 calc((100% - 54px) / 4); }
      }
      @media (max-width: 860px) {
        .speaker-card { flex: 0 0 calc((100% - 36px) / 3); }
      }
      @media (max-width: 580px) {
        .speaker-card { flex: 0 0 calc((100% - 18px) / 2); }
        .speakers-section { padding: 30px 20px 40px; }
      }
    `;

    // ─── HTML TEMPLATE ────────────────────────────────────────────────────────
    this.shadowRoot.innerHTML = `
      <style>${styles}</style>
      <section class="speakers-section">
        <div class="carousel-wrapper">
          <div class="carousel-track" id="carouselTrack"></div>
        </div>
        <div class="carousel-controls">
          <button class="carousel-btn" id="prevBtn" aria-label="Previous">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
          </button>
          <div class="carousel-dots" id="dots"></div>
          <button class="carousel-btn" id="nextBtn" aria-label="Next">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </button>
        </div>
      </section>
    `;

    // ─── CAROUSEL LOGIC ───────────────────────────────────────────────────────
    const root      = this.shadowRoot;
    const track     = root.getElementById('carouselTrack');
    const dotsWrap  = root.getElementById('dots');
    const VISIBLE   = 5;
    const PAGES     = Math.ceil(SPEAKERS.length / VISIBLE);
    let currentPage = 0;
    let autoTimer;

    // Build cards
    SPEAKERS.forEach(s => {
      const card = document.createElement('div');
      card.className = 'speaker-card';

      const imageContent = s.headshot
        ? `<img class="headshot" src="${s.headshot}" alt="${s.name}" loading="lazy">`
        : `<div class="avatar-placeholder" style="color:${s.color};background:${s.bg};">${s.initials}</div>`;

      const logoContent = s.logo
        ? `<img src="${s.logo}" alt="${s.org} logo">`
        : (s.org ? `<span class="logo-text-fallback">${s.org.substring(0, 8)}</span>` : '');

      const logoBadge = (s.logo || s.org)
        ? `<div class="card-logo-badge">${logoContent}</div>`
        : '';

      const bgStyle = s.headshot ? '' : `style="background:${s.bg};"`;

      card.innerHTML = `
        <div class="card-image-wrap" ${bgStyle}>
          ${imageContent}
          ${logoBadge}
        </div>
        <div class="card-body">
          <div class="card-name">${s.name}</div>
          <div class="card-title">${s.title}</div>
          ${s.org ? `<div class="card-org">${s.org}</div>` : ''}
        </div>
      `;
      track.appendChild(card);
    });

    // Build dots
    for (let i = 0; i < PAGES; i++) {
      const dot = document.createElement('div');
      dot.className = 'dot' + (i === 0 ? ' active' : '');
      dot.addEventListener('click', () => { goTo(i); resetAuto(); });
      dotsWrap.appendChild(dot);
    }

    function getCardWidth() {
      const card = track.children[0];
      return card ? card.offsetWidth + 18 : 0;
    }

    function goTo(page) {
      currentPage = ((page % PAGES) + PAGES) % PAGES;
      track.style.transform = `translateX(-${currentPage * VISIBLE * getCardWidth()}px)`;
      root.querySelectorAll('.dot').forEach((d, i) => d.classList.toggle('active', i === currentPage));
    }

    root.getElementById('prevBtn').addEventListener('click', () => { goTo(currentPage - 1); resetAuto(); });
    root.getElementById('nextBtn').addEventListener('click', () => { goTo(currentPage + 1); resetAuto(); });

    function startAuto() { autoTimer = setInterval(() => goTo(currentPage + 1), 4500); }
    function resetAuto() { clearInterval(autoTimer); startAuto(); }

    startAuto();
  }
}

customElements.define('speakers-carousel', SpeakersCarousel);
