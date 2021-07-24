import AnimalCard from '../components/AnimalCard';

export default function AnimalCardsPage(animalCard) {
  console.log(animalCard)
    return `
    <div class='animal__cards_container'>
          ${AnimalCard(animalCard)};
        </div>
      `;
  }