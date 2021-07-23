import NasaCard from '../components/NasaCard.js';
import Footer from '../components/Footer.js';

export default function(nasaCard) {
    return `
        <h1>NASA Card Page</h1>
        ${NasaCard(nasaCard)}
        ${Footer()}
    `;
}