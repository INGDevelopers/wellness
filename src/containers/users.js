import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Table from '../components/table';
import NavBar from '../components/Navbar';

import ModalM from "../components/modalM";
import users from '../config/users';

const Users = () => {
  const title = ['Perfil', 'Correo', 'Nombre', 'Apellido', 'Historial'];
	const titleHistory = ['Intrumento', 'Nombre', 'Hora de inicio', 'Hora final'];

  const [listUsers, setListUsers] = useState([]);
	const [history, setHistory] = useState([]);

	const [show, setShow] = useState(false);

	const idUserSearch = sessionStorage.getItem('idUserSearch');

  useEffect(() => {
    users.getUsers().then((res) =>{
      setListUsers(res.res);
    });

		if(idUserSearch){
			users.getHistoryCreatedId(idUserSearch).then((res) =>{
				console.log(res);
				setHistory(res.res.historyCreated);
			});
		}
		
  },[idUserSearch]);
    

  return (
		<>
			<div className='div-principal-admin'>
				{/* <div className="div-button-a">
					<a href="/" className="button-primary">
						Atras
					</a>
				</div> */}
				<div className="title">
					<h2>Historial de usuarios</h2>
					<h6>
						Este historial contiene la informacion de todos los estudiantes y su
						historial de instrumentos
					</h6>
				</div>
				<Table table={'users'} title={title} field={listUsers} onClick={() => setShow(true)}/>
			</div>
			
      <ModalM show={show} onHide={() => setShow(false)} element={
				<Table table={'history'} title={titleHistory} field={history} />
			}/>
		</>
	);
}

export default Users;