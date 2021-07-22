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
import Footer from '../components/Footer.js';

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
        <img class="reviewSS " src='${BlogParty1}' alt='' />
        <img class="reviewSS " src='${BlogParty2}' alt='' />
        <img class="reviewSS " src='${BlogParty3}' alt='' />
        <img class="reviewSS " src='${BlogParty4}' alt='' />
        <img class="reviewSS " src='${BlogParty5}' alt='' />
        </div>
        </div>
        </div>
        <hr class="roundedBlog">
<div class="bookClub item9">
<h2 class="bookText">GET YOUR READ ON ... ON US!</h2>
<img class="book" src='${Book1}' alt='' />
<img class="book" src='${Book2}' alt='' />
<img class="book" src='${Book3}' alt='' />
</div>
<hr class="roundedBlog">
<div class="bookClub">
<h2 class="bookText2">BECAUSE WE CARE</h2>
        <img class="blogSS " src='${BlogOther1}' alt='' />
        <img class="blogSS " src='${BlogOther2}' alt='' />
        <img class="blogSS " src='${BlogOther3}' alt='' />
        <img class="blogSS " src='${BlogOther4}' alt='' />
        <img class="blogSS " src='${BlogOther5}' alt='' />
        <img class="blogSS " src='${BlogOther6}' alt='' />
        <img class="blogSS " src='${BlogOther7}' alt='' />
       </div> 
       <hr class="roundedBlog">
       <h2 class="bookText3">HIT OUR SOCIALS</h2>
      <div class="blogInsta">
      <img class="blogI" src='${JackrInsta1}' alt='' />
      <img class="blogI" src='${JackrInsta2}' alt='' />
      <img class="blogI" src='${JackrInsta3}' alt='' />
      <img class="blogI" src='${JackrInsta4}' alt='' />
      <img class="blogI" src='${JackrInsta5}' alt='' />
      <img class="blogI" src='${JackrInsta6}' alt='' />
      <img class="blogI" src='${JackrInsta7}' alt='' />
      <img class="blogI" src='${JackrInsta8}' alt='' />      
       <p class="bookText4">WE INSTA!</p>
       </div>
       <div class="blogTwit">
       <img class="blogT " src='${JackrTwit1}' alt='' />
       <img class="blogT " src='${JackrTwit2}' alt='' />
       <img class="blogT " src='${JackrTwit3}' alt='' />
       <img class="blogT " src='${JackrTwit4}' alt='' />
       <img class="blogT " src='${JackrTwit5}' alt='' />
        <p class="bookText4">WE TWEET!</p>
       </div>
       </div>
       ${Footer()}
    `;
}