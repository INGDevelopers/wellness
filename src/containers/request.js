import { useState, useEffect } from 'react';
import Table from '../components/table';
import ModalR from "../components/modalR";
import requests from '../config/requests';
import Request from '../components/Request';
const Requests = () => {
	const title = ['Perfil', 'Correo', 'Nombre', 'Instrumento', 'Solicitud', 'Creacion', 'Modificacion', 'Autorizacion'];
	const [listRequests, setListRequests] = useState([]);
	const [show, setShow] = useState(false);
	useEffect(() => {
		requests.getRequests().then((res) => {
			setListRequests(res.res);
		});
	}, []);


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

			<ModalR show={show} onHide={() => setShow(false)} element={<Request />} />
		</>
	);
}

export default Requests;