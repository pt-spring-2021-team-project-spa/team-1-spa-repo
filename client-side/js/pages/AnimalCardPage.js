import AnimalCard from '../components/AnimalCard.js';

export default function(animalCard) {
    return `
        <h1>Animal Card Page</h1>
        ${AnimalCard(animalCard)}
    `;
}