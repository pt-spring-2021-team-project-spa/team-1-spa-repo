import '../../css/reviewStyle.css';
import ReviewBG from '../images/Review_img.jpg';
import Review1 from '../images/review_1.png';
import Review2 from '../images/review_2.png';
import Review3 from '../images/review_3.png';
import Review4 from '../images/review_4.png';
import Review5 from '../images/review_5.png';
import Review6 from '../images/review_6.png';
import Review7 from '../images/review_7.png';
import Review8 from '../images/review_8.png';
import Review9 from '../images/review_9.png';
import Review10 from '../images/review_10.png';
import Insta1 from '../images/social_insta_1.png';
import Insta2 from '../images/social_insta_2.png';
import Insta3 from '../images/social_insta_3.png';
import Insta4 from '../images/social_insta_4.png';
import Insta5 from '../images/social_insta_5.png';
import Insta6 from '../images/social_insta_6.png';
import Insta7 from '../images/social_insta_7.png';
import Insta8 from '../images/social_insta_8.png';
import Insta9 from '../images/social_insta_9.png';
import Twit1 from '../images/social_t_1.png';
import Twit2 from '../images/social_t_2.png';
import Twit3 from '../images/social_t_3.png';
import Twit4 from '../images/social_t_4.png';
import Twit5 from '../images/social_t_5.png';
import Twit6 from '../images/social_t_6.png';
import Twit7 from '../images/social_t_7.png';
import Twit8 from '../images/social_t_8.png';
import Twit9 from '../images/social_t_9.png';
import HomePageHeader from '../components/HomePageHeader';

export default function ReviewPage() {
    return `
    ${HomePageHeader()}
<div class="top-image">
        <div class="top-text">
            <h2>"LOOK WHO SPILLED THE BEANS"</h2>
        </div>
    </div>
    <hr class="rounded">
    <div class="flexLine">
    <h2 class="textAtTop">We LOVE hearing about your experiences!</h2>
    <div class='reviewImg1">
        <img class="reviewSS " src='${Review1}' alt='' />
        <img class="reviewSS " src='${Review6}' alt='' />
        </div>
        <div id="slideshow item2" class="slideshow" data-component="slideshow">
        <div class="slideShowList" role="list">
          <div class="slide">
            <img class="reviewSlide" src="${Review2}" alt="">
          </div>
          <div class="slide">
            <img class="reviewSlide" src="${Review3}" alt="">
          </div>
          <div class="slide">
            <img class="reviewSlide" src="${Review9}" alt="">
          </div>
          <div class="slide">
            <img class="reviewSlide" src="${Review10}" alt="">
          </div>
          <div class="slide">
            <img class="reviewSlide" src="${Review5}" alt="">
          </div>
          <div class="slide">
            <img class="reviewSlide" src="${Review4}" alt="">
          </div>
          <div class="slide">
            <img class="reviewSlide" src="${Review1}" alt="">
          </div>
          <div class="slide">
            <img class="reviewSlide" src="${Review7}" alt="">
          </div>
        </div>
       </div>
        <div class='reviewImg2">
        <img class="reviewSS " src='${Review7}' alt='' />
        <img class="reviewSS " src='${Review8}' alt='' />
        </div>
        <h2 class="textAtTop"> See what everyone has to say about JacKr Academy</h2>
        </div>
      <hr class="rounded">
      <h2 class="textAtMid">THIS COULD BE YOU! TAG #JACKRACADEMY OR #NAMETHATYEAR ON YOUR NEXT POST!</h2>
      <div class="flexLine">
      <div class="reviewInstaImg1>
      <img class="reviewS" src='${Insta1}' alt='' />
      <img class="reviewS" src='${Insta2}' alt='' />
      </div>
      <div id="slideshow item3" class="slideshow"data-component="slideshow">
      <div role="list">     
        <div class="slide">
          <img class="instaSlide" src="${Insta5}" alt="">
        </div>
        <div class="slide">
          <img class="instaSlide" src="${Insta6}" alt="">
        </div>
        <div class="slide">
          <img class="instaSlide" src="${Insta7}" alt="">
        </div>
        <div class="slide">
          <img class="instaSlide" src="${Insta8}" alt="">
        </div>
        <div class="slide">
          <img class="instaSlide" src="${Insta9}" alt="">
        </div>
        <div class="slide">
          <img class="instaSlide" src="${Insta3}" alt="">
        </div>
        <div class="slide">
          <img class="instaSlide" src="${Insta1}" alt="">
        </div>
      </div>
      </div>
      <div class="reviewInstaImg2>
      <img class="reviewS" src='${Insta3}' alt='' />
      <img class="reviewS" src='${Insta4}' alt='' />
      </div>
      </div>
      <hr class="rounded">
      <h2 class="textAtBottom">YOU JUST MIGHT SEE YOURSELF ON OUR PAGE! </h2>
      <div class="flexLine">
      <div class="reviewTwitImg1">
      <img class="twit" src='${Twit1}' alt='' />
      <img class="twit" src='${Twit2}' alt='' />
      </div>
      <div id="slideshow item7" class="slideshow" data-component="slideshow">
      <div role="list">
        <div class="slide">
          <img class="twitSlide" src="${Twit5}" alt="">
        </div>
        <div class="slide">
          <img class="twitSlide" src="${Twit6}" alt="">
        </div>
        <div class="slide">
          <img class="twitSlide" src="${Twit7}" alt="">
        </div>
        <div class="slide">
          <img class="twitSlide" src="${Twit8}" alt="">
        </div>
        <div class="slide">
          <img class="twitSlide" src="${Twit9}" alt="">
        </div>
        <div class="slide">
        <img class="twitSlide" src="${Twit1}" alt="">
      </div>
      <div class="slide">
        <img class="twitSlide" src="${Twit3}" alt="">
      </div>
      </div>
      <div class="reviewTwitImg2">
      <img class="twit" src='${Twit3}' alt='' />
      <img class="twit" src='${Twit4}' alt='' />
      </div>
    </div>
       `;
}