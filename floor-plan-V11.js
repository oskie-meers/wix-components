class MhwwFloorPlan extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'open' });

    shadow.innerHTML = `
<style>
:host { display:block; width:100%; height:100%; }
* { margin:0; padding:0; box-sizing:border-box; }
  html, body { width:100%; height:100%; background:#ffffff; overflow:hidden; }
@font-face { font-family:'TTCommons'; src:url('https://cdn.jsdelivr.net/gh/oskie-meers/fonts@v1.0.0/TTCommons-DemiBold.woff2') format('woff2'); font-weight:600; }
  @font-face { font-family:'TTCommons'; src:url('https://cdn.jsdelivr.net/gh/oskie-meers/fonts@v1.0.0/TTCommons-Light.woff2') format('woff2'); font-weight:300; }
  @font-face { font-family:'TTCommons'; src:url('https://cdn.jsdelivr.net/gh/oskie-meers/fonts@v1.0.0/TTCommons-Medium.woff2') format('woff2'); font-weight:500; }
  *,*::before,*::after{margin:0;padding:0;box-sizing:border-box;}
  .fp-page {
    font-family:'TTCommons',sans-serif;
    background:transparent;
    display:flex;flex-direction:column;align-items:center;justify-content:center;
    min-height:100vh;padding:24px;
  }

  .floor {
    position:relative;
    width:1300px;
    height:540px;
    background:transparent;
    border-radius:10px;
    overflow:hidden;
  }

  /* Tooltip */
  .tt {
    display:none;position:fixed;z-index:9999;
    background:#fff;border-radius:10px;padding:14px 16px;max-width:250px;
    box-shadow:0 8px 32px rgba(0,0,0,0.15);pointer-events:none;
    border-top:3px solid #1a5f6a;
  }
  .tt.on{display:block;}
  .tt h3{font-size:13px;font-weight:600;color:#1a5f6a;margin-bottom:5px;}
  .tt p{font-size:11px;font-weight:300;color:#4a6560;line-height:1.55;}
  .tt .bref{font-size:10px;font-weight:600;color:#d9705a;margin-bottom:3px;letter-spacing:.08em;}
  .tt .slogo{width:100%;min-height:40px;background:#f7f9f8;border-radius:6px;margin-bottom:8px;
    display:flex;align-items:center;justify-content:center;padding:6px;overflow:hidden;}

  .el {
    position:absolute;border-radius:5px;cursor:pointer;
    display:flex;flex-direction:column;align-items:center;justify-content:center;
    text-align:center;
    transition:filter .12s ease, box-shadow .12s ease;
  }
  .el:hover{filter:brightness(0.87);box-shadow:0 4px 14px rgba(0,0,0,0.2);z-index:50;}
  .no-hover{pointer-events:none;cursor:default;}
  .no-hover:hover{filter:none;box-shadow:none;}

  /* Booths */
  .b{background:#cdd4d1;border:1.5px solid #a8b2ae;}
  .b .n{font-size:9px;font-weight:600;color:#253330;line-height:1;}
  .b .s{font-size:6.5px;font-weight:300;color:#4a6460;margin-top:1px;}
  .b.hot{background:#c4d2ce;border:2px solid #1a5f6a;}

  /* Stage zones — icon only, no text */
  .big-ideas{background:rgba(255,232,215,0.93);border:1.5px solid rgba(232,147,58,0.2);border-radius:8px;}
  .big-ideas img{width:94%;max-width:200px;height:auto;object-fit:contain;}

  .leadership{background:rgba(215,240,222,0.93);border:1.5px solid rgba(122,170,142,0.25);border-radius:8px;}
  .leadership img{width:94%;max-width:175px;height:auto;object-fit:contain;}

  .ww-bg{background:rgba(218,213,236,0.42);border:1px solid rgba(169,146,184,0.22);border-radius:8px;}
  .ww{background:transparent;border:none;border-radius:8px;}
  .ww img{width:94%;max-width:200px;height:auto;object-fit:contain;}

  /* Teal zones */
  .teal{background:#1a5f6a;border-radius:7px;}
  .teal .zn{font-size:11px;font-weight:600;color:#fff;line-height:1.4;}
  .teal .emoji{font-size:20px;margin-bottom:4px;}

  /* Innovation */
  .innov{background:rgba(240,185,175,0.78);border:1px solid rgba(217,112,90,0.28);border-radius:7px;}
  .innov img{width:94%;max-width:100px;height:auto;object-fit:contain;}

  /* Greyed strip */
  .grey-strip{background:rgba(185,192,190,0.5);pointer-events:none;}

  /* Facility zones — icon clusters, no text */
  .facility{background:rgba(190,196,194,0.45);border-radius:6px;border:none;gap:6px;flex-wrap:wrap;padding:6px;cursor:default;}
  .facility:hover{filter:none;box-shadow:none;}

  /* Icon circle — matches the uploaded style exactly */
  .ico {
    width:36px;height:36px;border-radius:50%;
    background:#a8b0ae;
    display:flex;align-items:center;justify-content:center;
    flex-shrink:0;
  }
  .ico svg{width:20px;height:20px;fill:#fff;}

  /* Entrance label */
  .entrance-zone{background:rgba(190,196,194,0.45);border-radius:6px;cursor:default;display:flex;align-items:center;justify-content:center;}
  .entrance-zone:hover{filter:none;box-shadow:none;}
  .entrance-zone .elabel{font-size:9px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:#5a6a66;}
  .fac-label{font-size:8px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:#5a6a66;text-align:center;line-height:1.2;}
  .entrance-arrow{font-size:16px;color:#5a6a66;margin-bottom:2px;}
/* Pan/zoom viewport */
:host {
  display: block;
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}
.mhww-tt {
  display:none; position:fixed; z-index:999999; background:#fff;
  border-radius:10px; padding:14px 16px; max-width:250px;
  box-shadow:0 8px 32px rgba(0,0,0,0.15); pointer-events:none;
  border-top:3px solid #1a5f6a; font-family:'TTCommons',sans-serif;
}
.mhww-tt.on { display:block; }
.mhww-tt h3 { font-size:13px; font-weight:600; color:#1a5f6a; margin-bottom:5px; }
.mhww-tt p { font-size:11px; font-weight:300; color:#4a6560; line-height:1.55; margin:0; }
.mhww-tt .bref { font-size:10px; font-weight:600; color:#d9705a; margin-bottom:3px; letter-spacing:.08em; }
.mhww-tt .slogo { width:100%; min-height:40px; background:#f7f9f8; border-radius:6px;
  margin-bottom:8px; display:flex; align-items:center; justify-content:center;
  padding:6px; overflow:hidden; }
</style>
<div class="floor">

  <!-- Grey top strip -->
  <div class="el grey-strip no-hover" style="left:0;top:0;width:1118px;height:12px;border-radius:0;"></div>

  <!-- Grey bottom strip: PSD L=-8,T=696,W=1565,H=54 → y=501 h=39
       Elevator sits at top:463px, so strip must end before 463px.
       Strip sits at y=501 which is below elevator (463+79=542) — no overlap on left side.
       But strip extends to x=1128 which overlaps elevator left edge at 1122.
       Fix: cap strip width to 1118px leaving a 4px gap before the facility column. -->
  <div class="el grey-strip no-hover" style="left:0;top:501px;width:1118px;height:12px;border-radius:0;"></div>

  <!-- ═══ FACILITY ZONES — icon only, no popup ═══ -->

  <!-- Bathrooms: 1124,37,177,128 -->
  <div class="el facility" style="left:1124px;top:37px;width:177px;height:128px;flex-direction:column;gap:8px;">
    <div style="display:flex;gap:14px;align-items:center;justify-content:center;">
      <div class="ico"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="5" r="2.5" fill="#fff"/><rect x="10" y="8.5" width="4" height="6" rx="1" fill="#fff"/><rect x="10" y="14" width="1.8" height="5.5" rx="0.9" fill="#fff"/><rect x="12.2" y="14" width="1.8" height="5.5" rx="0.9" fill="#fff"/></svg></div>
      <div class="ico"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="5" r="2.5" fill="#fff"/><path d="M9 9 L15 9 L17 19.5 H7 Z" fill="#fff"/></svg></div>
    </div>
    <div class="fac-label">Bathrooms</div>
  </div>

  <!-- Food & Drinks: 1123,168,175,120 -->
  <div class="el facility" style="left:1123px;top:168px;width:175px;height:120px;flex-direction:column;gap:8px;">
    <div class="ico"><svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="14" rx="7" ry="4.5" stroke-width="1.8"/><path d="M5 14 Q5 7 12 7 Q19 7 19 14" stroke-width="1.8" fill="none"/><line x1="12" y1="7" x2="12" y2="4.5" stroke-width="1.8"/><circle cx="12" cy="4" r="1" fill="#fff" stroke="none"/></svg></div>
    <div class="fac-label">Food &amp; Drinks</div>
  </div>

  <!-- Escalator/Stairs/Access: 1123,289,178,85 -->
  <div class="el facility" style="left:1123px;top:289px;width:178px;height:85px;flex-direction:row;gap:8px;align-items:center;justify-content:center;padding:6px 8px;">
    <div style="display:flex;flex-direction:column;align-items:center;gap:3px;"><div class="ico"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="5.5" r="2" fill="#fff"/><path d="M5 19 L13 11 H17 C18.1 11 19 10.1 19 9 C19 7.9 18.1 7 17 7 H12.5 L4.5 15" stroke="#fff" stroke-width="1.8" stroke-linecap="round" fill="none"/><line x1="3" y1="19" x2="21" y2="19" stroke="#fff" stroke-width="1.8" stroke-linecap="round"/></svg></div><div class="fac-label">Escalator</div></div>
    <div style="display:flex;flex-direction:column;align-items:center;gap:3px;"><div class="ico"><svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><polyline points="3,21 3,16 8,16 8,12 13,12 13,8 18,8 18,4 21,4"/></svg></div><div class="fac-label">Stairs</div></div>
    <div style="display:flex;flex-direction:column;align-items:center;gap:3px;"><div class="ico"><svg viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="4" r="2"/><path d="M10 8 L10 15 L14 15 L16.5 20 L18.5 19 L15.5 13 L13 13 L13 8 Z"/><path d="M10 11 Q6 11 6 15 Q6 20 11 20 Q14 20 15 17.5 L13.2 16.8 Q12.5 18.5 11 18.5 Q7.5 18.5 7.5 15 Q7.5 12.5 10 12.5 Z"/></svg></div><div class="fac-label">Access</div></div>
  </div>

  <!-- Entrance: L=1558,T=521,W=248,H=120 → 1122,375,179,86 -->
  <div class="el entrance-zone" style="left:1122px;top:375px;width:179px;height:86px;flex-direction:column;gap:4px;">
    <img src="https://static.wixstatic.com/media/958742_d9a3be0e724c4b038623c5bbe5ff0ab1~mv2.png" alt="Entrance" style="height:44px;width:auto;object-fit:contain;">
    <div class="elabel">Entrance</div>
  </div>

  <!-- Elevator: 1122,463,132,79 -->
  <div class="el facility" style="left:1122px;top:463px;width:132px;height:79px;flex-direction:column;gap:5px;">
    <div class="ico"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="18" height="18" rx="2" stroke="#fff" stroke-width="1.8" fill="none"/><polyline points="9,10 7,7 5,10" stroke="#fff" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" fill="none"/><line x1="7" y1="7" x2="7" y2="14" stroke="#fff" stroke-width="1.6" stroke-linecap="round"/><polyline points="15,14 17,17 19,14" stroke="#fff" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" fill="none"/><line x1="17" y1="17" x2="17" y2="10" stroke="#fff" stroke-width="1.6" stroke-linecap="round"/></svg></div>
    <div class="fac-label">Elevator</div>
  </div>

  <!-- ═══ NAMED STAGE ZONES — icons only, no text ═══ -->

  <!-- Big Ideas Stage: L=75,T=21,W=292,H=325 → 54,15,210,234 -->
  <div class="el big-ideas" style="left:54px;top:15px;width:210px;height:234px;" data-tip="big-ideas">
    <img src="https://static.wixstatic.com/shapes/958742_e57e80def75348cfad45f42923c2d868.svg" alt="Big Ideas Stage">
  </div>

  <!-- Leadership Stage: L=122,T=501,W=245,H=195 → 88,361,177,141 -->
  <div class="el leadership" style="left:88px;top:361px;width:177px;height:141px;" data-tip="leadership">
    <img src="https://static.wixstatic.com/shapes/958742_20b9c25552d64d1fa34aca6c8ee6d82b.svg" alt="Leadership Stage">
  </div>

  <!-- What Works bg: L=846,T=17,W=315,H=243 → 610,12,227,175 -->
  <div class="el ww-bg no-hover" style="left:610px;top:12px;width:227px;height:175px;"></div>
  <!-- What Works overlay -->
  <div class="el ww" style="left:610px;top:12px;width:227px;height:175px;" data-tip="what-works">
    <img src="https://static.wixstatic.com/shapes/958742_596f19e8330a4002965e8d0b6c1847e4.svg" alt="What Works Stage">
  </div>

  <!-- Speaker Lounge: L=1204,T=32,W=195,H=98 → 867,23,141,71 -->
  <div class="el teal" style="left:867px;top:23px;width:141px;height:71px;" data-tip="speaker">
    <div class="emoji">🎙️</div>
    <div class="zn">Speaker Lounge</div>
  </div>

  <!-- Wellbeing & Network Zone: L=601,T=119,W=199,H=148 → 433,86,143,107 -->
  <div class="el teal" style="left:433px;top:86px;width:143px;height:107px;" data-tip="wellbeing">
    <div class="emoji">🌿</div>
    <div class="zn">Wellbeing &amp;<br>Network Zone</div>
  </div>

  <!-- Puppy Area: L=569,T=501,W=133,H=101 → 410,361,96,73 -->
  <div class="el teal" style="left:410px;top:361px;width:96px;height:73px;" data-tip="puppy">
    <div class="emoji">🐶</div>
    <div class="zn">Puppy<br>Zone</div>
  </div>

  <!-- Innovation Stage: L=883,T=549,W=149,H=147 → 636,396,107,106 -->
  <div class="el innov" style="left:636px;top:396px;width:107px;height:106px;" data-tip="innovation">
    <img src="https://static.wixstatic.com/shapes/958742_f93b0301e32e42918f5ca6b119700ca5.svg" alt="Innovation Stage">
  </div>

  <!-- ═══ BOOTHS — exact PSD layer coordinates × 0.7202 ═══ -->

  <!-- TOP ROW: 52,53  T=21 → 15px -->
  <div class="el b" style="left:308px;top:15px;width:36px;height:37px;" data-tip="booth" data-num="52" data-size="3×3"><div class="n">52</div><div class="s">3×3</div></div>
  <div class="el b" style="left:344px;top:15px;width:36px;height:37px;" data-tip="booth" data-num="53" data-size="3×3"><div class="n">53</div><div class="s">3×3</div></div>
  <!-- 54,55,56,57  L=604,653,702,751 -->
  <div class="el b" style="left:435px;top:15px;width:36px;height:37px;" data-tip="booth" data-num="54" data-size="3×3"><div class="n">54</div><div class="s">3×3</div></div>
  <div class="el b" style="left:470px;top:15px;width:36px;height:37px;" data-tip="booth" data-num="55" data-size="3×3"><div class="n">55</div><div class="s">3×3</div></div>
  <div class="el b" style="left:506px;top:15px;width:36px;height:37px;" data-tip="booth" data-num="56" data-size="3×3"><div class="n">56</div><div class="s">3×3</div></div>
  <div class="el b" style="left:541px;top:15px;width:36px;height:37px;" data-tip="booth" data-num="57" data-size="3×3"><div class="n">57</div><div class="s">3×3</div></div>

  <!-- ROW 2: 51,50  T=117 → 84px -->
  <div class="el b" style="left:308px;top:84px;width:36px;height:37px;" data-tip="booth" data-num="51" data-size="3×3"><div class="n">51</div><div class="s">3×3</div></div>
  <div class="el b" style="left:344px;top:84px;width:36px;height:37px;" data-tip="booth" data-num="50" data-size="3×3"><div class="n">50</div><div class="s">3×3</div></div>

  <!-- ROW 3: 48,49  T=167 → 120px -->
  <div class="el b" style="left:308px;top:120px;width:36px;height:37px;" data-tip="booth" data-num="48" data-size="3×3"><div class="n">48</div><div class="s">3×3</div></div>
  <div class="el b" style="left:344px;top:120px;width:36px;height:37px;" data-tip="booth" data-num="49" data-size="3×3"><div class="n">49</div><div class="s">3×3</div></div>

  <!-- Booths 4,3  L=1300,1349  T=165 → 119px -->
  <div class="el b" style="left:937px;top:119px;width:36px;height:37px;" data-tip="booth" data-num="4" data-size="3×3"><div class="n">4</div><div class="s">3×3</div></div>
  <div class="el b" style="left:972px;top:119px;width:36px;height:37px;" data-tip="booth" data-num="3" data-size="3×3"><div class="n">3</div><div class="s">3×3</div></div>

  <!-- 47,46  L=428,477  T=261 → 188px  H=101 → 73px (3×6) -->
  <div class="el b" style="left:308px;top:188px;width:37px;height:73px;" data-tip="booth" data-num="47" data-size="3×6"><div class="n">47</div><div class="s">3×6</div></div>
  <div class="el b" style="left:344px;top:188px;width:37px;height:73px;" data-tip="booth" data-num="46" data-size="3×6"><div class="n">46</div><div class="s">3×6</div></div>

  <!-- Booth 2  L=1254,T=261,W=99,H=195 → 903,188,71,141 (6×12) -->
  <div class="el b" style="left:903px;top:188px;width:71px;height:141px;" data-tip="booth-2" data-num="2" data-size="6×12"><div class="n">2</div><div class="s">6×12</div></div>

  <!-- MID ROW TOP: 45,44,21,20  T=309 → 223px -->
  <div class="el b" style="left:435px;top:223px;width:36px;height:37px;" data-tip="booth-45" data-num="45" data-size="3×3"><div class="n">45</div><div class="s">3×3</div></div>
  <div class="el b" style="left:470px;top:223px;width:36px;height:37px;" data-tip="booth" data-num="44" data-size="3×3"><div class="n">44</div><div class="s">3×3</div></div>
  <div class="el b" style="left:539px;top:223px;width:36px;height:37px;" data-tip="booth" data-num="21" data-size="3×3"><div class="n">21</div><div class="s">3×3</div></div>
  <div class="el b" style="left:574px;top:223px;width:36px;height:37px;" data-tip="booth" data-num="20" data-size="3×3"><div class="n">20</div><div class="s">3×3</div></div>

  <!-- 19  L=892,T=309,W=51,H=101 → 643,223,37,73 (3×6) -->
  <div class="el b" style="left:643px;top:223px;width:37px;height:73px;" data-tip="booth" data-num="19" data-size="3×6"><div class="n">19</div><div class="s">3×6</div></div>
  <!-- 18  L=941,T=309 → 678,223 -->
  <div class="el b" style="left:678px;top:223px;width:36px;height:37px;" data-tip="booth" data-num="18" data-size="3×3"><div class="n">18</div><div class="s">3×3</div></div>

  <!-- 6  L=1059,T=309,W=102,H=51 → 763,223,73,37 (6×3) -->
  <div class="el b" style="left:763px;top:223px;width:73px;height:37px;" data-tip="booth" data-num="6" data-size="6×3"><div class="n">6</div><div class="s">6×3</div></div>
  <!-- 5  L=1159,T=308,W=50,H=100 → 835,222,36,72 (3×6) -->
  <div class="el b" style="left:835px;top:222px;width:36px;height:72px;" data-tip="booth" data-num="5" data-size="3×6"><div class="n">5</div><div class="s">3×6</div></div>

  <!-- MID ROW BOTTOM: 42,43,22,23  T=359 → 259px -->
  <div class="el b" style="left:435px;top:259px;width:36px;height:37px;" data-tip="booth" data-num="42" data-size="3×3"><div class="n">42</div><div class="s">3×3</div></div>
  <div class="el b" style="left:470px;top:259px;width:36px;height:37px;" data-tip="booth" data-num="43" data-size="3×3"><div class="n">43</div><div class="s">3×3</div></div>
  <div class="el b" style="left:539px;top:259px;width:36px;height:37px;" data-tip="booth" data-num="22" data-size="3×3"><div class="n">22</div><div class="s">3×3</div></div>
  <div class="el b" style="left:574px;top:259px;width:36px;height:37px;" data-tip="booth" data-num="23" data-size="3×3"><div class="n">23</div><div class="s">3×3</div></div>
  <!-- 17  L=941,T=359 → 678,259 -->
  <div class="el b" style="left:678px;top:259px;width:36px;height:37px;" data-tip="booth" data-num="17" data-size="3×3"><div class="n">17</div><div class="s">3×3</div></div>
  <!-- 7  L=1059,T=358,W=102,H=51 → 763,258,73,37 (6×3) -->
  <div class="el b" style="left:763px;top:258px;width:73px;height:37px;" data-tip="booth" data-num="7" data-size="6×3"><div class="n">7</div><div class="s">6×3</div></div>

  <!-- 40,41  T=405 → 292px -->
  <div class="el b" style="left:308px;top:292px;width:36px;height:37px;" data-tip="booth" data-num="40" data-size="3×3"><div class="n">40</div><div class="s">3×3</div></div>
  <div class="el b" style="left:344px;top:292px;width:36px;height:37px;" data-tip="booth" data-num="41" data-size="3×3"><div class="n">41</div><div class="s">3×3</div></div>

  <!-- 16  L=892,T=453,W=102,H=51 → 643,326,73,37 (6×3) -->
  <div class="el b" style="left:643px;top:326px;width:73px;height:37px;" data-tip="booth" data-num="16" data-size="6×3"><div class="n">16</div><div class="s">6×3</div></div>

  <!-- 39,38  T=501 → 361px -->
  <div class="el b" style="left:308px;top:361px;width:36px;height:37px;" data-tip="booth" data-num="39" data-size="3×3"><div class="n">39</div><div class="s">3×3</div></div>
  <div class="el b" style="left:344px;top:361px;width:36px;height:37px;" data-tip="booth" data-num="38" data-size="3×3"><div class="n">38</div><div class="s">3×3</div></div>
  <!-- 25,24  L=748,797  T=501 → 361px -->
  <div class="el b" style="left:539px;top:361px;width:36px;height:37px;" data-tip="booth" data-num="25" data-size="3×3"><div class="n">25</div><div class="s">3×3</div></div>
  <div class="el b" style="left:574px;top:361px;width:36px;height:37px;" data-tip="booth" data-num="24" data-size="3×3"><div class="n">24</div><div class="s">3×3</div></div>
  <!-- 10,9  L=1060,1109  T=501 → 361px -->
  <div class="el b" style="left:764px;top:361px;width:36px;height:37px;" data-tip="booth" data-num="10" data-size="3×3"><div class="n">10</div><div class="s">3×3</div></div>
  <div class="el b" style="left:799px;top:361px;width:36px;height:37px;" data-tip="booth" data-num="9" data-size="3×3"><div class="n">9</div><div class="s">3×3</div></div>
  <!-- 8  L=1158,T=501,W=50,H=101 → 834,361,36,73 (3×6) -->
  <div class="el b" style="left:834px;top:361px;width:36px;height:73px;" data-tip="booth" data-num="8" data-size="3×6"><div class="n">8</div><div class="s">3×6</div></div>

  <!-- 37,36  T=551 → 397px -->
  <div class="el b" style="left:308px;top:397px;width:36px;height:37px;" data-tip="booth" data-num="37" data-size="3×3"><div class="n">37</div><div class="s">3×3</div></div>
  <div class="el b" style="left:344px;top:397px;width:36px;height:37px;" data-tip="booth" data-num="36" data-size="3×3"><div class="n">36</div><div class="s">3×3</div></div>
  <!-- 26,27  T=551 → 397px -->
  <div class="el b" style="left:539px;top:397px;width:36px;height:37px;" data-tip="booth" data-num="26" data-size="3×3"><div class="n">26</div><div class="s">3×3</div></div>
  <div class="el b" style="left:574px;top:397px;width:36px;height:37px;" data-tip="booth" data-num="27" data-size="3×3"><div class="n">27</div><div class="s">3×3</div></div>
  <!-- 11,12  T=551 → 397px -->
  <div class="el b" style="left:764px;top:397px;width:36px;height:37px;" data-tip="booth" data-num="11" data-size="3×3"><div class="n">11</div><div class="s">3×3</div></div>
  <div class="el b" style="left:799px;top:397px;width:36px;height:37px;" data-tip="booth" data-num="12" data-size="3×3"><div class="n">12</div><div class="s">3×3</div></div>

  <!-- Booth 1  L=1254,T=501,W=99,H=195 → 903,361,71,141 (6×12) -->
  <div class="el b" style="left:903px;top:361px;width:71px;height:141px;" data-tip="booth" data-num="1" data-size="6×12"><div class="n">1</div><div class="s">6×12</div></div>

  <!-- BOTTOM ROW  T=645 → 465px -->
  <div class="el b" style="left:308px;top:465px;width:36px;height:37px;" data-tip="booth" data-num="35" data-size="3×3"><div class="n">35</div><div class="s">3×3</div></div>
  <div class="el b" style="left:344px;top:465px;width:36px;height:37px;" data-tip="booth" data-num="34" data-size="3×3"><div class="n">34</div><div class="s">3×3</div></div>
  <div class="el b" style="left:379px;top:465px;width:36px;height:37px;" data-tip="booth" data-num="33" data-size="3×3"><div class="n">33</div><div class="s">3×3</div></div>
  <div class="el b" style="left:414px;top:465px;width:36px;height:37px;" data-tip="booth" data-num="32" data-size="3×3"><div class="n">32</div><div class="s">3×3</div></div>
  <div class="el b" style="left:470px;top:465px;width:36px;height:37px;" data-tip="booth" data-num="31" data-size="3×3"><div class="n">31</div><div class="s">3×3</div></div>
  <div class="el b" style="left:505px;top:465px;width:36px;height:37px;" data-tip="booth" data-num="30" data-size="3×3"><div class="n">30</div><div class="s">3×3</div></div>
  <div class="el b" style="left:540px;top:465px;width:36px;height:37px;" data-tip="booth" data-num="29" data-size="3×3"><div class="n">29</div><div class="s">3×3</div></div>
  <div class="el b" style="left:575px;top:465px;width:36px;height:37px;" data-tip="booth" data-num="28" data-size="3×3"><div class="n">28</div><div class="s">3×3</div></div>
  <div class="el b" style="left:764px;top:465px;width:36px;height:37px;" data-tip="booth" data-num="15" data-size="3×3"><div class="n">15</div><div class="s">3×3</div></div>
  <div class="el b" style="left:799px;top:465px;width:36px;height:37px;" data-tip="booth" data-num="14" data-size="3×3"><div class="n">14</div><div class="s">3×3</div></div>
  <div class="el b" style="left:834px;top:465px;width:36px;height:37px;" data-tip="booth" data-num="13" data-size="3×3"><div class="n">13</div><div class="s">3×3</div></div>

</div><!-- .floor -->
`;

    // Inject tooltip onto document.body (escapes shadow DOM, fixed positioning works fine in Wix iframe)
    let tt = document.getElementById('mhww-tt');
    if (!tt) {
      const ttStyle = document.createElement('style');
      ttStyle.textContent = [
        '.mhww-tt{display:none;position:fixed;z-index:999999;background:#fff;',
        'border-radius:10px;padding:14px 16px;max-width:250px;',
        'box-shadow:0 8px 32px rgba(0,0,0,0.15);pointer-events:none;',
        'border-top:3px solid #1a5f6a;font-family:sans-serif;}',
        '.mhww-tt.on{display:block;}',
        '.mhww-tt h3{font-size:13px;font-weight:600;color:#1a5f6a;margin-bottom:5px;}',
        '.mhww-tt p{font-size:11px;font-weight:300;color:#4a6560;line-height:1.55;margin:0;}',
        '.mhww-tt .bref{font-size:10px;font-weight:600;color:#d9705a;margin-bottom:3px;letter-spacing:.08em;}',
        '.mhww-tt .slogo{width:100%;min-height:40px;background:#f7f9f8;border-radius:6px;',
        'margin-bottom:8px;display:flex;align-items:center;justify-content:center;padding:6px;overflow:hidden;}'
      ].join('');
      document.head.appendChild(ttStyle);
      tt = document.createElement('div');
      tt.id = 'mhww-tt';
      tt.className = 'mhww-tt';
      document.body.appendChild(tt);
    }

    var isDragging = false;

    var tips = {
      'big-ideas':  {title:'Big Ideas Stage', body:'Our largest theatre covering the major topics affecting the sector — technology, legal and regulatory requirements, and the benefits and value of positive mental health policies.'},
      'what-works': {title:'What Works Stage', body:'Our deep dive theatre, featuring a host of case studies and panel discussions to help you understand what really works for other businesses.'},
      'leadership': {title:'Leadership Stage', body:'This theatre splits its themes during the event. Deep diving into the role of senior leadership on day 1, while focussing on the unique challenges of the public sector on day 2.'},
      'innovation': {title:'Innovation Stage', body:'See demos, talks and conversations for products and services that have helped other organisations.'},
      'puppy':      {title:'&#x1F436; Puppy Zone', body:'Have the chance to meet and interact with beautiful therapy dogs and puppies — guaranteed to improve your mental health and create incredible memories.'},
      'wellbeing':  {title:'&#x1F33F; Wellbeing & Networking Zone', body:'A quiet spot in the centre of the floor for attendees to relax and sit down for a break from the packed event schedule.'},
      'speaker':    {title:'&#x1F399; Speaker Lounge', body:'A dedicated space for speakers to network, collaborate and unwind. A comfortable, curated space designed to facilitate meaningful conversations beyond the stage.'},
      'booth-45':   {type:'generic'},
      'booth-2':    {type:'generic'},
      'booth':      {type:'generic'}
    };
    function mv(e) {
      var p=14, tw=tt.offsetWidth, th=tt.offsetHeight;
      var x=e.clientX+p, y=e.clientY+p;
      if (x+tw > window.innerWidth-p)  x = e.clientX-tw-p;
      if (y+th > window.innerHeight-p) y = e.clientY-th-p;
      tt.style.left = x+'px'; tt.style.top = y+'px';
    }
    shadow.querySelectorAll('[data-tip]').forEach(function(el) {
      el.addEventListener('mouseenter', function(e) {
        if (isDragging) return;
        var d = tips[el.dataset.tip]; if (!d) return;
        if (d.type === 'generic')    tt.innerHTML = '<div class="bref">Booth ' + el.dataset.num + ' — ' + el.dataset.size + '</div><p>Booth available.</p>';
        else if (d.type === 'booth') tt.innerHTML = '<div class="bref">Booth ' + d.num + ' — ' + d.size + '</div><div class="slogo"><img src="' + d.logoUrl + '" alt="' + d.sponsor + '" style="max-width:100%;max-height:100%;object-fit:contain;"></div><p>' + d.body + '</p>';
        else                         tt.innerHTML = '<h3>' + d.title + '</h3><p>' + d.body + '</p>';
        tt.className = 'mhww-tt on'; mv(e);
      });
      el.addEventListener('mousemove', function(e) { if (!isDragging) mv(e); });
      el.addEventListener('mouseleave', function() { tt.className = 'mhww-tt'; });
    });
    document.addEventListener('click', function(e) {
      if (!e.composedPath().some(function(n) { return n === vpOuter; })) tt.className = 'mhww-tt';
    });
  }
}

customElements.define('mhww-floor-plan', MhwwFloorPlan);
