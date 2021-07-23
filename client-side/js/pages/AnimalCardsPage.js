// import '../../css/nasaCardsStyle.css';
import AnimalCards from '../components/AnimalCards.js';

export default function AnimalCardsPage(animalCards) {
    return `
    <div class='animalCardsPage'>
    <h1>random extinct animals</h1>
    ${AnimalCards(animalCards)}
    </div>
    `;
}