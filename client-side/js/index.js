import Footer from './components/Footer.js';
import HomePageHeader from './components/HomePageHeader.js';
import HomePage from './pages/HomePage.js';
import ReviewsPage from './pages/ReviewsPage.js';


buildPage();

function buildPage() {
    navigateToHomePage();
    homePageHeader();
    footer(); 
    navigateToReviewsPage();
    interactWithDoor();
    interactWithSlideshow();
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
function navigateToReviewsPage() {
  const reviewBtn = document.querySelector('.nav__list_reviews');
  reviewBtn.addEventListener('click', () => {
    const app = document.querySelector('#app');
    app.innerHTML = ReviewsPage();
  });
} 
function interactWithDoor() {
 const app = document.querySelector('#app'); 
  app.addEventListener('click', (event) => {
      if (event.target.classList.contains('door')) {
      const doorEle = document.querySelector('.door');
      doorEle.addEventListener('click', () => {
      doorEle.classList.toggle("doorOpen");      
      })
     }
   });
 }

function interactWithSlideshow() {
  const imgDiv = document.querySelector('#images');
  imgDiv.addEventListener('click', (event) => {
    if (event.target.classList.contains('blueD')) {
      console.log(event.target);
    }
});
}

 