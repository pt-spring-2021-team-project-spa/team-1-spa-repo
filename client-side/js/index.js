import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import HomePage from "./pages/HomePage.js";
import AboutUsPage from "./pages/AboutUsPage.js";
import MeetOurTeamPage from "./pages/MeetOurTeamPage";
import OurOfficesPage from "./pages/OurOfficesPage.js";
import WeAreHiringPage from "./pages/WeAreHiringPage.js";
import GamesPage from "./pages/GamesPage.js";
import DonatePage from "./pages/DonatePage.js";
import NasaCardsPage from "./pages/NasaCardsPage.js";
import NasaCardPage from "./pages/NasaCardPage.js";
import apiActions from "./api-actions/api-actions.js";
import AnimalCardsPage from "./pages/AnimalCardsPage.js";
import PaintingsPage from "./pages/PaintingsPage.js";

buildPage();

function buildPage() {
  footer();
  header();
  navigateToHomePage();
  navigateToAboutUsPage();
  navigateToMetPage();
  navigateToMeetOurTeamPage();
  navigateToOurOfficesPage();
  navigateToWeAreHiringPage();
  navigateToRandAnimal();
  renderNasaCardList();
}
function footer() {
  const footerElement = document.querySelector(".footer");
  footerElement.innerHTML = Footer();
}

function navigateToMetPage() {
  const DonateButton = document.querySelector(".nav__list_metMuseum");
  DonateButton.addEventListener("click", () => {
    const app = document.querySelector("#app");
    console.log("HI");
    apiActions.metMuseumPaintings((paintings) => {
      app.innerHTML = PaintingsPage(paintings);
    });
  });
}

function header() {
  const headerElement = document.querySelector(".header");
  headerElement.innerHTML = Header();
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

function navigateToMeetOurTeamPage() {
  const meetOurTeamButton = document.querySelector(".nav__list_meet_our_team");
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
  const weAreHiringButton = document.querySelector(".nav__list_we_are_hiring");
  weAreHiringButton.addEventListener("click", () => {
    const app = document.querySelector("#app");
    app.innerHTML = WeAreHiringPage();
  });
}

function navigateToRandAnimal() {
  let AnimalSearchParam = Math.floor(Math.random() * (18 - 13) + 13);
  const gamesButton = document.querySelector(".nav__list_animals");
  gamesButton.addEventListener("click", () => {
    const app = document.querySelector("#app");
    console.log(AnimalSearchParam);
    apiActions.getRequest(
      "http://localhost:8080/api/animals/" + AnimalSearchParam,
      (animalCard) => { 
        app.innerHTML = AnimalCardsPage(animalCard);
      }
    );
  });
}

function renderNasaCardList() {
  var NasaParam = [
    "lunar",
    "astronauts",
    "mars",
    "apollo",
    "nasm",
    "planet",
    "hubble",
  ];
  let NasaSearchParam = NasaParam[Math.floor(Math.random() * NasaParam.length)];
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
