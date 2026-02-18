class MhwwFloorPlan extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'open' });

    shadow.innerHTML = `
<style>
:host { display:block; width:100%; height:100%; }
* { margin:0; padding:0; box-sizing:border-box; }
  html, body { width:100%; height:100%; background:#d2d9d6; overflow:hidden; }
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
  .big-ideas img{width:75%;max-width:140px;height:auto;object-fit:contain;}

  .leadership{background:rgba(215,240,222,0.93);border:1.5px solid rgba(122,170,142,0.25);border-radius:8px;}
  .leadership img{width:75%;max-width:120px;height:auto;object-fit:contain;}

  .ww-bg{background:rgba(218,213,236,0.42);border:1px solid rgba(169,146,184,0.22);border-radius:8px;}
  .ww{background:transparent;border:none;border-radius:8px;}
  .ww img{width:75%;max-width:130px;height:auto;object-fit:contain;}

  /* Teal zones */
  .teal{background:#1a5f6a;border-radius:7px;}
  .teal .zn{font-size:11px;font-weight:600;color:#fff;line-height:1.4;}
  .teal .emoji{font-size:20px;margin-bottom:4px;}

  /* Innovation */
  .innov{background:rgba(240,185,175,0.78);border:1px solid rgba(217,112,90,0.28);border-radius:7px;}
  .innov img{width:52%;max-width:70px;height:auto;object-fit:contain;}

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
  .entrance-zone{background:rgba(190,196,194,0.45);border-radius:6px;cursor:default;}
  .entrance-zone:hover{filter:none;box-shadow:none;}
  .entrance-zone .elabel{font-size:9px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:#5a6a66;}
  .entrance-arrow{font-size:16px;color:#5a6a66;margin-bottom:2px;}
/* Pan/zoom viewport */
:host {
  display: block;
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}
.vp-outer {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  background: transparent;
  cursor: grab;
  user-select: none;
  -webkit-user-select: none;
}
.vp-outer.dragging { cursor: grabbing; }
.vp-inner {
  position: absolute;
  top: 0; left: 0;
  transform-origin: 0 0;
  will-change: transform;
  width: 1300px;
  height: 540px;
}
/* Controls UI */
.fp-controls {
  position: absolute;
  bottom: 14px;
  right: 14px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  z-index: 100;
}
.fp-btn {
  width: 36px; height: 36px;
  border-radius: 8px;
  border: none;
  background: rgba(255,255,255,0.92);
  box-shadow: 0 2px 8px rgba(0,0,0,0.18);
  font-size: 18px;
  line-height: 1;
  cursor: pointer;
  display: flex; align-items: center; justify-content: center;
  color: #1a5f6a;
  transition: background .12s;
}
.fp-btn:hover { background: #fff; box-shadow: 0 3px 12px rgba(0,0,0,0.22); }
.fp-btn:active { transform: scale(0.94); }
/* Minimap */
.fp-minimap {
  position: absolute;
  bottom: 14px;
  left: 14px;
  width: 160px;
  height: 67px;
  background: rgba(255,255,255,0.82);
  border-radius: 7px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.15);
  overflow: hidden;
  z-index: 100;
  cursor: pointer;
}
.fp-minimap-floor {
  width: 100%;
  height: 100%;
  background: #edf0ee;
  position: relative;
  transform-origin: 0 0;
}
/* Minimap viewport indicator */
.fp-minimap-vp {
  position: absolute;
  border: 2px solid #1a5f6a;
  background: rgba(26,95,106,0.12);
  border-radius: 3px;
  pointer-events: none;
}
/* Zoom hint shown at start on mobile */
.fp-hint {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0,0,0,0.55);
  color: #fff;
  padding: 10px 18px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 500;
  pointer-events: none;
  opacity: 0;
  transition: opacity .3s;
  white-space: nowrap;
  z-index: 200;
  letter-spacing: 0.04em;
}
.fp-hint.show { opacity: 1; }
.vp-outer {
  width:100%; height:100vh; overflow:hidden; position:relative;
  background:transparent; cursor:grab; user-select:none; -webkit-user-select:none;
}
.vp-outer.dragging { cursor:grabbing; }
.vp-inner {
  position:absolute; top:0; left:0; transform-origin:0 0;
  will-change:transform; width:1300px; height:540px;
}
.fp-controls {
  position:fixed; bottom:20px; right:20px;
  display:flex; flex-direction:column; gap:6px; z-index:100;
}
.fp-btn {
  width:40px; height:40px; border-radius:10px; border:none;
  background:rgba(255,255,255,0.93); box-shadow:0 2px 10px rgba(0,0,0,0.18);
  font-size:20px; cursor:pointer; display:flex; align-items:center;
  justify-content:center; color:#1a5f6a; transition:background .12s;
}
.fp-btn:hover { background:#fff; box-shadow:0 3px 14px rgba(0,0,0,0.22); }
.fp-btn:active { transform:scale(0.93); }
.fp-minimap {
  position:fixed; bottom:20px; left:20px; width:160px; height:67px;
  background:rgba(255,255,255,0.85); border-radius:8px;
  box-shadow:0 2px 10px rgba(0,0,0,0.15); overflow:hidden; z-index:100; cursor:pointer;
}
.fp-minimap-floor { width:100%; height:100%; position:relative; }
.fp-minimap-vp {
  position:absolute; border:2px solid #1a5f6a;
  background:rgba(26,95,106,0.12); border-radius:3px; pointer-events:none;
}
.fp-hint {
  position:fixed; top:50%; left:50%; transform:translate(-50%,-50%);
  background:rgba(0,0,0,0.55); color:#fff; padding:10px 18px;
  border-radius:20px; font-size:13px; font-weight:500; pointer-events:none;
  opacity:0; transition:opacity .3s; white-space:nowrap; z-index:200;
  letter-spacing:0.04em; font-family:'TTCommons',sans-serif;
}
.fp-hint.show { opacity:1; }
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
<div class="vp-outer" id="vp-outer">
  <div class="vp-inner" id="vp-inner">
<div class="floor">

  <!-- Grey bottom strip: PSD L=-8,T=696,W=1565,H=54 → y=501 h=39
       Elevator sits at top:463px, so strip must end before 463px.
       Strip sits at y=501 which is below elevator (463+79=542) — no overlap on left side.
       But strip extends to x=1128 which overlaps elevator left edge at 1122.
       Fix: cap strip width to 1118px leaving a 4px gap before the facility column. -->
  <div class="el grey-strip no-hover" style="left:0;top:501px;width:1118px;height:39px;border-radius:0;"></div>

  <!-- ═══ FACILITY ZONES — icon only, no popup ═══ -->

  <!-- Bathrooms: L=1560,T=52,W=245,H=178 → 1124,37,177,128 -->
  <div class="el facility" style="left:1124px;top:37px;width:177px;height:128px;">
    <!-- Bathroom icon: man + woman silhouettes -->
    <div class="ico">
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <!-- man -->
        <circle cx="7" cy="4" r="2"/>
        <path d="M5 8h4l1 5H9l-.5 6h-3L5 13H4L3 8h4z"/>
        <!-- woman -->
        <circle cx="17" cy="4" r="2"/>
        <path d="M13 8h8l-1.5 4h-1l-.5 3h-2l-.5-3h-1z"/>
        <path d="M14.5 15h5l.5 5h-6z"/>
      </svg>
    </div>
  </div>

  <!-- Food & Drinks: L=1559,T=233,W=243,H=167 → 1123,168,175,120 -->
  <div class="el facility" style="left:1123px;top:168px;width:175px;height:120px;">
    <div class="ico">
      <!-- Fork & knife icon -->
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M11 2v6c0 1.7-1.3 3-3 3v11H6V11C4.3 11 3 9.7 3 8V2h2v5h2V2h2v5h2V2h2zm4 0h2c1.1 0 2 .9 2 2v7h-2v11h-2V2z"/>
      </svg>
    </div>
  </div>

  <!-- Escalator/Stairs/Access: L=1559,T=401,W=247,H=118 → 1123,289,178,85 -->
  <div class="el facility" style="left:1123px;top:289px;width:178px;height:85px;flex-direction:row;justify-content:center;gap:8px;">
    <!-- Escalator -->
    <div class="ico">
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <circle cx="17" cy="4" r="2"/>
        <path d="M3 18l11-11h5a2 2 0 0 0 0-4h-6L2 14"/>
        <path d="M3 18h18v2H3z"/>
        <circle cx="6" cy="15" r="1.5"/>
      </svg>
    </div>
    <!-- Stairs -->
    <div class="ico">
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="4" r="2"/>
        <path d="M12 8l3-2 1 3-4 2H8v3H4v3H2v2h5v-3h4v-3h4v-3l2-1-1-3z"/>
      </svg>
    </div>
    <!-- Accessibility -->
    <div class="ico">
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="4" r="2"/>
        <path d="M10 7h4l1 4h4v2h-5l-1-3-1 5 3 3v5h-2l-2-4-2 4H7v-5l3-3-1-5-3 1-.5-2z"/>
      </svg>
    </div>
  </div>

  <!-- Entrance: L=1558,T=521,W=248,H=120 → 1122,375,179,86 -->
  <div class="el entrance-zone" style="left:1122px;top:375px;width:179px;height:86px;">
    <div class="entrance-arrow">◀</div>
    <div class="elabel">Entrance</div>
  </div>

  <!-- Elevator: L=1558,T=642,W=183,H=109 → 1122,463,132,79 -->
  <div class="el facility" style="left:1122px;top:463px;width:132px;height:79px;">
    <div class="ico">
      <!-- Elevator / lift icon -->
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <rect x="5" y="2" width="14" height="20" rx="2" fill="none" stroke="#fff" stroke-width="2"/>
        <circle cx="12" cy="9" r="2"/>
        <path d="M9 13h6v5H9z"/>
        <path d="M9 5l3-3 3 3M9 19l3 3 3-3" stroke="#fff" stroke-width="1.5" fill="none" stroke-linecap="round"/>
      </svg>
    </div>
  </div>

  <!-- ═══ NAMED STAGE ZONES — icons only, no text ═══ -->

  <!-- Big Ideas Stage: L=75,T=21,W=292,H=325 → 54,15,210,234 -->
  <div class="el big-ideas" style="left:54px;top:15px;width:210px;height:234px;" data-tip="big-ideas">
    <img src="https://static.wixstatic.com/media/958742_e2b6c40d3a024337a1eedab4bdc475ae~mv2.png" alt="Big Ideas Stage">
  </div>

  <!-- Leadership Stage: L=122,T=501,W=245,H=195 → 88,361,177,141 -->
  <div class="el leadership" style="left:88px;top:361px;width:177px;height:141px;" data-tip="leadership">
    <img src="https://static.wixstatic.com/media/958742_df9d7224bad74c7ba2a87f563b8ab468~mv2.png" alt="Leadership Stage">
  </div>

  <!-- What Works bg: L=846,T=17,W=315,H=243 → 610,12,227,175 -->
  <div class="el ww-bg no-hover" style="left:610px;top:12px;width:227px;height:175px;"></div>
  <!-- What Works overlay -->
  <div class="el ww" style="left:610px;top:12px;width:227px;height:175px;" data-tip="what-works">
    <img src="https://static.wixstatic.com/media/958742_aadf138cae4646a1af43b959124fdffe~mv2.png" alt="What Works Stage">
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
    <div class="zn">Puppy<br>Area</div>
  </div>

  <!-- Innovation Stage: L=883,T=549,W=149,H=147 → 636,396,107,106 -->
  <div class="el innov" style="left:636px;top:396px;width:107px;height:106px;" data-tip="innovation">
    <img src="https://static.wixstatic.com/media/958742_63062ce63a524f01ad79498530c5f828~mv2.png" alt="Innovation Stage">
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
  <div class="el b hot" style="left:903px;top:188px;width:71px;height:141px;" data-tip="booth-2" data-num="2" data-size="6×12"><div class="n">2</div><div class="s">6×12</div></div>

  <!-- MID ROW TOP: 45,44,21,20  T=309 → 223px -->
  <div class="el b hot" style="left:435px;top:223px;width:36px;height:37px;" data-tip="booth-45" data-num="45" data-size="3×3"><div class="n">45</div><div class="s">3×3</div></div>
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
  </div>
</div>
<div class="fp-controls">
  <button class="fp-btn" id="fp-zoom-in">+</button>
  <button class="fp-btn" id="fp-zoom-out">&minus;</button>
  <button class="fp-btn" id="fp-zoom-fit" style="font-size:14px;">&#10530;</button>
</div>
<div class="fp-minimap" id="fp-minimap">
<div class="fp-minimap-floor">
    <svg width="160" height="67" viewBox="0 0 1300 540" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;position:absolute;top:0;left:0;">
      <rect width="1300" height="540" fill="#edf0ee"/>
      <rect x="54" y="15" width="210" height="234" rx="6" fill="rgba(255,232,215,0.9)"/>
      <rect x="88" y="361" width="177" height="141" rx="6" fill="rgba(215,240,222,0.9)"/>
      <rect x="610" y="12" width="227" height="175" rx="6" fill="rgba(218,213,236,0.5)"/>
      <rect x="867" y="23" width="141" height="71" rx="6" fill="#1a5f6a"/>
      <rect x="433" y="86" width="143" height="107" rx="6" fill="#1a5f6a"/>
      <rect x="410" y="361" width="96" height="73" rx="6" fill="#1a5f6a"/>
      <rect x="636" y="396" width="107" height="106" rx="6" fill="rgba(240,185,175,0.78)"/>
      <rect x="1122" y="37" width="177" height="128" rx="4" fill="rgba(190,196,194,0.6)"/>
      <rect x="1122" y="168" width="175" height="120" rx="4" fill="rgba(190,196,194,0.6)"/>
      <rect x="1122" y="289" width="178" height="85" rx="4" fill="rgba(190,196,194,0.6)"/>
      <rect x="1122" y="375" width="179" height="86" rx="4" fill="rgba(190,196,194,0.6)"/>
      <rect x="1122" y="463" width="132" height="79" rx="4" fill="rgba(190,196,194,0.6)"/>
      <g fill="#cdd4d1">
        <rect x="308" y="15" width="36" height="37" rx="2"/><rect x="344" y="15" width="36" height="37" rx="2"/>
        <rect x="435" y="15" width="36" height="37" rx="2"/><rect x="470" y="15" width="36" height="37" rx="2"/>
        <rect x="506" y="15" width="36" height="37" rx="2"/><rect x="541" y="15" width="36" height="37" rx="2"/>
        <rect x="308" y="84" width="36" height="37" rx="2"/><rect x="344" y="84" width="36" height="37" rx="2"/>
        <rect x="308" y="120" width="36" height="37" rx="2"/><rect x="344" y="120" width="36" height="37" rx="2"/>
        <rect x="937" y="119" width="36" height="37" rx="2"/><rect x="972" y="119" width="36" height="37" rx="2"/>
        <rect x="308" y="188" width="37" height="73" rx="2"/><rect x="344" y="188" width="37" height="73" rx="2"/>
        <rect x="903" y="188" width="71" height="141" rx="2" fill="#c4d2ce"/>
        <rect x="435" y="223" width="36" height="37" rx="2"/><rect x="470" y="223" width="36" height="37" rx="2"/>
        <rect x="539" y="223" width="36" height="37" rx="2"/><rect x="574" y="223" width="36" height="37" rx="2"/>
        <rect x="643" y="223" width="37" height="73" rx="2"/><rect x="678" y="223" width="36" height="37" rx="2"/>
        <rect x="763" y="223" width="73" height="37" rx="2"/><rect x="835" y="222" width="36" height="72" rx="2"/>
        <rect x="435" y="259" width="36" height="37" rx="2"/><rect x="470" y="259" width="36" height="37" rx="2"/>
        <rect x="539" y="259" width="36" height="37" rx="2"/><rect x="574" y="259" width="36" height="37" rx="2"/>
        <rect x="678" y="259" width="36" height="37" rx="2"/><rect x="763" y="258" width="73" height="37" rx="2"/>
        <rect x="308" y="292" width="36" height="37" rx="2"/><rect x="344" y="292" width="36" height="37" rx="2"/>
        <rect x="643" y="326" width="73" height="37" rx="2"/>
        <rect x="308" y="361" width="36" height="37" rx="2"/><rect x="344" y="361" width="36" height="37" rx="2"/>
        <rect x="539" y="361" width="36" height="37" rx="2"/><rect x="574" y="361" width="36" height="37" rx="2"/>
        <rect x="764" y="361" width="36" height="37" rx="2"/><rect x="799" y="361" width="36" height="37" rx="2"/>
        <rect x="834" y="361" width="36" height="73" rx="2"/>
        <rect x="308" y="397" width="36" height="37" rx="2"/><rect x="344" y="397" width="36" height="37" rx="2"/>
        <rect x="539" y="397" width="36" height="37" rx="2"/><rect x="574" y="397" width="36" height="37" rx="2"/>
        <rect x="764" y="397" width="36" height="37" rx="2"/><rect x="799" y="397" width="36" height="37" rx="2"/>
        <rect x="903" y="361" width="71" height="141" rx="2"/>
        <rect x="308" y="465" width="36" height="37" rx="2"/><rect x="344" y="465" width="36" height="37" rx="2"/>
        <rect x="379" y="465" width="36" height="37" rx="2"/><rect x="414" y="465" width="36" height="37" rx="2"/>
        <rect x="470" y="465" width="36" height="37" rx="2"/><rect x="505" y="465" width="36" height="37" rx="2"/>
        <rect x="540" y="465" width="36" height="37" rx="2"/><rect x="575" y="465" width="36" height="37" rx="2"/>
        <rect x="764" y="465" width="36" height="37" rx="2"/><rect x="799" y="465" width="36" height="37" rx="2"/>
        <rect x="834" y="465" width="36" height="37" rx="2"/>
      </g>
    </svg>
    <div class="fp-minimap-vp" id="fp-minimap-vp"></div>
  </div>
</div>
<div class="fp-hint" id="fp-hint">Pinch to zoom &nbsp;&middot;&nbsp; Drag to pan</div>
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

    // Remap all element lookups to shadow root
    const CONTENT_W = 1300, CONTENT_H = 540, MIN_ZOOM = 0.3, MAX_ZOOM = 2.5;
    let zoom = 1, panX = 0, panY = 0, isDragging = false;
    let dragStartX = 0, dragStartY = 0, panStartX = 0, panStartY = 0;

    const vpOuter   = shadow.getElementById('vp-outer');
    const vpInner   = shadow.getElementById('vp-inner');
    const minimap   = shadow.getElementById('fp-minimap');
    const minimapVp = shadow.getElementById('fp-minimap-vp');
    const hint      = shadow.getElementById('fp-hint');

    function clampPan(x, y, z) {
      const vw = window.innerWidth, vh = window.innerHeight;
      return [
        Math.max(Math.min(vw - CONTENT_W * z, 0), Math.min(0, x)),
        Math.max(Math.min(vh - CONTENT_H * z, 0), Math.min(0, y))
      ];
    }
    function fitToScreen() {
      zoom = Math.min(window.innerWidth / CONTENT_W, window.innerHeight / CONTENT_H, 1);
      panX = (window.innerWidth  - CONTENT_W * zoom) / 2;
      panY = (window.innerHeight - CONTENT_H * zoom) / 2;
      apply();
    }
    function apply(animate) {
      [panX, panY] = clampPan(panX, panY, zoom);
      vpInner.style.transition = animate ? 'transform .2s ease' : 'none';
      vpInner.style.transform = 'translate(' + panX + 'px,' + panY + 'px) scale(' + zoom + ')';
      updateMinimap();
    }
    function updateMinimap() {
      minimapVp.style.left   = Math.max(0, -panX / zoom * (160/CONTENT_W)) + 'px';
      minimapVp.style.top    = Math.max(0, -panY / zoom * (67/CONTENT_H))  + 'px';
      minimapVp.style.width  = Math.min(160, window.innerWidth  / zoom * (160/CONTENT_W)) + 'px';
      minimapVp.style.height = Math.min(67,  window.innerHeight / zoom * (67/CONTENT_H))  + 'px';
    }
    function zoomAt(newZ, cx, cy) {
      newZ = Math.max(MIN_ZOOM, Math.min(MAX_ZOOM, newZ));
      var r = newZ / zoom;
      panX = cx - r * (cx - panX);
      panY = cy - r * (cy - panY);
      zoom = newZ; apply();
    }

    // Init on next frame so dimensions are available
    requestAnimationFrame(function() {
      fitToScreen();
      if (window.matchMedia('(max-width:768px)').matches) {
        hint.classList.add('show');
        setTimeout(function() { hint.classList.remove('show'); }, 2500);
      }
    });
    window.addEventListener('resize', function() { [panX, panY] = clampPan(panX, panY, zoom); apply(); });

    vpOuter.addEventListener('wheel', function(e) {
      e.preventDefault();
      zoomAt(zoom * (e.deltaY < 0 ? 1.12 : 1/1.12), e.clientX, e.clientY);
    }, { passive: false });

    vpOuter.addEventListener('mousedown', function(e) {
      if (e.button !== 0) return;
      isDragging = true; dragStartX = e.clientX; dragStartY = e.clientY;
      panStartX = panX; panStartY = panY; vpOuter.classList.add('dragging');
    });
    window.addEventListener('mousemove', function(e) {
      if (!isDragging) return;
      panX = panStartX + (e.clientX - dragStartX);
      panY = panStartY + (e.clientY - dragStartY);
      apply();
    });
    window.addEventListener('mouseup', function() { isDragging = false; vpOuter.classList.remove('dragging'); });

    var lastPinchDist = null;
    vpOuter.addEventListener('touchstart', function(e) {
      e.preventDefault();
      if (e.touches.length === 2) {
        var dx = e.touches[0].clientX - e.touches[1].clientX;
        var dy = e.touches[0].clientY - e.touches[1].clientY;
        lastPinchDist = Math.sqrt(dx*dx + dy*dy);
      } else {
        dragStartX = e.touches[0].clientX; dragStartY = e.touches[0].clientY;
        panStartX = panX; panStartY = panY;
      }
    }, { passive: false });
    vpOuter.addEventListener('touchmove', function(e) {
      e.preventDefault();
      if (e.touches.length === 2) {
        var dx = e.touches[0].clientX - e.touches[1].clientX;
        var dy = e.touches[0].clientY - e.touches[1].clientY;
        var dist = Math.sqrt(dx*dx + dy*dy);
        if (lastPinchDist) zoomAt(zoom * (dist/lastPinchDist),
          (e.touches[0].clientX + e.touches[1].clientX)/2,
          (e.touches[0].clientY + e.touches[1].clientY)/2);
        lastPinchDist = dist;
      } else {
        panX = panStartX + (e.touches[0].clientX - dragStartX);
        panY = panStartY + (e.touches[0].clientY - dragStartY);
        apply();
      }
    }, { passive: false });
    vpOuter.addEventListener('touchend', function(e) {
      lastPinchDist = null;
      if (e.touches.length === 1) {
        dragStartX = e.touches[0].clientX; dragStartY = e.touches[0].clientY;
        panStartX = panX; panStartY = panY;
      }
    });

    shadow.getElementById('fp-zoom-in').addEventListener('click', function(e) {
      e.stopPropagation(); zoomAt(zoom*1.3, window.innerWidth/2, window.innerHeight/2);
      vpInner.style.transition = 'transform .2s ease';
    });
    shadow.getElementById('fp-zoom-out').addEventListener('click', function(e) {
      e.stopPropagation(); zoomAt(zoom/1.3, window.innerWidth/2, window.innerHeight/2);
      vpInner.style.transition = 'transform .2s ease';
    });
    shadow.getElementById('fp-zoom-fit').addEventListener('click', function(e) {
      e.stopPropagation(); fitToScreen(); vpInner.style.transition = 'transform .2s ease';
    });
    minimap.addEventListener('click', function(e) {
      var r = minimap.getBoundingClientRect();
      panX = window.innerWidth/2  - ((e.clientX-r.left)/160) * CONTENT_W * zoom;
      panY = window.innerHeight/2 - ((e.clientY-r.top) /67)  * CONTENT_H * zoom;
      apply(true);
    });

    var tips = {
      'big-ideas':  {title:'Big Ideas Stage', body:'Our largest theatre covering the major topics affecting the sector — technology, legal and regulatory requirements, and the benefits and value of positive mental health policies.'},
      'what-works': {title:'What Works Stage', body:'Our deep dive theatre, featuring a host of case studies and panel discussions to help you understand what really works for other businesses.'},
      'leadership': {title:'Leadership Stage', body:'This theatre splits its themes during the event. Deep diving into the role of senior leadership on day 1, while focussing on the unique challenges of the public sector on day 2.'},
      'innovation': {title:'Innovation Stage', body:'See demos, talks and conversations for products and services that have helped other organisations.'},
      'puppy':      {title:'&#x1F436; Puppy Area', body:'Have the chance to meet and interact with beautiful therapy dogs and puppies — guaranteed to improve your mental health and create incredible memories.'},
      'wellbeing':  {title:'&#x1F33F; Wellbeing & Networking Zone', body:'A quiet spot in the centre of the floor for attendees to relax and sit down for a break from the packed event schedule.'},
      'speaker':    {title:'&#x1F399; Speaker Lounge', body:'A dedicated space for speakers to network, collaborate and unwind. A comfortable, curated space designed to facilitate meaningful conversations beyond the stage.'},
      'booth-45':   {type:'booth', num:'45', size:'3x3', sponsor:'Bupa', logoUrl:'https://static.wixstatic.com/media/958742_847c285ca4c94f01b31f2191b1df4ba5~mv2.png', body:'Bupa is an international healthcare company dedicated to helping people live longer, healthier, happier lives. In Australia, Bupa delivers quality health insurance, aged care, dental, optical and more.'},
      'booth-2':    {type:'booth', num:'2', size:'6x12', sponsor:'Medibank', logoUrl:'https://static.wixstatic.com/media/958742_feff646cdb1e4fc0ae6bf2ea1f6b155b~mv2.png', body:"Medibank is one of Australia's leading health insurers, providing health insurance and health services to over 3.9 million customers. Medibank is committed to better health for better lives."},
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
