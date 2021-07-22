  
 import iconFacebook1 from '../images/iconFacebook1.jpg';
 import iconTwitter1 from '../images/iconTwitter1.jpg';
 import iconInstagram1 from '../images/iconInstagram1.jpg';
 import iconYouTube1 from '../images/iconYouTube1.jpg';
 import iconFacebook2 from '../images/iconFacebook2.jpg';
 import iconTwitter2 from '../images/iconTwitter2.jpg';
 import iconInstagram2 from '../images/iconInstagram2.jpg';
 import iconYouTube2 from '../images/iconYouTube2.jpg';
 
export default function Footer() {
  return`
    
     <ul class='footer__menu'>
        <h2 class='footer__followJackrAcademyMedia'>Follow JacKr Academy Media</h2>
        <ul><img class='iconFacebook' src='${iconFacebook1}' alt='facebook'> <img class='iconFacebook' src='${iconFacebook2}' alt='facebook' />Facebook</ul>
        <ul><img class='iconTwitter' src='${iconTwitter1}' alt='twitter'> <img class='iconTwitter' src='${iconTwitter2}' alt='twitter' />Twitter</ul>
        <ul><img class='iconInstagram' src='${iconInstagram1}' alt='instagram'> <img class='iconInstagram' src='${iconInstagram2}' alt='instagram' />Instagram</ul>
        <ul><img class='iconYouTube' src='${iconYouTube1}' alt='youTube'> <img class='iconYouTube' src='${iconYouTube2}' alt='youTube' />YouTube</ul>
        <ul><img class="fa fa-linkedin" aria-hidden="true">LinkedIn</img></ul>
    </ul>
    <small>&copy WCCI-Team-One 2021</small>
    
      `;
  }