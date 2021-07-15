import HomePageHeader from '../components/HomePageHeader';
import Door from '../components/Door';


export default function HomePage() {
    return `
    <div class="center">
          ${HomePageHeader()}
          <div class="txt-hp">
          <h1 class="hp-title">CAN YOU NAME THAT YEAR</h1>
          </div>
         ${Door()}
          <div class="bottom">
          <h3 class="hp-choice"> CHOOSE A DOOR</h3>
          </div>
          </div>
          
    `;    
}