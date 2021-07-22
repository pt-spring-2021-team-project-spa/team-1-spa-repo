import '../../css/weAreHiringStyle.css';
import HomePageHeader from '../components/HomePageHeader';
import Footer from '../components/Footer.js';

export default function WeAreHiringPage() {
    return `
    ${HomePageHeader()}
    <div class='weAreHiringPage'>
    <h1>We are Hiring</h1>
    <p>Thank you for considering JacKr Academy as a place to work. We feel strongly about hiring smart, passionate, creative people who 
    want to improve the media and technology landscape for kids, families, and schools. Here you will find answers to the most 
    commonly asked questions about the hiring process.</p>
    <br>
    <h2>How do I apply for a job?</h2>
    <p>All positions are posted on this website. Please click the job title to see full job description for that position as well as 
    specific instructions for applying.</p>
    <br>
    <h2>What is the process after an application is submitted?</h2>
    <p>Please note we cannot respond to every application.</p>
    <br>
    <p>1. Our HR team reviews applications to identify qualified candidates.</p>
    <p>2. Qualified candidates are invited to do a telephone screening.</p>
    <p>3. The most qualified candidates will be invited to an in-person interview. JacKr Academy typically conducts 2 to 3 rounds of 
    in-person interviews in the hiring process.</p>
    <p>4. References will be solicited from our final candidates. (Please note that some positions will require additional background checks.)</p>
    <p>5. A formal written job offer will be made to our top final candidate.</p>
    <br>
    <p>Here at JacKr Academy, we honor the diversity of our talented employees.</p>
    <br>
    <h1>Current Openings</h1>
    <br>
    <p>Singapore & Bali - Coming Soon</p>
    <p>Ohio - Coming Soon</p>
    </div>
    ${Footer()}
    `;
}