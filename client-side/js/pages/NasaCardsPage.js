import '../../css/nasaCardsStyle.css';
import NasaCards from '../components/NasaCards.js';

export default function NasaCardsPage(nasaCards) {
    return `
    <div class='nasaCardsPage'>
    <h1>List of NASA Astronauts in Apollo mission Page</h1>
    ${NasaCards(nasaCards)}
    </div>
    `;
}