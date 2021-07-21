import apiActions from '../api-actions/api-actions.js';

export default function PaintingsPage(paintings) {
    console.log(paintings)
    return `
    <div id='met_museum__container' class='flex_column flex_center'>
    <div id="met_museum__heading">MetMuseum</div>
        ${paintings.map( painting => {
            return `
            ${painting.constituents.map((artist) => {
                return `
                <div class='painting__tile_container'>
                <h2>${artist.name}</h2>
                <h4>Occupation: ${artist.role}</h4>
                </div>
                `
            }).join('')}
            <p class="painting__title">Title: ${painting.title.toString()}</p>
            <h3>Year Painted: ${painting.objectDate.toString()}</h3>
            ${painting.measurements.map((measurements) => {
                console.log(measurements)
            })}
            ${painting.dimensions.toString((dimensions) => {
                console.log(dimensions)
            })}
            `
        })}
            
        </div>
        `;
}