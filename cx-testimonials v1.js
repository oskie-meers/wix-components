class CxTestimonials extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'open' });

    shadow.innerHTML = `
<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
*, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
:host { display: block; background: #F0F0F0; font-family: 'Inter', sans-serif; padding: 40px 20px; }
.testimonials-section { max-width: 800px; margin: 0 auto; }
.slider { position: relative; overflow: hidden; }
.slider-track { display: flex; transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1); }
.slide { min-width: 100%; padding: 0 4px; }
.quote-card { background: white; border-radius: 20px; padding: 44px 48px; box-shadow: none; border: 1px solid rgba(30,58,95,0.12); text-align: center; position: relative; }
.quote-accent { width: 40px; height: 3px; background: linear-gradient(90deg, #1e3a5f, #3db8a8); border-radius: 2px; margin: 0 auto 28px; }
.quote-mark { font-size: 64px; line-height: 0.6; color: #3db8a8; font-family: Georgia, serif; display: block; opacity: 0.25; margin-bottom: 20px; }
.quote-text { font-size: 16px; line-height: 1.8; color: #3a5272; margin-bottom: 32px; font-style: italic; font-weight: 300; }
.quote-source { font-size: 12px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: #1e3a5f; }
.quote-source::before { content: '-- '; color: #3db8a8; }
.controls { display: flex; align-items: center; justify-content: center; gap: 20px; margin-top: 28px; }
.nav-btn { width: 40px; height: 40px; border-radius: 50%; border: 1.5px solid rgba(30,58,95,0.15); background: white; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: all 0.2s; box-shadow: 0 2px 8px rgba(30,58,95,0.07); flex-shrink: 0; }
.nav-btn:hover { background: #3db8a8; border-color: #3db8a8; }
.nav-btn:hover svg { stroke: white; }
.nav-btn svg { width: 16px; height: 16px; stroke: #1e3a5f; fill: none; stroke-width: 2.5; stroke-linecap: round; stroke-linejoin: round; }
.dots { display: flex; gap: 8px; align-items: center; }
.dot { width: 7px; height: 7px; border-radius: 50%; background: rgba(30,58,95,0.15); cursor: pointer; border: none; transition: all 0.3s; }
.dot.active { background: #3db8a8; transform: scale(1.4); }
@media (max-width: 600px) { .quote-card { padding: 32px 24px; } .quote-text { font-size: 14px; } }
</style>
<div class="testimonials-section">
  <div class="slider">
    <div class="slider-track" id="track">
      <div class="slide"><div class="quote-card"><div class="quote-accent"></div><span class="quote-mark">&ldquo;</span><p class="quote-text">In a time when marketing budgets are tight and ROI matters more than ever, Digital Island had a great run as a sponsor &ndash; heaps of quality conversations with high value industry leaders.</p><div class="quote-source">Digital Island</div></div></div>
      <div class="slide"><div class="quote-card"><div class="quote-accent"></div><span class="quote-mark">&ldquo;</span><p class="quote-text">The Future Contact Centre Summit was packed with insights on automation, AI, agentic AI, bot call strategies, and more. I left feeling inspired and connected. It was also a great opportunity to benchmark our contact centre&rsquo;s progress against industry leaders and gain fresh perspectives.</p><div class="quote-source">Two Degrees Mobile</div></div></div>
      <div class="slide"><div class="quote-card"><div class="quote-accent"></div><span class="quote-mark">&ldquo;</span><p class="quote-text">Outsource Fiji attended the Future CX Summit NZ last year (and this year again). The event provided an excellent platform to showcase why Fiji is positioned strategically for NZ businesses. We shared real case studies through the speaking slot allocated to us &ndash; and our booth drew great attention from the attendees.</p><div class="quote-source">Outsource Fiji</div></div></div>
      <div class="slide"><div class="quote-card"><div class="quote-accent"></div><span class="quote-mark">&ldquo;</span><p class="quote-text">The flexhive by Hudson team had an amazing time attending the Future Contact Centre NZ Conference here in Auckland! A BIG thanks to the Aventedge team for putting on a great event!</p><div class="quote-source">flexhive by Hudson</div></div></div>
      <div class="slide"><div class="quote-card"><div class="quote-accent"></div><span class="quote-mark">&ldquo;</span><p class="quote-text">Great speakers and agenda at the 2 Day Future CX Summit. Covering relevant topics like productivity, cost savings, AI powered personalisation and leveraging data to improve value for the consumer. Well done Aventedge for a well organised summit.</p><div class="quote-source">Provident Insurance</div></div></div>
    </div>
  </div>
  <div class="controls">
    <button class="nav-btn" id="prev"><svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg></button>
    <div class="dots" id="dots"></div>
    <button class="nav-btn" id="next"><svg viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg></button>
  </div>
</div>
`;

    const track = shadow.getElementById('track');
    const dotsEl = shadow.getElementById('dots');
    const total = track.querySelectorAll('.slide').length;
    let current = 0;
    let elapsed = 0;
    const interval = 5000;
    let rafId;

    for (let i = 0; i < total; i++) {
      const d = document.createElement('button');
      d.className = 'dot' + (i === 0 ? ' active' : '');
      d.addEventListener('click', function(idx) { return function() { goTo(idx); resetTimer(); }; }(i));
      dotsEl.appendChild(d);
    }

    function goTo(index) {
      current = (index + total) % total;
      track.style.transform = 'translateX(-' + (current * 100) + '%)';
      dotsEl.querySelectorAll('.dot').forEach(function(d, i) { d.classList.toggle('active', i === current); });
      elapsed = 0;
    }

    function resetTimer() {
      cancelAnimationFrame(rafId);
      elapsed = 0;
      startTimer();
    }

    function startTimer() {
      var last = performance.now();
      function tick(now) {
        elapsed += now - last;
        last = now;
        if (elapsed >= interval) { goTo(current + 1); elapsed = 0; }
        rafId = requestAnimationFrame(tick);
      }
      rafId = requestAnimationFrame(tick);
    }

    shadow.getElementById('next').addEventListener('click', function() { goTo(current + 1); resetTimer(); });
    shadow.getElementById('prev').addEventListener('click', function() { goTo(current - 1); resetTimer(); });

    goTo(0);
    startTimer();
  }
}

customElements.define('cx-testimonials', CxTestimonials);
