export default function PaintingsPage(paintings) {
    return `
    <div id='met_museum__container'>
    <section class='painting__article_container'>
    <article class='painting__article'>
        ${paintings.map(painting => {
            return `
            ${painting.constituents.map((artist) => {
                return `
                <h2 id="artist__name">${artist.name}</h2>
                `
            }).join('')}
            <figure><img class='painting__image' src=${painting.primaryImage} alt='' /></figure>
            <div class='painting__article_info'>
            <div class='painting__article_data'>
            <h3 class="painting__title yomogi_black">Title: ${painting.title.toString()}</h3>
            <h3 class="painting__year_painted yomogi_red">Year Painted: ${painting.objectDate.toString()}</h3>
            <h3 class='painting__dimensions yomogi_black'>Painting Dimensions: ${painting.dimensions.toString()}</h3>
            </div>
            <div class='painting__article_description yomogi_black'>
                <h2 class='yomogi_black'>Description</h3>
                <p>Lorem ipsum dolor sit amet, <span class='rock_salt_red__styling'>consectetur adipiscing elit,</span> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation <span class='rock_salt_green__styling'>ullamco laboris nisi ut aliquip ex</span> ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore <span class='rock_salt_red__styling'>eu fugiat nulla pariatur.</span> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia <span class='rock_salt_black__styling'>deserunt mollit anim id est laborum.</span></p>
            </div>
            </div>
            `
        })}
        </article>
        </section>
        </div>
        `;
}