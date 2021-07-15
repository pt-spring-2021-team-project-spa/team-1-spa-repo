import MetMuseum from '../components/MetMuseum.js';
import MetMuseumQuestions from '../components/MetMuseumQuestions.js';

export default function MetMuseum(paintings) {
  return `
  <div class='paintings__container'>
  ${paintings.results
    .map((painting) => {
      return `
      <div class='painting__article_container'>
          <h3>${painting.name}</h3>
          <p>Year Finished: ${painting.year_finished}</p>
          <p>Time Period: ${painting.time_period}</p>
          <p>Description: ${painting.decription}</p>
          <h3>Other Paintings:</h3>
          ${painting.painting
            .map((painting) => {
              return `
                  <p>${painting}</p>
              `;
            })
            .join('')}
            </div>
            `;
          })
          .join('')}
          </div>`
}