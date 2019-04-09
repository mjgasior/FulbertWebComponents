class OneDialog extends HTMLElement {
  static get boundAttributes() {
    return ['open'];
  }
  
  attributeChangedCallback(attrName, oldValue, newValue) {
    this[attrName] = this.hasAttribute(attrName);
  }
  
  connectedCallback() {
    const template = document.getElementById('one-dialog');
    const node = document.importNode(template.content, true);
    this.appendChild(node);
  }
  
  get open() {
    return this.hasAttribute('open');
  }
  
  set open(isOpen) {
    if (isOpen) {
      this.setAttribute('open', true);
    } else {
      this.removeAttribute('open');
    }
  }
}

customElements.define('one-dialog', OneDialog);