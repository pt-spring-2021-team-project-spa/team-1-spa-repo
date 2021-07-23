import Door from '../components/Door';
export default function HomePage() {
  return `
  <h1>Welcome to JacKr Academy</h1>
  <h3>This app contains info from NASA, MetGala, and Animal API</h3>
  <div class="center">
      <div class="txt-hp">
          <h1 class="hp-title">CAN YOU NAME THAT YEAR</h1>
      </div>
      ${Door()}
      <div class="bottom">
          <h3 class="hp-choice"> CHOOSE A DOOR</h3>
      </div>
      `};