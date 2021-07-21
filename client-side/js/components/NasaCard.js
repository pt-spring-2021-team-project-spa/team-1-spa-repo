export default function NasaCard(nasaCard) {
    return `
    <div class='nasa__card_container'>
        <input type='hidden' id='nasaCardId' value=${nasaCard.data[0].url} />
        <h2 class='nasa__card_title'>${nasaCard.data[0].title}</h2>
        <h3>NASA ID: ${nasaCard.data[0].nasa_id}</h3>
        <h3>Date created: ${nasaCard.data[0].date_created}</h3>
        <div class='Nasa__card_img'><img src=${nasaCard.links[0].href} alt='' /></div>
        <p class='Nasa__card_desc'>Description: ${nasaCard.data[0].description}</p>
    </div>
    `;
}