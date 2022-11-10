import {useState, useEffect} from 'react';
import users from "../config/users";

import NavBar from '../components/Navbar';
import Table from "../components/table";



const History = () => {

  const [data, setData] = useState({});
  const title = ['Intrumento', 'Nombre', 'Hora de inicio', 'Hora final'];

  useEffect(() => {
    const getApi = async()=>{
      await users.getHistoryCreated().then((res) => {
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
        <div className="title">
          <h2>Historial de uso</h2>
          <h6>
            Este historial contiene los instrumentos usados y sus horas de uso.
          </h6>
        </div>
        <Table table={'histo'} title={title} field={data}/>
      </div>
    </>
  );
}

export default History;