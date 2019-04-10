class AbstractClass extends HTMLElement {
  constructor() {
    super();
    // Check to see if observedAttributes are defined and has length
    if (
      this.constructor.observedAttributes &&
      this.constructor.observedAttributes.length
    ) {
      // Loop through the observed attributes
      this.constructor.observedAttributes.forEach(attribute => {
        
        // Dynamically define the property getter/setter
        Object.defineProperty(this, attribute, {
          get() {
            return this.getAttribute(attribute);
          },
          set(attrValue) {
            if (attrValue) {
              this.setAttribute(attribute, attrValue);
            } else {
              this.removeAttribute(attribute);
            }
          }
        });
        
      });
    }
  }
}

// Instead of extending HTMLElement directly, we can now extend our AbstractClass
class SomeElement extends AbstractClass {
  /** Omitted */
}

customElements.define("some-element", SomeElement);
