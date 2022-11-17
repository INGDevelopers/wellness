import {useState} from 'react';
import {Buffer} from 'buffer';
import btoa from 'btoa';

import './styles/card.css';

import Foto from '../images/notFound.png';

const CardI = (props) => {

  const [isLoading, setIsLoading] = useState(false);

  const encodedData = window.btoa(props.data);
  // console.log(`data:${props.contentType};base64,${encodedData}`)
  // console.log(Buffer.from(props.data).toString('base64'));

  return (
      <div className="card-style">
        <div className="imgBx">
          {/* <a href={linkRepo}><img src={linkImg}/></a> */}
          {/* <img src="data:image/<%=image.img.contentType%>;base64,<%=image.img.data.toString('base64')%>"> */}
          <img src={Foto}/>
          {/* <img src={`data:image/jpg;base64,${encodedData}`} /> */}

        </div>
        <div className="content">
          <h2>{props.title}</h2>
          <p>
            Disponible {props.disp} <br/>
            En uso {props.inUse}
          </p>
          <div className='card-button'>
            {
              isLoading?
                <button className='button-primary' onClick={''}>Solicitando...</button>
              : 
              <button className='button-primary' onClick={''}>Solicitar</button>
            }
          </div>
        </div>
      </div>
  );
}

export default CardI;