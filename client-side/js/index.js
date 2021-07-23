import BlogPage from './pages/BlogPage.js';
import AboutUsPage from './pages/AboutUsPage.js';
import MeetOurTeamPage from './pages/MeetOurTeamPage.js';
import HomePageHeader from './components/HomePageHeader.js';
import Footer from './components/Footer.js';
import HomePage from './pages/HomePage.js';
import ReviewPage from './pages/ReviewPage.js';
import OurOfficesPage from './pages/OurOfficesPage.js';
import DonatePage from './pages/DonatePage.js';
import WeAreHiringPage from './pages/WeAreHiringPage.js';
import GamesPage from './pages/GamesPage.js';
import NasaCardPage from './pages/NasaPage.js';
import NasaListPage from './pages/NasaListPage.js';

buildPage();

function buildPage() {
    footer();
    header();
    navigateToHomePage();
    navigateToAboutUsPage();
    navigateToDonatePage();
    navigateToMeetOurTeamPage();   
    navigateToOurOfficesPage();
    navigateToWeAreHiringPage();
    navigateToGamesPage();
    renderNasaCardList();
    renderNasaCard();
    renderAnimalRandomData();

function header() {
    const headerElement = document.querySelector(".header");
    headerElement.innerHTML = Header();
  }

  function footer() {
    const footerElement = document.querySelector(".footer");
    footerElement.innerHTML = Footer();
  }

  function navigateToHomePage() {
    const homeButton = document.querySelector(".nav__list_home");
    homeButton.addEventListener("click", () => {
      const app = document.querySelector("#app");
      location = location;
      app.innerHTML = HomePage();
    });
  }

  function navigateToAboutUsPage() {
    const aboutUsButton = document.querySelector(".nav__list_about_us");
    aboutUsButton.addEventListener("click", () => {
      const app = document.querySelector("#app");
      app.innerHTML = AboutUsPage();
    });
  }

  function navigateToDonatePage() {
    const DonateButton = document.querySelector(".nav__list_donate");
    DonateButton.addEventListener("click", () => {
      const app = document.querySelector("#app");
      app.innerHTML = DonatePage();
    });
  }

  function navigateToMeetOurTeamPage() {
    const meetOurTeamButton = document.querySelector(
      ".nav__list_meet_our_team"
    );
    meetOurTeamButton.addEventListener("click", () => {
      const app = document.querySelector("#app");
      app.innerHTML = MeetOurTeamPage();
    });
  }

  function navigateToOurOfficesPage() {
    const ourOfficesButton = document.querySelector(".nav__list_our_offices");
    ourOfficesButton.addEventListener("click", () => {
      const app = document.querySelector("#app");
      app.innerHTML = OurOfficesPage();
    });
  }

  function navigateToWeAreHiringPage() {
    const weAreHiringButton = document.querySelector(
      ".nav__list_we_are_hiring"
    );
    weAreHiringButton.addEventListener("click", () => {
      const app = document.querySelector("#app");
      app.innerHTML = WeAreHiringPage();
    });
  }

  function navigateToGamesPage() {
    const gamesButton = document.querySelector(".nav__list_games");
    gamesButton.addEventListener("click", () => {
      const app = document.querySelector("#app");
      app.innerHTML = GamesPage();
    });
  }

  function navigateToBlogPage() {
    const blogBtn = document.querySelector('.nav__list_blog');
    blogBtn.addEventListener('click', () => {
      const app = document.querySelector('#app');
      app.innerHTML = BlogPage();
      buildBlogPage();
      slideShow();
    });
  } 

  function navigateToReviewPage() {
    const reviewBtn = document.querySelector('.nav__list_reviews');
    reviewBtn.addEventListener('click', () => {
      console.log('review page clicked');
      const app = document.querySelector('#app');
      app.innerHTML = ReviewPage();
      buildReviewPage();
      slideShow();
    });
  }
  
  
  function renderNasaCardList() {
    var NasaParam = [
      "lunar",
      "astronauts",
      "mars",
      "apollo",
      "nasm",
      "venus",
      "sun",
      "planet",
      "hubble",
      "mercury",
      "pluto",
      "jupiter",
      "saturn",
      "uranus",
      "neptune",
    ];
    let NasaSearchParam =
      NasaParam[Math.floor(Math.random() * NasaParam.length)];
    const nasaCardsButton = document.querySelector(".nav__list_nasaCards");
    nasaCardsButton.addEventListener("click", () => {
      const app = document.querySelector("#app");
      apiActions.getRequest(
        "https://images-api.nasa.gov/search?keywords=" + NasaSearchParam,
        (nasaCards) => {
          app.innerHTML = NasaCardsPage(nasaCards);
        }
      );
    });
  }
  