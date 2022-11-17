import { useState, useEffect } from 'react';
import Table from '../components/table';
import NavBar from '../components/Navbar';

import requests from '../config/requests';

const Requests = () => {
  const title = ['Perfil', 'Correo', 'Nombre', 'Instrumento', 'Solicitud', 'Creacion', 'Modificacion', 'Autorizacion'];
  const [listRequests, setListRequests] = useState([]);

  useEffect(() => {
    requests.getRequests().then((res) =>{
      setListRequests(res.res);
    });
  },[]);
    

  return (
		<>
      <NavBar/>
			<div className='div-principal'>
				<div className="div-button-a">
					<a href="/" className="button-primary">
						Inicio
					</a>
				</div>
				<div className="title">
					<h2>Historial de solicitudes</h2>
					<h6>
						Este historial contiene la informacion de todas las solicitudes generadas por los estudiantes
					</h6>
				</div>
				<Table table={'requests'} title={title} field={listRequests} />
			</div>
		</>
	);
}

export default Requests;