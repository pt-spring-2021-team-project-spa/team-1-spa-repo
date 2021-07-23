import '../../css/meetOurTeamStyle.css';

export default function AnimalsPage() {
    return `
    <h1>Information About Extinct Animals</h1>
    ${animals.map(animal => {
        return `
        <li class-"animals-list__name">${animal.name}</li>
        `;
    }).join('')}
    `;
}