import { useState, useEffect } from 'react';
import Table from '../components/table';
import requests from '../config/requests';
import Request from '../components/Request';
import ModalM from '../components/modalM';

const Requests = () => {
	const title = ['Perfil', 'Correo', 'Nombre', 'Instrumento', 'Solicitud', 'Creacion', 'Modificacion', 'Autorizacion'];
	const [listRequests, setListRequests] = useState([]);
	const [show, setShow] = useState(false);

	const [isLoading, setIsLoading] = useState(false);
	
	const id = sessionStorage.getItem('idRequest');
	console.log(id)

	useEffect(() => {
		requests.getRequests().then((res) => {
			setListRequests(res.res);
			console.log(res.res)
		});
	}, [isLoading, id]);

	const request = (id, data) => {
		setIsLoading(true)

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
				<div className="title">
					<h2>Historial de solicitudes</h2>
					<h6>
						Este historial contiene la informacion de todas las solicitudes generadas por los estudiantes
					</h6>
				</div>

				<Table table={'requests'} title={title} field={listRequests} onClick={() => setShow(true)} />

			</div>

			<ModalM show={show} onHide={() => setShow(false)} 
				elementA={<button  className="button-primary" onClick={() => request(id,'accepted')}>Aceptar</button>} 
				elementD={<button style={{ backgroundColor: "red", borderColor: "red" }} className="button-primary" onClick={() => request(id,'denied')}>Denegar</button>}/>
		</>
	);
}

export default Requests;