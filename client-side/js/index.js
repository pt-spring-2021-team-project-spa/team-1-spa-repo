import Header from './components/Header.js';
import Footer from './components/Footer.js';
import HomePage from './pages/HomePage.js';
import AboutUsPage from './pages/AboutUsPage.js';
import MeetOurTeamPage from './pages/MeetOurTeamPage';
import OurOfficesPage from './pages/OurOfficesPage.js';
import WeAreHiringPage from './pages/WeAreHiringPage.js';
import GamesPage from './pages/GamesPage.js';



buildPage();

function buildPage() {
    footer();
    header();
    navigateToHomePage();
    navigateToAboutUsPage();
    navigateToMeetOurTeamPage();   
    navigateToOurOfficesPage();
    navigateToWeAreHiringPage();
    navigateToGamesPage();

}

function footer() {
    const footerElement = document.querySelector('.footer');
    footerElement.innerHTML = Footer();
}

function header() {
    const headerElement = document.querySelector('.header');
    headerElement.innerHTML = Header();
}

function navigateToHomePage() {
  const homeButton = document.querySelector('.nav__list_home');
  homeButton.addEventListener('click', () => {
    const app = document.querySelector('#app');
    app.innerHTML = HomePage();
  });
}

function navigateToAboutUsPage() {
    const aboutUsButton = document.querySelector('.nav__list_about_us');
    aboutUsButton.addEventListener('click', () => {
      const app = document.querySelector('#app');
      app.innerHTML = AboutUsPage();
    });
}

function navigateToMeetOurTeamPage() {
  const meetOurTeamButton = document.querySelector('.nav__list_meet_our_team');
  meetOurTeamButton.addEventListener('click', () => {
    const app = document.querySelector('#app');
    app.innerHTML = MeetOurTeamPage();
  });
}

function navigateToOurOfficesPage() {
  const ourOfficesButton = document.querySelector('.nav__list_our_offices');
  ourOfficesButton.addEventListener('click', () => {
    const app = document.querySelector('#app');
    app.innerHTML = OurOfficesPage();
  });
}

function navigateToWeAreHiringPage() {
  const weAreHiringButton = document.querySelector('.nav__list_we_are_hiring');
  weAreHiringButton.addEventListener('click', () => {
    const app = document.querySelector('#app');
    app.innerHTML = WeAreHiringPage();
  });
}

function navigateToGamesPage() {
    const gamesButton = document.querySelector('.nav__list_games');
    gamesButton.addEventListener('click', () => {
      const app = document.querySelector('#app');
      app.innerHTML = GamesPage();
    });
}

