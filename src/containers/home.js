import { useState, useEffect } from "react";
import "../components/styles/home.css";

import NavBar from '../components/Navbar';
import CardI from '../components/card';
import Alert from '../components/alert';
import instruments from "../config/instruments";
import users from "../config/users";
import requests from "../config/requests";
import Backgroung from "../components/Backgroung";

// Loader
import Loader from '../components/loader';

function Home() {

	const [data, setData] = useState([]);
	const [inUse, setInUse] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [req, setReq] = useState(false);

	useEffect(() => {
		instruments.getInstruments().then((res) => {
			setData(res.res);
		});

		users.getUserById().then((res) => {
			setInUse(res.res.inUse);
		});
	}, [isLoading]);

	const deleteInUseUser = (id) => {
		setIsLoading(true);
		users.deleteInUseUser(id).then((res) => {
			
			setInUse([]);
			setIsLoading(false);
		});
	}

	const requestInstrument = (id) => {
		setIsLoading(true);
		requests.create(id).then((res) => {
			if(res.success)
				// console.log('Elemento Solicitado')
				// setReq(true);
				setIsLoading(false);
		})
	}

	const refresh = () => {
		setIsLoading(true);
		setInterval(() => {
			setIsLoading(false);
		}, 3000);
	}


	return (
		<>
			<NavBar />
			<Backgroung />
			{
				isLoading && (<Loader />)
			}

			<div className="div-principal">
				<div className="div-button-a" style={{display: 'flex', flexDirection: 'row', width:'250px', justifyContent:'space-between', alignItems:'flex-start'}}>
					<a className="button-primary" href="/history">Historial de Uso</a>
					<button className="button-primary" onClick={() => refresh()}>Refrescar</button>
				</div>

				<div className="title">
					<h2>Instrumentos</h2>
					<h6>Disponibles en almacen</h6>
				</div>
				<div className="div-home-items">
					{
						data.length ?
							// Instrumentos en inventario
							data.map((el, i) => (
								<CardI key={i} title={el.name} cod={el.cod} inUse={el.inUse} contentType={el.img.contentType} data={el.img.data}
									buttonR={!el.inUse?<button className="button-primary" onClick={() => requestInstrument(el._id)}>Solicitar</button>:null}
								/>
							))
							:
							<Alert />
					}
				</div>
				<div className="title">
					<h2>Instrumentos en uso</h2>
				</div>
				<div className="div-home-items">
					{
						// Instrumentos en inventario
						inUse.map((el, i) => (
							<CardI key={i} title={el.idInstrument.name} cod={el.idInstrument.cod} inUse={el.inUse}
								buttonC={inUse.length ? <button className="button-primary" style={{ backgroundColor: "red", borderColor: "red" }} onClick={() => deleteInUseUser(el.idInstrument._id)}>Devolver</button> : null}
							/>
						))
					}
				</div>
			</div>
		</>
	);
}


export default Home;