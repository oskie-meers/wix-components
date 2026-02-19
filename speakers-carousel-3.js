class SpeakersCarousel extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });

    // ─── SPEAKER DATA ─────────────────────────────────────────────────────────
    // To add/update speakers: edit the SPEAKERS array below.
    const SPEAKERS = [
      { name: "Georgie Harman", title: "Chief Executive Officer", org: "Beyond Blue", headshot: "https://static.wixstatic.com/media/958742_62201240abd44b988b6f70dc86537466~mv2.jpg", logo: "https://static.wixstatic.com/shapes/958742_585f8fdb16c84682b43fbcfa8c4779d0.svg" },
      { name: "Hon Emma McBride MP", title: "Assistant Minister for Mental Health and Suicide Prevention & Assistant Minister for Rural and Regional Health", org: "Australian Government", headshot: "https://static.wixstatic.com/media/958742_7a6d8bca51c94a97819ff93213ac79b6~mv2.jpg", logo: "https://static.wixstatic.com/media/958742_0f2315895e6b4a8e81a718ba2a3c565d~mv2.png" },
      { name: "Dr. Clinton Schultz", title: "Director", org: "Black Dog Institute", headshot: "https://static.wixstatic.com/media/958742_5852029d04264c3fa30fc984eacae411~mv2.jpg", logo: "https://static.wixstatic.com/media/958742_d6985347e0ce4a06af18d2318e9b3c8d~mv2.jpg" },
      { name: "Luke Fleming", title: "Chief People Officer", org: "International Convention Centre Sydney", headshot: "https://static.wixstatic.com/media/958742_9f11b965e35149acb5a29ae9013d671c~mv2.jpg", logo: "https://static.wixstatic.com/shapes/958742_f1a8227ea5934c41b60d37d85c26e7e0.svg" },
      { name: "Benjamin Morris", title: "Group General Manager, HR Culture & Capability", org: "Mirvac", headshot: "https://static.wixstatic.com/media/958742_e17ba10ea46d49edbd1ce1e24a725502~mv2.jpg", logo: "https://static.wixstatic.com/media/958742_7c7960e7e8774c6e8409f5b4e3dc9d99~mv2.png" },
      { name: "Lauren Pendergast", title: "Leadership & Competence Leader", org: "IKEA", headshot: "https://static.wixstatic.com/media/958742_71b6383d1333434ca4a42d11deda8f68~mv2.jpg", logo: "https://static.wixstatic.com/media/958742_025810db47a94097bc1354245498c298~mv2.jpg" },
      { name: "Shruti Ganeriwala", title: "Chief HR Officer", org: "Unilever ANZ & APAC", headshot: "https://static.wixstatic.com/media/958742_d1865a3bf1cf4029998fb9107efda6aa~mv2.jpg", logo: "https://static.wixstatic.com/media/958742_31a58a3ef9ef4cd49a41bc950ebb2bcf~mv2.png" },
      { name: "Grace Molloy", title: "Founder and Chief Executive Officer", org: "Menopause Friendly Australia", headshot: "https://static.wixstatic.com/media/958742_0be5aa36aefb49868cc6a733a55b097b~mv2.jpg", logo: "https://static.wixstatic.com/shapes/958742_094796058d7c472bae0f806eb0cfdd5e.svg" },
      { name: "Charlotte Anderson", title: "Head of People Experience", org: "Canva", headshot: "https://static.wixstatic.com/media/958742_b6552e76ee3c4c07bda5ae28729454a2~mv2.jpg", logo: "https://static.wixstatic.com/media/958742_24cde603c0894764947fb0b9153941fb~mv2.png" },
      { name: "Darren Fewster", title: "Executive Director Wellbeing & Employee Services, People, Culture & Communications", org: "Telstra", headshot: "https://static.wixstatic.com/media/958742_3413e4bd8b944e2e99084c4551f39d53~mv2.jpg", logo: "https://static.wixstatic.com/shapes/958742_ffb8b85eab454e8c98aed11b606d48e4.svg" },
      { name: "Nick Farhan", title: "Director People, Culture & Talent", org: "Infrastructure Australia", headshot: "https://static.wixstatic.com/media/958742_e7d7c6a79b094cb590b1319be86d4509~mv2.jpg", logo: "https://static.wixstatic.com/media/958742_055200332caa4613bf58b235d44a7bbe~mv2.jpg" },
      { name: "Greg Newman", title: "Principal People Analytics Partner", org: "Rio Tinto", headshot: "https://static.wixstatic.com/media/958742_e899f518edfc4778aea65040c7bb526b~mv2.jpg", logo: "https://static.wixstatic.com/media/958742_62513c5dda8a4a01938c56441c70c1a3~mv2.png" },
      { name: "Melanie Barrett", title: "Senior People Analytics Specialist", org: "Nestle", headshot: "https://static.wixstatic.com/media/958742_bcbde503d1b64fa7b98a131b3b0130a5~mv2.jpg", logo: "https://static.wixstatic.com/media/958742_20f7d9a461bf4c97b1b404e87b3b6046~mv2.png" },
      { name: "Jess Fox", title: "3 x Olympic Gold Medallist", org: "", headshot: "https://static.wixstatic.com/media/958742_685c0cee4ab14282a31790b0882e6601~mv2.jpg", logo: "" },
      { name: "Simone Clarke", title: "Chief Executive Officer", org: "UN Women Australia", headshot: "https://static.wixstatic.com/media/958742_db6667f91ec749fab21c99c2a002ca60~mv2.webp", logo: "https://static.wixstatic.com/media/958742_f18b96e39ab049f9b38b04ac9ea65fc5~mv2.jpg" },
      { name: "Ryan Baker", title: "Chief Operating Officer", org: "Bunnings", headshot: "https://static.wixstatic.com/media/958742_be1b785855a84d55a48ef3a286d4099e~mv2.jpg", logo: "https://static.wixstatic.com/media/958742_b0d056ecc1b4469a8aef135cf8b41a3b~mv2.png" },
      { name: "Jessica Farrell", title: "Vice President Innovation", org: "BHP", headshot: "https://static.wixstatic.com/media/958742_c87805f9b6cb4183ac118d707380325f~mv2.jpg", logo: "https://static.wixstatic.com/media/958742_787e2a75c1054524b3d739176b9cfa1a~mv2.png" },
      { name: "Catherine Hunter", title: "Chief Executive Officer", org: "Diversity Council Australia", headshot: "https://static.wixstatic.com/media/958742_4af5d1588eb0429a9fe8d29a602a3b90~mv2.jpg", logo: "https://static.wixstatic.com/media/958742_1366cad51e01464d9e8ca4a0a1b6e35b~mv2.jpg" },
      { name: "Andrew Yates", title: "Chief Executive Officer", org: "KPMG Australia", headshot: "https://static.wixstatic.com/media/958742_3089ecb61d5a473dba342fa327e33a25~mv2.jpg", logo: "https://static.wixstatic.com/media/958742_6ebac5aacdc24badb7981e94cecbd0f2~mv2.png" },
      { name: "Tanja Hirvonen", title: "Chief Executive Officer", org: "Thirilli", headshot: "https://static.wixstatic.com/media/958742_21f3d3b1e3ae4cd8858aaba2d2752032~mv2.jpg", logo: "https://static.wixstatic.com/media/958742_bf5c8c02e2624b99aa6d783d6e8e27cc~mv2.png" },
      { name: "Phillipa Thomas", title: "Chief Executive Officer", org: "Mental Health Victoria", headshot: "https://static.wixstatic.com/media/958742_f99cde3c0c5c410ea0556995d183af0a~mv2.jpg", logo: "https://static.wixstatic.com/media/958742_339e72934f7946c2bbef66aaef7722b3~mv2.jpg" },
      { name: "Tara J Lal", title: "Emergency Services Lived Experience & Strategic Engagement Lead", org: "Black Dog Institute", headshot: "https://static.wixstatic.com/media/958742_a4431032c27c4be8ae68c4c28c9fbc2b~mv2.jpg", logo: "https://static.wixstatic.com/media/958742_d6985347e0ce4a06af18d2318e9b3c8d~mv2.jpg" },
      { name: "Lucy Poole", title: "Deputy Chief Executive Officer, Strategy, Planning and Performance", org: "Digital Transformation Agency", headshot: "https://static.wixstatic.com/media/958742_0ccf615b4dc7409a8a4436cc7f506c0c~mv2.png", logo: "https://static.wixstatic.com/media/958742_9e687c4a59024dc28cd5456d2186d732~mv2.jpg" },
      { name: "Peter Elkhuizen", title: "Learning and Development Manager", org: "Starbucks", headshot: "https://static.wixstatic.com/media/958742_a8ee7ce7458a481a812fd4cfd96a8ea0~mv2.jpg", logo: "https://static.wixstatic.com/media/958742_170911c4f395421c917d01007f3a6138~mv2.png" },
      { name: "Anne Cavalieros", title: "General Manager, Performance, Reward and People Technology", org: "nbn", headshot: "https://static.wixstatic.com/media/958742_4d835bcf658742ddbab011830aeeca51~mv2.jpg", logo: "https://static.wixstatic.com/media/958742_9f1e01cbaa8b41219f41e0f1ce6acf85~mv2.png" },
    ];

    // ─── STYLES ───────────────────────────────────────────────────────────────
    const styles = `
      @font-face { font-family: 'TT Commons'; src: url('https://cdn.jsdelivr.net/gh/oskie-meers/fonts@v1.0.0/TTCommons-Thin.woff2') format('woff2'); font-weight: 100; }
      @font-face { font-family: 'TT Commons'; src: url('https://cdn.jsdelivr.net/gh/oskie-meers/fonts@v1.0.0/TTCommons-ExtraLight.woff2') format('woff2'); font-weight: 200; }
      @font-face { font-family: 'TT Commons'; src: url('https://cdn.jsdelivr.net/gh/oskie-meers/fonts@v1.0.0/TTCommons-Light.woff2') format('woff2'); font-weight: 300; }
      @font-face { font-family: 'TT Commons'; src: url('https://cdn.jsdelivr.net/gh/oskiego-meers/fonts@v1.0.0/TTCommons-Regular.woff2') format('woff2'); font-weight: 400; }
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
        padding: 40px 0 48px;
        background: transparent;
      }

      .carousel-wrapper {
        overflow: hidden;
        padding: 8px 12px;
        margin: 0 -12px;
      }

      .carousel-track {
        display: flex;
        gap: 24px;
        transition: transform 0.65s cubic-bezier(0.4, 0, 0.2, 1);
        will-change: transform;
      }

      .speaker-card {
        flex: 0 0 calc((100% - 96px) / 5);
        min-width: 0;
        background: #ffffff;
        border-radius: 14px;
        overflow: hidden;
        transition: transform 0.28s ease, box-shadow 0.28s ease;
        box-shadow: 0 2px 16px rgba(26,92,82,0.08);
        cursor: default;
      }

      .speaker-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 32px rgba(26,92,82,0.13);
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
        color: #1a5c52;
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
        padding: 14px 16px 18px;
        background: #ffffff;
      }

      .card-name {
        font-family: 'TT Commons', sans-serif;
        font-weight: 600;
        font-size: 16px;
        color: #1a2e2b;
        margin-bottom: 4px;
        line-height: 1.3;
        white-space: normal;
        word-wrap: break-word;
      }

      .card-title {
        font-family: 'TT Commons', sans-serif;
        font-size: 13px;
        font-weight: 500;
        color: #e8883a;
        line-height: 1.4;
        margin-bottom: 3px;
        white-space: normal;
        word-wrap: break-word;
      }

      .card-org {
        font-family: 'TT Commons', sans-serif;
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
        transition: background 0.2s ease, color 0.2s ease;
        padding: 0;
        outline: none;
      }

      .carousel-btn:hover {
        background: #1a5c52;
        color: white;
      }

      .carousel-btn svg {
        display: block;
        flex-shrink: 0;
        stroke: currentColor;
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
        .speaker-card { flex: 0 0 calc((100% - 72px) / 4); }
      }
      @media (max-width: 860px) {
        .speaker-card { flex: 0 0 calc((100% - 48px) / 3); }
      }
      @media (max-width: 580px) {
        .speaker-card { flex: 0 0 calc((100% - 24px) / 2); }
        .speakers-section { padding: 30px 0 40px; }
      }
    `;

    // ─── TEMPLATE ─────────────────────────────────────────────────────────────
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

    SPEAKERS.forEach(s => {
      const card = document.createElement('div');
      card.className = 'speaker-card';

      const imageContent = s.headshot
        ? `<img class="headshot" src="${s.headshot}" alt="${s.name}" loading="lazy">`
        : `<div class="avatar-placeholder" style="color:${s.color||'#1a5c52'};background:${s.bg||'#e8f0ee'};">${s.initials||''}</div>`;

      const logoContent = s.logo
        ? `<img src="${s.logo}" alt="${s.org} logo">`
        : (s.org ? `<span class="logo-text-fallback">${s.org.substring(0,8)}</span>` : '');

      const logoBadge = (s.logo || s.org)
        ? `<div class="card-logo-badge">${logoContent}</div>`
        : '';

      card.innerHTML = `
        <div class="card-image-wrap">
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

    for (let i = 0; i < PAGES; i++) {
      const dot = document.createElement('div');
      dot.className = 'dot' + (i === 0 ? ' active' : '');
      dot.addEventListener('click', () => { goTo(i); resetAuto(); });
      dotsWrap.appendChild(dot);
    }

    function getCardWidth() {
      const card = track.children[0];
      return card ? card.offsetWidth + 24 : 0;
    }

    function goTo(page) {
      currentPage = ((page % PAGES) + PAGES) % PAGES;
      track.style.transform = `translateX(-${currentPage * VISIBLE * getCardWidth()}px)`;
      root.querySelectorAll('.dot').forEach((d, i) => d.classList.toggle('active', i === currentPage));
    }

    root.getElementById('prevBtn').addEventListener('click', () => { goTo(currentPage - 1); resetAuto(); });
    root.getElementById('nextBtn').addEventListener('click', () => { goTo(currentPage + 1); resetAuto(); });

    function startAuto() { autoTimer = setInterval(() => goTo(currentPage + 1), 7000); }
    function resetAuto() { clearInterval(autoTimer); startAuto(); }

    startAuto();
  }
}

customElements.define('speakers-carousel', SpeakersCarousel);
