import HomePageHeader from '../components/HomePageHeader';
import Doors from '../components/Door.js'; 

export default function HomePage() {
    return `
    <body onclick="myFunction(event)">
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

          `;
}