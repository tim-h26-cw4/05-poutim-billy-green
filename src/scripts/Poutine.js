export default class Poutine {
  constructor(element) {
    this.element = element;
    this.type = this.element.querySelector('.poutine');
    this.selectedType = '';
    this.init();
  }

  init() {
    const buttons = this.element.querySelectorAll('.js_poutine');
    for (let i = 0; i < buttons.length; i++) {
      const button = buttons[i];
      button.addEventListener('click', this.selectType.bind(this));
    }
  }

  selectType(event) {
    console.log('bouton fonctionne');
    const buttons = this.element.querySelectorAll('.js_poutine');
    for (let i = 0; i < buttons.length; i++) {
      const button = buttons[i];
      button.classList.remove('is-active');
    }
    event.currentTarget.classList.add('is-active');

    this.selectedType = event.currentTarget.innerText;
    console.log(this.selectedType);
    this.updatePhoto();
  }

  updatePhoto() {
    const photos = this.element.querySelectorAll('.poutine__image');
    for (let i = 0; i < photos.length; i++) {s
      const photo = photos[i];
      photo.classList.add('is-active');
    }
  }
}
