import { useState, useEffect } from 'react';
import Table from '../components/table';
import NavBar from '../components/Navbar';

import ModalM from "../components/modalM";
import users from '../config/users';

const Users = () => {
  const title = ['Perfil', 'Correo', 'Nombre', 'Apellido', 'Historial'];
  const [listUsers, setListUsers] = useState([]);

	const [show, setShow] = useState(false);

  useEffect(() => {
    users.getUsers().then((res) =>{
      setListUsers(res.res);
    });
  },[]);
    

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
			
      <ModalM show={show} onHide={() => setShow(false)} element={<Table table={'users'} title={title} field={listUsers} />}/>
		</>
	);
}

export default Users;