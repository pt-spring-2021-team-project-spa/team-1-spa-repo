import iconFacebook1 from '../../images/iconFacebook1.jpg';
import iconTwitter1 from '../../images/iconTwitter1.jpg';
import iconInstagram1 from '../../images/iconInstagram1.jpg';
import iconYouTube1 from '../../images/iconYouTube1.jpg';
import iconLinkedIn1 from '../../images/iconLinkedIn1.jpg';

import iconFacebook2 from '../../images/iconFacebook2.jpg';
import iconTwitter2 from '../../images/iconTwitter2.jpg';
import iconInstagram2 from '../../images/iconInstagram2.jpg';
import iconYouTube2 from '../../images/iconYouTube2.jpg';
import iconLinkedIn2 from '../../images/iconLinkedIn2.jpg';

import "../../css/footerStyle.css";

export default function Footer() {
    return `
    <div class='learnMore'>
    <ul class='footer__menu'>
        <h2 class='footer__learnMore'>Learn More</h2>
        <ul class='aboutUs'>${AboutUsPage}</ul>
        <ul class='meetOurTeam'>${MeetOurTeamPage}</ul>
        <ul class='ourOffices'>${OurOfficesPage}</ul>
        <ul class='blogs'>${BlogsPage}</ul>
        <ul class='reviews'>${ReviewsPage}</ul>
    </ul>

    <ul class='footer__menu'>
        <h2 class='footer__getInvolved'>Get Involved</h2>
        <ul class='donate'>${DonatePage}</ul>
        <ul class='weAreHiring'>${WeAreHiringPage}</ul>
    </ul>

    <ul class='footer__menu'>
        <h2 class='footer__followJackrAcademyMedia'>Follow Jackr Academy Media</h2>
        <ul><img class='iconFacebook' src="${iconFacebook1}" alt='facebook'> <img class='iconFacebook' src="${iconFacebook2}" alt='facebook'> Facebook</img></ul>
        <ul><img class='iconTwitter' src="${iconTwitter1}" alt='twitter'> <img class='iconTwitter' src="${iconTwitter2}" alt='twitter'> Twitter</img></ul>
        <ul><img class='iconInstagram' src="${iconInstagram1}" alt='instagram'> <img class='iconInstagram' src="${iconInstagram2}" alt='instagram'> Instagram</img></ul>
        <ul><img class='iconYouTube' src="${iconYouTube1}" alt='youTube'> <img class='iconYouTube' src="${iconYouTube2}" alt='youTube'> YouTube</img></ul>
        <ul><img class='iconLinkedIn' src="${iconLinkedIn1}" alt='linkedIn'> <img class='iconLinkedIn' src="${iconLinkedIn2}" alt='linkedIn'> LinkedIn</img></ul>
    </ul>

    </div>
      <small>All &copy reserved WCCI-Team-One 2021</small>
      `;
  }