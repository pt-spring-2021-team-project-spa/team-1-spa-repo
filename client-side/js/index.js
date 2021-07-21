import BlogPage from './pages/BlogPage.js';
import AboutUsPage from './pages/AboutUsPage.js';
import MeetOurTeamPage from './pages/MeetOurTeamPage.js';
import HomePageHeader from './components/HomePageHeader.js';
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
  homePageHeader();
  navigateToHomePageByEnterButton();
  navigateToAboutUsPage();
  navigateToMeetOurTeamPage();
  navigateToOurOfficesPage();
  navigateToBlogPage();
  navigateToReviewPage(); 
  navigateToDonatePage(); 
  navigateToWeAreHiringPage();
  navigateToGamesPage();
  navigateToNasaCardPage();
  navigateToNasaListPage();
}
function buildHomePage() {
  navigateToHomePageByNavButton();
  navigateToAboutUsPage();
  navigateToMeetOurTeamPage();
  navigateToOurOfficesPage();
  navigateToBlogPage();
  navigateToReviewPage(); 
  navigateToDonatePage(); 
  navigateToWeAreHiringPage();
  navigateToGamesPage();
  navigateToNasaCardPage();
  navigateToNasaListPage(); 
}
function buildAboutUsPage() {
  navigateToHomePageByNavButton();
  navigateToAboutUsPage();
  navigateToMeetOurTeamPage();
  navigateToOurOfficesPage();
  navigateToBlogPage();
  navigateToReviewPage(); 
  navigateToDonatePage(); 
  navigateToWeAreHiringPage();
  navigateToGamesPage();
  navigateToNasaCardPage();
  navigateToNasaListPage();
}
function buildMeetOurTeamPage() {
  navigateToHomePageByNavButton();
  navigateToAboutUsPage();
  navigateToMeetOurTeamPage();
  navigateToOurOfficesPage();
  navigateToBlogPage();
  navigateToReviewPage(); 
  navigateToDonatePage(); 
  navigateToWeAreHiringPage();
  navigateToGamesPage();
  navigateToNasaCardPage();
  navigateToNasaListPage();
}
function buildOurOfficesPage() {
  navigateToHomePageByNavButton();
  navigateToAboutUsPage();
  navigateToMeetOurTeamPage();
  navigateToOurOfficesPage();
  navigateToBlogPage();
  navigateToReviewPage(); 
  navigateToDonatePage(); 
  navigateToWeAreHiringPage();
  navigateToGamesPage();
  navigateToNasaCardPage();
  navigateToNasaListPage();
}
function buildBlogPage() {
  navigateToHomePageByNavButton();
  navigateToAboutUsPage();
  navigateToMeetOurTeamPage();
  navigateToOurOfficesPage();
  navigateToBlogPage();
  navigateToReviewPage(); 
  navigateToDonatePage(); 
  navigateToWeAreHiringPage();
  navigateToGamesPage();
  navigateToNasaCardPage();
  navigateToNasaListPage();
}
function buildReviewPage() {
  navigateToHomePageByNavButton();
  navigateToAboutUsPage();
  navigateToMeetOurTeamPage();
  navigateToOurOfficesPage();
  navigateToBlogPage();
  navigateToReviewPage(); 
  navigateToDonatePage(); 
  navigateToWeAreHiringPage();
  navigateToGamesPage();
  navigateToNasaCardPage();
  navigateToNasaListPage();
}
function buildDonatePage() {
  navigateToHomePageByNavButton();
  navigateToAboutUsPage();
  navigateToMeetOurTeamPage();
  navigateToOurOfficesPage();
  navigateToBlogPage();
  navigateToReviewPage(); 
  navigateToDonatePage(); 
  navigateToWeAreHiringPage();
  navigateToGamesPage();
  navigateToNasaCardPage();
  navigateToNasaListPage();
}
function buildWeAreHiringPage() {
  navigateToHomePageByNavButton();
  navigateToAboutUsPage();
  navigateToMeetOurTeamPage();
  navigateToOurOfficesPage();
  navigateToBlogPage();
  navigateToReviewPage(); 
  navigateToDonatePage(); 
  navigateToWeAreHiringPage();
  navigateToGamesPage();
  navigateToNasaCardPage();
  navigateToNasaListPage();
}
function buildGamesPage() {
  navigateToHomePageByNavButton();
  navigateToAboutUsPage();
  navigateToMeetOurTeamPage();
  navigateToOurOfficesPage();
  navigateToBlogPage();
  navigateToReviewPage(); 
  navigateToDonatePage(); 
  navigateToWeAreHiringPage();
  navigateToGamesPage();
  navigateToNasaCardPage();
  navigateToNasaListPage();
}
function buildNasaCardPage() {
  navigateToHomePageByNavButton();
  navigateToAboutUsPage();
  navigateToMeetOurTeamPage();
  navigateToOurOfficesPage();
  navigateToBlogPage();
  navigateToReviewPage(); 
  navigateToDonatePage(); 
  navigateToWeAreHiringPage();
  navigateToGamesPage();
  navigateToNasaCardPage();
  navigateToNasaListPage();
}
function buildNasaListPage() {
  navigateToHomePageByNavButton();
  navigateToAboutUsPage();
  navigateToMeetOurTeamPage();
  navigateToOurOfficesPage();
  navigateToBlogPage();
  navigateToReviewPage(); 
  navigateToDonatePage(); 
  navigateToWeAreHiringPage();
  navigateToGamesPage();
  navigateToNasaCardPage();
  navigateToNasaListPage();
}

