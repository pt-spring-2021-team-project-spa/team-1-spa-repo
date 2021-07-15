import Footer from './components/Footer.js';
import HomePageHeader from './components/HomePageHeader.js';
import HomePage from './pages/HomePage.js';
import apiActions from './api-actions/api-actions.js';

buildPage();

function buildPage() {
    navigateToHomePage();
    homePageHeader();
    footer();
    renderMetMuseumArticleList();
}
function homePageHeader() {
    const headerElement = document.querySelector('.header');
    headerElement.innerHTML = HomePageHeader();
  }
  
function footer() {
    const footerElement = document.querySelector('.footer');
    footerElement.innerHTML = Footer();
  }

function navigateToHomePage() {
    const enterBtn = document.querySelector('.entBtn');
    enterBtn.addEventListener('click', () => {
      const app = document.querySelector('#app');
      app.innerHTML = HomePage();
    });
  }

function renderMetMuseumPaintingList() {
  const metMuseumButton = document.querySelector('.nav__list_met_museum'); //placeholder til doors work
  metMuseumButton.addEventListener('click', () => {
    apiActions.getRequest('https://collectionapi.metmuseum.org/public/collection/v1/departments'), (metMuseum) => { //placeholder
      console.log(metMuseum);
    }
  })
}
