class OneDialog extends HTMLElement {
  static get observedAttributes() {
    return ['open'];
  }
  
  attributeChangedCallback(attrName, oldValue, newValue) {
    if (newValue !== oldValue) {
      this[attrName] = this.hasAttribute(attrName);
    }
  }
  
  connectedCallback() {
    const template = document.getElementById('one-dialog');
    const node = document.importNode(template.content, true);
    this.appendChild(node);
  }
}


customElements.define('one-dialog', OneDialog);