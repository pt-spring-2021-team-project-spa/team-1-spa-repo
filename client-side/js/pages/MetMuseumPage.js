import MetMuseum from '..components/MetMuseum.js';

export default function MetMuseum(metMuseum) {
    return `
    <h1>You Chose the Met Museum!</h1>
    <div class'met_museum__container'>
    ${metMuseum.results.map((metMuseum) => {
        console.log(metMuseum);
    }).join('')}
    </div>
    ${MetMuseum(metMuseum)}
    `;
}