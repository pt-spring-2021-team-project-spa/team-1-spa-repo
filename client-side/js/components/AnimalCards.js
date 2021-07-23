// import '../../css/nasaCardsStyle.css';
import AnimalCard from './AnimalCard';

export default function AnimalCards(animalCards) {
    return `
    <div class='animal__cards_container'>
      ${animalCards.collection.items
        .map((animalCard) => {
          return `
          ${AnimalCard(animalCard)}
            `;
        })
        .join('')}
        </div>
        </div>
      `;
  }