import AboutUsPage from './pages/AboutUsPage.js';
import Footer from './components/Footer.js';
import GamesPage from './pages/GamesPage.js';
import Header from './components/Header.js';
import HomePage from './pages/HomePage.js';

buildPage();

function buildPage() {
    footer();
    header();
    navigateToAboutUsPage();
    navigateToGamesPage();
    navigateToHomePage();
}

function footer() {
    const footerElement = document.querySelector('.footer');
    footerElement.innerHTML = Footer();
}

function header() {
    const headerElement = document.querySelector('.header');
    headerElement.innerHTML = Header();
}

function navigateToAboutUsPage() {
    const homeButton = document.querySelector('.nav__list_about_us');
    homeButton.addEventListener('click', () => {
      const appMain = document.querySelector('#appMain');
      appMain.innerHTML = AboutUsPage();
    });
}

function navigateToGamesPage() {
    const homeButton = document.querySelector('.nav__list_games');
    homeButton.addEventListener('click', () => {
      const appMain = document.querySelector('#appMain');
      appMain.innerHTML = GamesPage();
    });
}

function navigateToHomePage() {
    const homeButton = document.querySelector('.nav__list_home');
    homeButton.addEventListener('click', () => {
      const appMain = document.querySelector('#appMain');
      appMain.innerHTML = HomePage();
    });
}
