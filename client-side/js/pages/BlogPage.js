import '../../css/blogStyle.css';
import BlogBG from '../images/blogBG.jpg';
import BlogParty1 from '../images/blogParty_1.jpg';
import BlogParty2 from '../images/blogParty_2.PNG';
import BlogParty3 from '../images/blogParty_3.PNG';
import BlogParty4 from '../images/blogParty_4.PNG';
import BlogParty5 from '../images/blogParty_5.PNG';
import Book1 from '../images/book1.PNG';
import Book2 from '../images/book2.PNG';
import Book3 from '../images/book3.PNG';
import BlogOther1 from '../images/blogOther_1.PNG';
import BlogOther2 from '../images/blogOther_2.PNG';
import BlogOther3 from '../images/blogOther_3.PNG';
import BlogOther4 from '../images/blogOther_4.PNG';
import BlogOther5 from '../images/blogOther_5.PNG';
import BlogOther6 from '../images/blogOther_6.PNG';
import BlogOther7 from '../images/blogOther_7.PNG';
import BlogOther8 from '../images/blogOther_8.PNG';
import BlogOther9 from '../images/blogOther_9.PNG';
import BlogOther10 from '../images/blogOther_10.PNG';
import BlogOther11 from '../images/blogOther_11.PNG';
import BlogOther12 from '../images/blogOther_12.PNG';
import JackrInsta1 from '../images/Jackr_insta_1.png';
import JackrInsta2 from '../images/Jackr_insta_2.png';
import JackrInsta3 from '../images/Jackr_insta_3.png';
import JackrInsta4 from '../images/Jackr_insta_4.png';
import JackrInsta5 from '../images/Jackr_insta_5.png';
import JackrInsta6 from '../images/Jackr_insta_6.png';
import JackrInsta7 from '../images/Jackr_insta_7.png';
import JackrInsta8 from '../images/Jackr_insta_8.png';
import JackrInsta9 from '../images/Jackr_insta_9.png';
import JackrInsta10 from '../images/Jackr_insta_10.png';
import JackrTwit1 from '../images/Jackr_Twitter_1.png';
import JackrTwit2 from '../images/Jackr_Twitter_2.png';
import JackrTwit3 from '../images/Jackr_Twitter_3.png';
import JackrTwit4 from '../images/Jackr_Twitter_4.png';
import JackrTwit5 from '../images/Jackr_Twitter_5.png';
import JackrTwit6 from '../images/Jackr_Twitter_6.png';
import JackrTwit7 from '../images/Jackr_Twitter_7.png';
import JackrTwit8 from '../images/Jackr_Twitter_8.png';
import JackrTwit9 from '../images/Jackr_Twitter_9.png';
import JackrTwit10 from '../images/Jackr_Twitter_10.png';
import HomePageHeader from '../components/HomePageHeader';

