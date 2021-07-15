import Footer from './components/Footer.js';
import HomePageHeader from './components/HomePageHeader.js';
import HomePage from './pages/HomePage.js';

buildPage();

function buildPage() {
    navigateToHomePage();
    homePageHeader();
    footer();
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

 