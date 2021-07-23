import '../../css/nasaCardsStyle.css';
import NasaCards from '../components/NasaCards.js';

export default function NasaCardsPage(nasaCards) {
    return `
    <div class='nasaCardsPage'>
    <h1>List of random Nasa info</h1>
    ${NasaCards(nasaCards)}
    </div>
    `;
}