export default function BlogPage() {
    return `
    ${HomePageHeader()}
    <div class="top-imageBlog">
    <div class="blogTopText1">
        <h2>BREAK TIME</h2>
    </div>
</div>
    <hr class="rounded">
    <div class="blogGrid1">
    <div class="item8">
    <h2 class="blogTopText"> ANYONE WANT TO PARTY?</h2>
    <div class="images">
        <img class="reviewSS1 " src='${BlogParty1}' alt='' />
        <img class="reviewSS1 " src='${BlogParty2}' alt='' />
        <img class="reviewSS1 " src='${BlogParty3}' alt='' />
        <img class="reviewSS1 " src='${BlogParty4}' alt='' />
        <img class="reviewSS1 " src='${BlogParty5}' alt='' />
        </div>
        </div>
        </div>
        <hr class="roundedBlog">
<section class="bookGrid">
<div class="bookClub item9">
<h2 class="bookText">GET YOUR READ ON ... ON US!</h2>
<p class="bookTextBottom">CLICK ON ONE OF OUR BOOKS OF THE MONTH</p>
<div> <img class="book" src='${Book1}' alt='' /> </div>
<div><img class="book" src='${Book2}' alt='' /></div>
<div><img class="book" src='${Book3}' alt='' /></div>
</div>
</section>
<h2 class="bookText2">BECAUSE WE CARE</h2>
<p class="over"> CHECK OUT OUR INTERESTING BLOGS!</p>
<div class="flexLine">
<div class="move">
        <img class="blogSS " src='${BlogOther1}' alt='' />
        <img class="blogSS " src='${BlogOther2}' alt='' />
        <img class="blogSS " src='${BlogOther3}' alt='' />
        <img class="blogSS " src='${BlogOther4}' alt='' />
        </div>
        <div id="slideshow item3" class="slideshow slideshow3" data-component="slideshow">
      <div role="list">     
        <div class="slide">
          <img class="blogOtherSlide" src="${BlogOther5}" alt="">
        </div>
        <div class="slide">
          <img class="blogOtherSlide" src="${BlogOther6}" alt="">
        </div>
        <div class="slide">
          <img class="blogOtherSlide" src="${BlogOther7}" alt="">
        </div>
        <div class="slide">
          <img class="blogOtherSlide" src="${BlogOther8}" alt="">
        </div>
        <div class="slide">
          <img class="blogOtherSlide" src="${BlogOther9}" alt="">
        </div>
        <div class="slide">
        <img class="blogOtherSlide" src="${BlogOther10}" alt="">
      </div>
      <div class="slide">
        <img class="blogOtherSlide" src="${BlogOther11}" alt="">
      </div>
      <div class="slide">
        <img class="blogOtherSlide" src="${BlogOther12}" alt="">
      </div>
      </div>
       </div> 
       </div>
       <hr class="roundedBlog">
       <h2 class="bookText3">HIT OUR SOCIALS</h2>
       <p class="bookText3Bottom"> WE FOLLOW BACK</p>
      <div class="blogInsta">
      <div class="down">
      <img class="blogI" src='${JackrInsta1}' alt='' />
      <img class="blogI" src='${JackrInsta2}' alt='' />  
        </div> 
       <p class="bookText41">WE INSTA!</p>
       <div id="slideshow item3" class="slideshow slideshow4" data-component="slideshow">
      <div role="list">     
        <div class="slide">
          <img class="blogInstaSlide" src="${JackrInsta3}" alt="">
        </div>
        <div class="slide">
          <img class="blogInstaSlide" src="${JackrInsta4}" alt="">
        </div>
        <div class="slide">
          <img class="blogInstaSlide" src="${JackrInsta5}" alt="">
        </div>
        <div class="slide">
          <img class="blogInstaSlide" src="${JackrInsta6}" alt="">
        </div>
        <div class="slide">
          <img class="blogInstaSlide" src="${JackrInsta7}" alt="">
        </div>
        <div class="slide">
          <img class="blogInstaSlide" src="${JackrInsta8}" alt="">
        </div>
        <div class="slide">
          <img class="blogInstaSlide" src="${JackrInsta9}" alt="">
        </div>
        <div class="slide">
          <img class="blogInstaSlide" src="${JackrInsta10}" alt="">
        </div>
      </div>
       </div>
       <div class="blogTwit">
       <img class="blogT" src='${JackrTwit3}' alt='' />
       <img class="blogT" src='${JackrTwit2}' alt='' />
        <div id="slideshow item3" class="slideshow slideshow5" data-component="slideshow">
      <div role="list">     
        <div class="slide">
          <img class="blogTSlide" src="${JackrTwit8}" alt="">
        </div>
        <div class="slide">
          <img class="blogTSlide" src="${JackrTwit4}" alt="">
        </div>
        <div class="slide">
          <img class="blogTSlide" src="${JackrTwit5}" alt="">
        </div>
        <div class="slide">
          <img class="blogTSlide" src="${JackrTwit6}" alt="">
        </div>
        <div class="slide">
          <img class="blogTSlide" src="${JackrTwit7}" alt="">
        </div>
        <div class="slide">
          <img class="blogTSlide" src="${JackrTwit1}" alt="">
        </div>
        <div class="slide">
          <img class="blogTSlide" src="${JackrTwit9}" alt="">
        </div>
        <div class="slide">
          <img class="blogTSlide" src="${JackrTwit10}" alt="">
        </div>
      </div>
      <p class="bookText4">WE TWEET!</p>
       </div>
       </div>
    `;
}