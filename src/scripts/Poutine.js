export default class Poutine {
  constructor(element) {
    this.element = element;
    this.type = document.querySelector('.poutine');
    this.selectedType = true;
    this.init();
  }

  init() {
    const buttons = document.querySelectorAll('.js_poutine');
    for (let i = 0; i < buttons.length; i++) {
      const button = buttons[i];
      button.addEventListener('click', this.selectType.bind(this));
    }
  }

  selectType() {
    console.log('bouton fonctionne');
    const buttons = document.querySelectorAll('.js_poutine');
    for (let i = 0; i < buttons.length; i++) {
      const button = buttons[i];
      button.classList.toggle('is-active');
    }
  }
}
