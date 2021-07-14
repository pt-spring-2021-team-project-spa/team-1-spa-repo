
export default function NasaPage(astronaut) {
    return `
    <h1>You Chose NASA!</h1>
    <div class'astronaut__container'>
    ${astronaut.results.map((astronaut) => {
        console.log(astronaut);
    }).join('')}
    </div>
    ${NASA(astronaut)}
    `;
}