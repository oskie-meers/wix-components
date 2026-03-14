class CxFeatures extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'open' });

    shadow.innerHTML = `
<style>
@font-face { font-family: 'TTCommons'; src: url('https://cdn.jsdelivr.net/gh/oskie-meers/fonts@v1.0.0/TTCommons-DemiBold.woff2') format('woff2'); font-weight: 600; }
@font-face { font-family: 'TTCommons'; src: url('https://cdn.jsdelivr.net/gh/oskie-meers/fonts@v1.0.0/TTCommons-Medium.woff2') format('woff2'); font-weight: 500; }
@font-face { font-family: 'TTCommons'; src: url('https://cdn.jsdelivr.net/gh/oskie-meers/fonts@v1.0.0/TTCommons-Light.woff2') format('woff2'); font-weight: 300; }
*, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
:host { display: block; font-family: 'TTCommons', sans-serif; }

.features {
  max-width: 1600px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  padding: 40px 48px;
}

.feature-card {
  background: white;
  border-radius: 20px;
  padding: 36px 28px;
  box-shadow: 0 2px 16px rgba(30,58,95,0.07);
  border: 1px solid rgba(30,58,95,0.07);
  display: flex;
  flex-direction: column;
  gap: 20px;
  opacity: 0;
  transform: translateY(24px);
  animation: fadeUp 0.7s ease forwards;
}
.feature-card:nth-child(1) { animation-delay: 0.1s; }
.feature-card:nth-child(2) { animation-delay: 0.2s; }
.feature-card:nth-child(3) { animation-delay: 0.3s; }
.feature-card:nth-child(4) { animation-delay: 0.4s; }
@keyframes fadeUp { to { opacity: 1; transform: translateY(0); } }

.feature-card::before {
  content: '';
  display: block;
  height: 4px;
  border-radius: 2px;
  margin-bottom: 4px;
}
.feature-card:nth-child(1)::before { background: #1e3a5f; }
.feature-card:nth-child(2)::before { background: #3db8a8; }
.feature-card:nth-child(3)::before { background: #1e3a5f; }
.feature-card:nth-child(4)::before { background: #3db8a8; }

.icon-wrap {
  width: 56px;
  height: 56px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.feature-card:nth-child(1) .icon-wrap { background: rgba(30,58,95,0.08); }
.feature-card:nth-child(2) .icon-wrap { background: rgba(61,184,168,0.1); }
.feature-card:nth-child(3) .icon-wrap { background: rgba(30,90,138,0.08); }
.feature-card:nth-child(4) .icon-wrap { background: rgba(61,184,168,0.08); }
.icon-wrap svg { width: 26px; height: 26px; }

.feature-title {
  font-size: 15px;
  font-weight: 600;
  color: #1e3a5f;
  line-height: 1.3;
}

.feature-desc {
  font-size: 13px;
  color: #6b85a0;
  line-height: 1.7;
  flex: 1;
}

@media (max-width: 1024px) { .features { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 560px) { .features { grid-template-columns: 1fr; max-width: 520px; } }
</style>

<div class="features">

  <div class="feature-card">
    <div class="icon-wrap">
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="3" width="7" height="18" rx="1.5" fill="rgba(30,58,95,0.15)" stroke="#1e3a5f" stroke-width="1.75" stroke-linejoin="round"/>
        <rect x="14" y="3" width="7" height="18" rx="1.5" fill="rgba(30,58,95,0.15)" stroke="#1e3a5f" stroke-width="1.75" stroke-linejoin="round"/>
      </svg>
    </div>
    <div class="feature-title">Two Streams, One Audience</div>
    <div class="feature-desc">The Future CX Summit brings together two dynamic streams&mdash;Customer Contact and CX&mdash;under one event. Delegates can move freely between both streams, ensuring broad exposure for your brand while allowing you to engage with decision-makers from both disciplines.</div>
  </div>

  <div class="feature-card">
    <div class="icon-wrap">
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="9" y="1" width="6" height="11" rx="3" fill="rgba(61,184,168,0.2)" stroke="#3db8a8" stroke-width="1.75" stroke-linecap="round"/>
        <path d="M19 10V12C19 16.4183 15.866 20 12 20C8.13401 20 5 16.4183 5 12V10" stroke="#3db8a8" stroke-width="1.75" stroke-linecap="round"/>
        <line x1="12" y1="20" x2="12" y2="23" stroke="#3db8a8" stroke-width="1.75" stroke-linecap="round"/>
        <line x1="8" y1="23" x2="16" y2="23" stroke="#3db8a8" stroke-width="1.75" stroke-linecap="round"/>
      </svg>
    </div>
    <div class="feature-title">Targeted Presentations, Amplified Impact</div>
    <div class="feature-desc">Take the stage in the stream that aligns with your expertise, ensuring your message reaches the most relevant audience. Whether it&rsquo;s CX strategy or contact centre innovation, you&rsquo;ll engage decision-makers actively seeking solutions in your space.</div>
  </div>

  <div class="feature-card">
    <div class="icon-wrap">
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="9" cy="7" r="4" fill="rgba(30,90,138,0.15)" stroke="#1e5a8a" stroke-width="1.75"/>
        <circle cx="17" cy="10" r="3" fill="rgba(30,90,138,0.1)" stroke="#1e5a8a" stroke-width="1.75" opacity="0.7"/>
        <path d="M1 21C1 18.24 4.69 16 9 16C13.31 16 17 18.24 17 21" stroke="#1e5a8a" stroke-width="1.75" stroke-linecap="round"/>
        <path d="M17 16C19.76 16 22 17.34 22 19" stroke="#1e5a8a" stroke-width="1.75" stroke-linecap="round" opacity="0.6"/>
      </svg>
    </div>
    <div class="feature-title">Shared Networking, Maximum Reach</div>
    <div class="feature-desc">With a unified exhibition and networking space, you&rsquo;ll connect with professionals exploring both CX and Contact solutions. More opportunities to showcase your offerings, build relationships, and generate leads across both audiences.</div>
  </div>

  <div class="feature-card">
    <div class="icon-wrap">
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" fill="rgba(61,184,168,0.15)" stroke="#3db8a8" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
    <div class="feature-title">Interactive Roundtables, Deeper Conversations</div>
    <div class="feature-desc">Roundtable sessions create a focused setting for peer discussion, allowing you to engage directly with delegates around the operational and strategic challenges they are actively working to solve.</div>
  </div>

</div>
`;
  }
}

customElements.define('cx-features', CxFeatures);
