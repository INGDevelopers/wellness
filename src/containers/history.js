import { useState, useEffect } from 'react';
import users from "../config/users";

import NavBar from '../components/Navbar';
import Table from "../components/table";
import Backgroung from "../components/Backgroung";



const History = () => {

  const [data, setData] = useState([]);
  const title = ['Intrumento', 'Nombre', 'Hora de inicio', 'Hora final'];

  useEffect(() => {
    users.getHistoryCreated().then((res) => {
      setData(res.res.historyCreated);
      console.log()
    });
  }, []);

  return (
    <>
      <NavBar />
      <Backgroung />
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
        {
          data.length ?
            <Table table={'history'} title={title} field={data} />
            :
            <Table table={'history'} title={title} field={[]} />
        }
      </div>
    </>
  );
}

export default History;