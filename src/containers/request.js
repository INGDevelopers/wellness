import { useState, useEffect } from 'react';
import Table from '../components/table';
import requests from '../config/requests';

import ModalM from '../components/modalM';
import Loader from '../components/loader';

const Requests = () => {
	const title = ['Perfil', 'Correo', 'Nombre', 'Instrumento', 'Solicitud', 'Creacion', 'Modificacion', 'Autorizacion'];
	const [listRequests, setListRequests] = useState([]);
	const [show, setShow] = useState(false);

	const [isLoading, setIsLoading] = useState(false);
	
	const id = sessionStorage.getItem('idRequest');
	

	useEffect(() => {
		requests.getRequests().then((res) => {
			setListRequests(res.res);
			
		});
	}, [isLoading, id]);

	const request = (id, data) => {
		setIsLoading(true);

		requests.updateRequest(id, {requ: data}).then((res) => {
			if(res.success)
				setIsLoading(false);
		})
	}

	return (
		<>
			<div className='div-principal-admin'>
				{/* <div className="div-button-a">
					<a href="/" className="button-primary">
						Inicio
					</a>
				</div> */}
				{
					isLoading && <Loader/>
				}
				<div className="title">
					<h2>Historial de solicitudes</h2>
					<h6>
						Este historial contiene la informacion de todas las solicitudes generadas por los estudiantes
					</h6>
				</div>

				<Table table={'requests'} title={title} field={listRequests} onClick={() => setShow(true)} />

			</div>

			<ModalM show={show} onHide={() => setShow(false)} size="sm" 
				elementA={<button  className="button-primary" onClick={() => request(id,'accepted')}>Aceptar</button>} 
				elementD={<button style={{ backgroundColor: "red", borderColor: "red" }} className="button-primary" onClick={() => request(id,'denied')}>Denegar</button>}/>
		</>
	);
}

export default Requests;