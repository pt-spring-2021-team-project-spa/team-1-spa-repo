import '../../css/ourOfficesStyle.css';
import HomePageHeader from '../components/HomePageHeader';
import Footer from '../components/Footer.js';

export default function OurOfficesPage() {
    return `
    ${HomePageHeader()}
        <div class='ourOfficesPage'>
        <h1>Regional Offices</h1>
        <h2>Global partnership for positive impact</h2>
        <p>For more than 5 years, JacKr Academy has galvanized millions of parents, educators, industry partners, and policymakers 
        around a powerful idea: Build a world that works better for kids. Our regional offices lead that charge by forming on-the-ground 
        partnerships and expanding our reach so that kids, families, and schools everywhere have a trusted resource in today's 
        fast-changing digital landscape. Currently we have offices in the following location. 
        </p>
        <ul><img class='Ohio' src='ohio' alt='Ohio'> Ohio</img></ul>
        <ul><img class='Hawaii' src='hawaii' alt='Hawaii'> Hawaii</img></ul>
        <ul><img class='Singapore' src='singapore' alt='Singapore'> Singapore</img></ul>
        <ul><img class='Bali' src='bali' alt='Bali'> Bali</img></ul>
        </div>
        ${Footer()}
    `;
}