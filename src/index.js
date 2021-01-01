import './scss/style.scss';

const languages = [
  {
    name: 'polski',
    shortName: 'pl',
    flagPath: 'flag-pl.svg'
  },
  {
    name: 'angielski',
    shortName: 'en',
    flagPath: 'flag-usa.svg'
  },
  {
    name: 'rosyjski',
    shortName: 'ru',
    flagPath: 'flag-russia.svg'
  }
];

const changePageLanguage = languages => {
  const changeLanguageBtnItems = document.querySelectorAll('.nav-b .dropdown-menu .dropdown-item');
  const languageNameEl = document.querySelector('.nav-b .change-language-btn-b__language-name');
  const countryFlagUseEl = document.querySelector('.change-language-btn-b__country-flag-use');

  for(let item of changeLanguageBtnItems) {
    item.addEventListener('click', function() {
      const lastLanguage = languageNameEl.textContent.toLowerCase();
      const lastLanguageName = languages.find(item => item.shortName === lastLanguage).name;
      const selectedLanguage = this.dataset.language;
      const selectedLanguageFlagPath = languages.find(item => item.shortName === selectedLanguage).flagPath;

      document.documentElement.lang = selectedLanguage;
      languageNameEl.textContent = selectedLanguage.toUpperCase();

      this.dataset.language = lastLanguage;
      this.textContent = lastLanguageName;

      countryFlagUseEl.setAttribute('xlink:href', `src/img/${selectedLanguageFlagPath}#flag`);
    });
  }
};

document.addEventListener('DOMContentLoaded', () => {
  changePageLanguage(languages);
});