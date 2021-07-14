import Footer from '../components/Footer';
import HomePageHeader from '../components/HomePageHeader';

export default function HomePage() {
    return `
          ${HomePageHeader()}
          <div class="txt-hp">
          <h1 class="hp-title">CAN YOU NAME THAT YEAR</h1>
          </div>
          <img class='door' src='/images/door-b.jpg' alt='blue door' />
          <img class='door' src='/images/door-o.png' alt='orange door' />
          <img class='door' src='/images/door-y.jpg' alt='yellow door' />
          <div class="txt-hp">
          <h3 class="hp-choice"> CHOOSE A DOOR</h3>
          </div>
          ${Footer()}
    `;    
}