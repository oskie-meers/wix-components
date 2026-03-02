class MhwwFloorPlan extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = '<div style="background:red;width:100%;height:100%;display:flex;align-items:center;justify-content:center;"><p style="color:white;font-size:32px;font-weight:bold;">FLOOR PLAN WORKS</p></div>';
  }
}
customElements.define('mhww-floor-plan', MhwwFloorPlan);