function homePageHeader() {
    const headerElement = document.querySelector('.header');
    headerElement.innerHTML = HomePageHeader();
  }
  function navigateToHomePageByEnterButton() {
    const enterBtn = document.querySelector('.enter');
    enterBtn.addEventListener('click', () => {
      const app = document.querySelector('#app');
      app.innerHTML = HomePage();
      buildHomePage();
    });
  }
  function navigateToHomePageByNavButton() {
    const enterBtn = document.querySelector('.nav__list_home');
    enterBtn.addEventListener('click', () => {
      const app = document.querySelector('#app');
      app.innerHTML = HomePage();
      buildHomePage();
    });
  }
  
  function navigateToAboutUsPage() {
    const aboutUsBtn = document.querySelector('.nav__list_about_us');
    aboutUsBtn.addEventListener('click', () => {
      const app = document.querySelector('#app');
      app.innerHTML = AboutUsPage();
      buildAboutUsPage();
    });
  }
  function navigateToMeetOurTeamPage() {
    const meetTeamBtn = document.querySelector('.nav__list_meet_our_team');
    console.log('load developer bttn');
    meetTeamBtn.addEventListener('click', () => {
      console.log('click nav developer bttn');
      const app = document.querySelector('#app');
      app.innerHTML = MeetOurTeamPage();
      buildMeetOurTeamPage();
    });
  }
  function navigateToOurOfficesPage() {
    const officesBtn = document.querySelector('.nav__list_our_offices');
    officesBtn.addEventListener('click', () => {
      const app = document.querySelector('#app');
      app.innerHTML = OurOfficesPage();
      buildOurOfficesPage();
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
 function slideShow() {
    const slideshows = document.querySelectorAll('.slideshow');
    console.log(slideshows);
    slideshows.forEach(initSlideShow);
      }
      function initSlideShow(slideshow) {
        var slides = slideshow.querySelector('div').querySelectorAll('.slide');
        
        var index = 0, time = 5000;
        slides[index].classList.add('active');  
        setInterval( () => {
          console.log(slides);
        slides[index].classList.remove('active');
        index++;
        if (index === slides.length) index = 0; 
        slides[index].classList.add('active');
        }, time);
        }
  function navigateToDonatePage() {
  const donateBtn = document.querySelector('.nav__list_donate');
  donateBtn.addEventListener('click', () => {
    const app = document.querySelector('#app');
    app.innerHTML = DonatePage();
    buildDonatePage();
   });
  }
  function navigateToWeAreHiringPage() {
    const hiringBtn = document.querySelector('.nav__list_we_are_hiring');
    hiringBtn.addEventListener('click', () => {
      const app = document.querySelector('#app');
      app.innerHTML = WeAreHiringPage();
      buildWeAreHiringPage();
     });
    }
    function navigateToGamesPage() {
      const gamesBtn = document.querySelector('.nav__list_games');
      gamesBtn.addEventListener('click', () => {
        const app = document.querySelector('#app');
        app.innerHTML = GamesPage();
        buildGamesPage();
       });
      }  
      function navigateToNasaCardPage() {
        const nasaBtn = document.querySelector('.nav__list_nasaCard');
        nasaBtn.addEventListener('click', () => {
          const app = document.querySelector('#app');
          app.innerHTML = NasaCardPage();
          buildNasaCardPage();
         });
} 
function navigateToNasaListPage() {
  const nasaListBtn = document.querySelector('.nav__list_nasaCards');
  nasaListBtn.addEventListener('click', () => {
    const app = document.querySelector('#app');
    app.innerHTML = NasaListPage();
    buildNasaListPage();
   });
} 
 