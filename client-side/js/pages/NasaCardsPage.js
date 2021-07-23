import '../../css/nasaCardsStyle.css';
import NasaCards from '../components/NasaCards.js';
import Footer from '../components/Footer.js';

export default function NasaCardsPage(nasaCards) {
    return `
    <div class='nasaCardsPage'>
    <h1>List of random Nasa info</h1>
    ${NasaCards(nasaCards)}
    </div>
    ${Footer()}
    `;
}