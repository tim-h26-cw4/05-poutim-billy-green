import Poutine from './Poutine.js';

export default class Chef {
  constructor(element) {
    this.element = element;
    this.menu = [];
    this.container = this.element.querySelector('.chef__order');
    this.init();
    console.log('chef fonctionne');
  }

  init() {
    const instance = new Poutine();
    this.menu.push(instance);
    const button = this.element.querySelector('.js-button');
    console.log(button);
    button.addEventListener('click', this.sendOrder.bind(this));
  }

  sendOrder() {
    console.log('order fonctionne');
  }
}
