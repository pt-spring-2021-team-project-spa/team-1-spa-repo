import HomePageHeader from '../components/HomePageHeader';
import Doors from '../components/Door.js'; 
import Footer from '../components/Footer.js';

export default function HomePage() {
    return `
        ${HomePageHeader()}
          <p class="jackr center"> JACKR ACADEMY PRESENTS</p>
          <div class='center'>
           <div class="txt-hp">
          <h1 class="hp-title">CAN YOU NAME THAT YEAR</h1>
          </div>
          ${Doors()}
          <div class="txt-hp bottom">
          <h3 class="hp-choice"> CHOOSE A DOOR</h3>
          </div>
          </div>
          ${Footer()}
          `;
}
