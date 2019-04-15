export class DialogWorkflow extends HTMLElement {
  connectedCallback() {
    this._onDialogClosed = this._onDialogClosed.bind(this);
    this.addEventListener('dialog-closed', this._onDialogClosed);
  }

  get dialogs() {
    return Array.from(this.querySelectorAll('one-dialog'));
  }

  _onDialogClosed(event) {
    const dialogClosed = event.target;
    const nextIndex = this.dialogs.indexOf(dialogClosed);
    if (nextIndex !== -1) {
      this.dialogs[nextIndex].open = true;
    }
  }
}