export default function AnimalCard(animalCard) {
    return `
    <div class='animal__card_container'>
        <h2 class='animal__card_title'>${animalCard.animalName}</h2>
       
        <p class='animal__card_desc'>Description: ${animalCard.description}</p>
    </div>
    `;
}