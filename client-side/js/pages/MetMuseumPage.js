import MetMuseum from '../components/MetMuseum.js';

export default function MetMuseum(paintings) {
    return `
  <h1>You Chose the Met Museum</h1>
  <section class='met_museum__description_container'>
  <div class='met_museum__description_article'>
      <p>Some placeholder stuff to talk about how cool the MetMuseum is</p>
  </div>
  </section>
    ${MetMuseum(paintings)}
    `
}