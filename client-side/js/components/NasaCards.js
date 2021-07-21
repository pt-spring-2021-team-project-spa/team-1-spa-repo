import '../../css/nasaCardsStyle.css';
import NasaCard from './NasaCard';

export default function NasaCards(nasaCards) {
    return `
    <div class='nasa__cards_container'>
      ${nasaCards.collection.items
        .map((nasaCard) => {
          return `
          ${NasaCard(nasaCard)}
            `;
        })
        .join('')}
        </div>
      `;
  }