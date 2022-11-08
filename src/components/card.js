import {Card, Button} from 'react-bootstrap';


import './styles/card.css';

import Foto from '../images/notFound.png';

const CardI = (props) => {
  return (
      <div className="card">
        <div className="imgBx">
          {/* <a href={linkRepo}><img src={linkImg}/></a> */}
          <img src={Foto}/>
        </div>
        <div className="content">
          <h2>{props.title}</h2>
          <p>
            Disponible {props.disp} <br/>
            En uso {props.inUse}
          </p>
          <div className='card-button'>
            <button className='button-primary' onClick={''}>Solicitar</button>
          </div>
        </div>
      </div>
  );
}

export default CardI;