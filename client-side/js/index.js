import HomePageHeader from './components/HomePageHeader.js';
import HomePage from './pages/HomePage.js';
import ReviewPage from './pages/ReviewPage.js';
import BlogPage from './pages/BlogPage.js';

buildPage();

function buildPage() { 
    homePageHeader();
    navigateToBlogPage();
    navigateToHomePage();
    navigateToReviewsPage();
    slideShow(); 
}
function homePageHeader() {
    const headerElement = document.querySelector('.header');
    headerElement.innerHTML = HomePageHeader();
  }
  function navigateToHomePage() {
    const enterBtn = document.querySelector('.enter');
    enterBtn.addEventListener('click', () => {
      const app = document.querySelector('#app');
      app.innerHTML = HomePage();
    });
  }
 function slideShow() {
    const slideshows = document.querySelectorAll('[data-component="slideshow"]');
    slideshows.forEach(initSlideShow);
    function initSlideShow(slideshow) {
    var slides = document.querySelectorAll(`#${slideshow.id} [role="list"] .slide`); 
    var index = 0, time = 5000;
    slides[index].classList.add('active');  
    setInterval( () => {
    slides[index].classList.remove('active');
    index++;
    if (index === slides.length) index = 0; 
    slides[index].classList.add('active');
    }, time);
    }
  }
  function navigateToReviewsPage() {
    const reviewBtn = document.querySelector('.review');
    reviewBtn.addEventListener('click', () => {  
      const app = document.querySelector('#app');
      app.innerHTML = ReviewPage();
    });
  }
  function navigateToBlogPage() {
    const reviewBtn = document.querySelector('.blog');
    reviewBtn.addEventListener('click', () => { 
      const app = document.querySelector('#app');
      app.innerHTML = BlogPage();
    });
  }
 

 