class CxOrganisations extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'open' });

    shadow.innerHTML = `
<style>
@font-face { font-family: 'TTCommons'; src: url('https://cdn.jsdelivr.net/gh/oskie-meers/fonts@v1.0.0/TTCommons-DemiBold.woff2') format('woff2'); font-weight: 600; }
  @font-face { font-family: 'TTCommons'; src: url('https://cdn.jsdelivr.net/gh/oskie-meers/fonts@v1.0.0/TTCommons-Medium.woff2') format('woff2'); font-weight: 500; }
  @font-face { font-family: 'TTCommons'; src: url('https://cdn.jsdelivr.net/gh/oskie-meers/fonts@v1.0.0/TTCommons-Light.woff2') format('woff2'); font-weight: 300; }
  *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
  :host { font-family: 'TTCommons', sans-serif; background: #F0F0F0; padding: 48px; color: #1e3a5f; }

  .orgs { max-width: 1600px; margin: 0 auto; }

  /* ── SIZE STATS ── */
  .size-row { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-bottom: 32px; }
  .size-card { background: white; border-radius: 14px; padding: 28px 32px; display: flex; flex-direction: column; gap: 8px; }
  .size-pct { font-size: 48px; font-weight: 600; color: #1e3a5f; line-height: 1; }
  .size-label { font-size: 16px; font-weight: 600; color: #1e3a5f; }
  .size-sub { font-size: 13px; color: #8fa5be; font-weight: 300; }
  .size-bar { height: 4px; border-radius: 2px; margin-top: 8px; }

  /* ── ORG CLOUD ── */
  .org-card { background: white; border: 1px solid rgba(30,58,95,0.08); border-radius: 16px; padding: 32px; position: relative; overflow: hidden; }
  .org-card-title { font-size: 13px; font-weight: 600; color: #6b85a0; margin-bottom: 24px; }

  .org-cloud { columns: 3; column-gap: 0; position: relative; max-height: 300px; overflow: hidden; }

  .org-item { font-size: 15px; font-weight: 300; color: #4a6585; padding: 9px 0; border-bottom: 1px solid rgba(30,58,95,0.07); break-inside: avoid; display: block; }
  .org-item.featured { font-weight: 600; color: #1e3a5f; }
  .org-item.featured-blue { font-weight: 600; color: #2D7BA4; }

  /* Fade overlay */
  .org-fade { position: absolute; bottom: 0; left: 0; right: 0; height: 160px; background: linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.85) 60%, rgba(255,255,255,1) 100%); pointer-events: none; }


  @media (max-width: 768px) { .org-cloud { columns: 2; } }
  @media (max-width: 480px) { .org-cloud { columns: 1; } }

  /* Toggle link */
  .org-toggle { margin-top: 20px; display: inline-flex; align-items: center; gap: 6px; font-size: 14px; font-weight: 600; color: #2D7BA4; cursor: pointer; text-decoration: none; border: none; background: none; padding: 0; font-family: 'TTCommons', sans-serif; }
  .org-toggle svg { width: 16px; height: 16px; transition: transform 0.3s; }
  .org-toggle.open svg { transform: rotate(180deg); }

  @media (max-width: 768px) { .size-row { grid-template-columns: 1fr; } :host { padding: 24px 20px; } .size-pct { font-size: 36px; } }
  @media (max-width: 480px) { .size-row { grid-template-columns: 1fr; } .org-pill { font-size: 13px; padding: 6px 12px; } }
</style>
<div class="orgs">

  <!-- SIZE STATS -->
  <div class="size-row">
    <div class="size-card">
      <div class="size-pct">52%</div>
      <div class="size-label">Large Organisations</div>
      <div class="size-sub">1,000+ employees</div>
      <div class="size-bar" style="background:#1e3a5f;width:52%"></div>
    </div>
    <div class="size-card">
      <div class="size-pct">31%</div>
      <div class="size-label">Medium Organisations</div>
      <div class="size-sub">100–999 employees</div>
      <div class="size-bar" style="background:#2D7BA4;width:31%"></div>
    </div>
    <div class="size-card">
      <div class="size-pct">17%</div>
      <div class="size-label">Small Organisations</div>
      <div class="size-sub">1–99 employees</div>
      <div class="size-bar" style="background:#3db8a8;width:17%"></div>
    </div>
  </div>

  <!-- ORG CLOUD -->
  <div class="org-card">
    <div class="org-card-title">Organisations in the Room</div>
    <div class="org-cloud">
      <span class="org-item">Spark</span>
      <span class="org-item">Westpac</span>
      <span class="org-item">Kiwibank</span>
      <span class="org-item">Fonterra</span>
      <span class="org-item">Auckland Airport</span>
      <span class="org-item">Xero</span>
      <span class="org-item">Flybuys</span>
      <span class="org-item">NZ Post</span>
      <span class="org-item">AA Insurance</span>
      <span class="org-item">AIA</span>
      <span class="org-item">AMP</span>
      <span class="org-item">Access Community Health</span>
      <span class="org-item">Accessit Software</span>
      <span class="org-item">Alsco</span>
      <span class="org-item">Atlantis Healthcare</span>
      <span class="org-item">Auckland Council</span>
      <span class="org-item">Auckland Transport</span>
      <span class="org-item">BNZ</span>
      <span class="org-item">Bayleys</span>
      <span class="org-item">Blue Star Taxis</span>
      <span class="org-item">Booster</span>
      <span class="org-item">Brother</span>
      <span class="org-item">CCNNZ</span>
      <span class="org-item">ChargeNet</span>
      <span class="org-item">Colenso BBDO</span>
      <span class="org-item">Contact Energy</span>
      <span class="org-item">Countdown</span>
      <span class="org-item">Datacom</span>
      <span class="org-item">Department of Conservation</span>
      <span class="org-item">Digital Island</span>
      <span class="org-item">Downer</span>
      <span class="org-item">Ebbett Group</span>
      <span class="org-item">Endeavour Consumer Health</span>
      <span class="org-item">EnviroNZ</span>
      <span class="org-item">FCB</span>
      <span class="org-item">Fisher Funds</span>
      <span class="org-item">Foodstuffs</span>
      <span class="org-item">Fujitsu</span>
      <span class="org-item">Genesis Energy</span>
      <span class="org-item">Genless</span>
      <span class="org-item">Gentrack</span>
      <span class="org-item">Go Sweet Spot</span>
      <span class="org-item">Green Acres</span>
      <span class="org-item">Heartland Bank</span>
      <span class="org-item">House of Travel</span>
      <span class="org-item">HSBC</span>
      <span class="org-item">IAG</span>
      <span class="org-item">Inland Revenue</span>
      <span class="org-item">Insurance &amp; Financial Services Ombudsman</span>
      <span class="org-item">Kiwi Property</span>
      <span class="org-item">KiwiRail</span>
      <span class="org-item">LUMO Digital Outdoor</span>
      <span class="org-item">Lion</span>
      <span class="org-item">Mainfreight</span>
      <span class="org-item">Manawanui</span>
      <span class="org-item">Maritime NZ</span>
      <span class="org-item">Mars</span>
      <span class="org-item">Mercury Energy</span>
      <span class="org-item">Metlifecare</span>
      <span class="org-item">Ministry for Primary Industries</span>
      <span class="org-item">Mitre 10</span>
      <span class="org-item">Motor Trade Association</span>
      <span class="org-item">NIB</span>
      <span class="org-item">NZME</span>
      <span class="org-item">NZ Rugby</span>
      <span class="org-item">NZ Super Fund</span>
      <span class="org-item">NZ Trade &amp; Enterprise</span>
      <span class="org-item">Nova Energy</span>
      <span class="org-item">Ogilvy</span>
      <span class="org-item">One NZ</span>
      <span class="org-item">Open Country Dairy</span>
      <span class="org-item">Orbit World Travel</span>
      <span class="org-item">Orion</span>
      <span class="org-item">Otago Polytechnic</span>
      <span class="org-item">Panasonic</span>
      <span class="org-item">Paymark</span>
      <span class="org-item">Placemakers</span>
      <span class="org-item">Port of Tauranga</span>
      <span class="org-item">Powerco</span>
      <span class="org-item">Public Trust</span>
      <span class="org-item">Rabobank</span>
      <span class="org-item">Ray White</span>
      <span class="org-item">Ryman Healthcare</span>
      <span class="org-item">Sky</span>
      <span class="org-item">SkyCity</span>
      <span class="org-item">Southern Cross</span>
      <span class="org-item">Statistics NZ</span>
      <span class="org-item">Stewart Dawsons</span>
      <span class="org-item">St John</span>
      <span class="org-item">Stuff</span>
      <span class="org-item">Summerset</span>
      <span class="org-item">Super Retail Group</span>
      <span class="org-item">TSB Bank</span>
      <span class="org-item">The Co-operative Bank</span>
      <span class="org-item">The Warehouse Group</span>
      <span class="org-item">Toyota</span>
      <span class="org-item">Transpower</span>
      <span class="org-item">Travelport</span>
      <span class="org-item">University of Auckland</span>
      <span class="org-item">Vocus</span>
      <span class="org-item">Watercare</span>
      <span class="org-item">Webjet</span>
      <span class="org-item">Whakarongorau Aotearoa</span>
      <span class="org-item">Wh&#257;nau &#256;whina Plunket</span>
      <span class="org-item">Woolworths</span>
      <span class="org-item">Z Energy</span>
      <span class="org-item">Zip Co</span>
      <div class="org-fade" id="orgFade"></div>
    </div>

    <a class="org-toggle" href="https://futurecxsummit.aventedge.com/prospectus" target="_blank">
      View all organisations
      <svg viewBox="0 0 24 24" fill="none" stroke="#2D7BA4" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="9 18 15 12 9 6"/>
      </svg>
    </a>
  </div>

</div>
`;
  }
}

customElements.define('cx-organisations', CxOrganisations);
