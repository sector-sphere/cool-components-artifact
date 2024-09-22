

export class CoolHeaderDesktopController {
  constructor(host) {
    this.host = host;
    host.addController(this);
  }

  _expandSubMenu(elementId) {
    // Expand submenu
    console.log('Submenu expanded');
    const clickedElement = this.host.shadowRoot.querySelector(`#${elementId}`);
    clickedElement.classList.toggle('expanded')
    clickedElement.nextElementSibling.classList.toggle('submenu-expanded');
  }
}