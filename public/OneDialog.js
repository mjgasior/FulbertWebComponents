class OneDialog extends HTMLElement {
  constructor() {
    super();
    this.close = this.close.bind(this);
  }

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
    this.querySelector('.wrapper').classList.toggle('open', isOpen);
    this.querySelector('.wrapper').setAttribute('aria-hidden', !isOpen);
    if (isOpen) {
      this._wasFocused = document.activeElement;
      this.setAttribute('open', '');
      document.addEventListener('keydown', this._watchEscape);
      this.focus();
      this.querySelector('button').focus();
    } else {
      this._wasFocused && this._wasFocused.focus && this._wasFocused.focus();
      this.removeAttribute('open');
      document.removeEventListener('keydown', this._watchEscape);
      this.close();
    }
  }

  close() {
    if (this.open !== false) {
      this.open = false;
    }
    const closeEvent = new CustomEvent('dialog-closed');
    this.dispatchEvent(closeEvent);
  }

  _watchEscape(event) {
    if (event.key === 'Escape') {
      this.close();
    }
  }
}

customElements.define('one-dialog', OneDialog);