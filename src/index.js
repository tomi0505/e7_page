import './scss/style.scss';

document.addEventListener('DOMContentLoaded', () => {
  const changeLanguageBtnItems = document.querySelectorAll('.nav-b .dropdown-menu .dropdown-item');
  for(let item of changeLanguageBtnItems) {
    item.addEventListener('click', function() {
      document.documentElement.lang = this.dataset.language;
    });
  }
});