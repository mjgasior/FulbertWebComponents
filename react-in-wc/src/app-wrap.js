class AppWrap extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
          <p>Hello from React Web Component wrapper</p>
        `;
  }
}

customElements.define("app-wrap", AppWrap);
