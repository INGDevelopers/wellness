import {useState, useEffect} from 'react';

import '../components/styles/profile.css';

import NavBar from '../components/Navbar';
import Table from '../components/table';

import ProfileImg from '../images/notFound.png';


import users from '../config/users';


const Profile = () => {
  const [data, setData] = useState({});
  const title = ['Intrumento', 'Nombre', 'Hora de inicio', 'Hora final'];

  useEffect(() => {
    const getApi = async()=>{
      await users.getUserById().then((res) => {
        setData(res.res);
        console.log(res.res);
      });
    }
    getApi();
  },[]);

  return(
    <>
      <NavBar/>
      <div className="div-principal">
        <div className='div-button-a'>
          <a href='/' className="button-primary">Atras</a>
        </div>
        <div>
          <idv className="profile-image">
            <img src={ProfileImg}/>
          </idv>
          <div className="profile-info">
            <h2>{data.name1} {data.name2} {data.lastName1} {data.lastName2}</h2>
            <button className="button-primary">Editar</button>
          </div>
        </div>

        <div className='profile-info-data'>
          <div>
            <h4>Correo institucional</h4>
            <h5>{data.email}</h5>
          </div>
          <div>
            <h4>N. Horas</h4>
            <h5>{data.nHours}</h5>
          </div>
        </div>

        <div className="title">
          <h2>Historial de uso</h2>
          <h6>
            Este historial contiene los instrumentos usados y sus horas de uso.
          </h6>
        </div>
        <Table table={'histo'} title={title} field={data.historyCreated}/>
      </div>
    </>
  );

}

export default Profile;