
export default function ReviewsPage() {
    return `
    ${HomePageHeader()}
    <img class="mySlides" src="images/door-b.jpg">
    <img class="mySlides" src="images/door-o.png">
    <img class="mySlides" src="images/door-b.jpg">
    <img class="mySlides" src="images/door-o.png">

    <button class="w3-button w3-black w3-display-left" onclick="plusDivs(-1)">&#10094;</button>
    <button class="w3-button w3-black w3-display-right" onclick="plusDivs(1)">&#10095;</button>

    ${Footer()}
    `;
}
