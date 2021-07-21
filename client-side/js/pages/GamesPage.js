import HomePageHeader from '../components/HomePageHeader';

export default function GamesPage() {
    return `
    ${HomePageHeader()}
    <h2>Welcome to the Games Page</h2>
    <h3>Available Games</h3>
    <a href="https://metmuseum.github.io/#search" target="blank">The Metropolitan Museum of Art Collection API</a>
    <p>The Metropolitan Museum of Art presents over 5,000 years of art from around the world for everyone to 
    experience and enjoy. The Museum lives in two iconic sites in New York City—The Met Fifth Avenue and The Met 
    Cloisters. Millions of people also take part in The Met experience online.</p>
    `;
}