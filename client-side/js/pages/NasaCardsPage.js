import '../../css/nasaCardsStyle.css';
import NasaCards from '../components/NasaCards.js';
import Footer from '../components/Footer.js';

export default function NasaCardsPage(nasaCards) {
    return `
    <div class='nasaCardsPage'>
    <h1>List of NASA Astronauts in Apollo mission Page</h1>
    ${NasaCards(nasaCards)}
    </div>
    ${Footer()}
    `;
}