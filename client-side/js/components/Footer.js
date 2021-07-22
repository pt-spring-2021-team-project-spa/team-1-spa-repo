 import iconFacebook1 from '../images/iconFacebook1.jpg';
 import iconTwitter1 from '../images/iconTwitter1.jpg';
 import iconInstagram1 from '../images/iconInstagram1.jpg';
 import iconYouTube1 from '../images/iconYouTube1.jpg';
 


export default function Footer() {
  return`
    <div class='footer'>
     <ul class='footer__menu'>
        <h2 class='footer__followJackrAcademyMedia'>Follow JacKr Academy Media</h2>
        <ul><img class='iconFacebook' src='${iconFacebook1}' alt='facebook'> <img class='iconFacebook' src="iconFacebook2" alt='facebook'> Facebook</img></ul>
        <ul><img class='iconTwitter' src='${iconTwitter1}' alt='twitter'> <img class='iconTwitter' src="iconTwitter2" alt='twitter'> Twitter</img></ul>
        <ul><img class='iconInstagram' src='${iconInstagram1}' alt='instagram'> <img class='iconInstagram' src="iconInstagram2" alt='instagram'> Instagram</img></ul>
        <ul><img class='iconYouTube' src='${iconYouTube1}' alt='youTube'> <img class='iconYouTube' src="iconYouTube2" alt='youTube'> YouTube</img></ul>
        <ul><img class="fa fa-linkedin" aria-hidden="true">LinkedIn</img></ul>
    </ul>
    
    <small>&copy WCCI-Team-One 2021</small>
    </div>
      `;
  }

