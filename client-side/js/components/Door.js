import '../../css/doorStyle.css';
import doorImgB from '../images/door-b.jpg';
import doorImgO from '../images/door-o.png';
import doorImgY from '../images/door-y.jpg';

export default function Door() {
    return `    
<div class="images">
          <img class="blueD" src='${doorImgB}' alt='blue door' />
          <img class="orangeD" src='${doorImgO}' alt='orange door' />
          <img class="yellowD" src='${doorImgY}' alt='yellow door' />
        </div>
        `;
}
