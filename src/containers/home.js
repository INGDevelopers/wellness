import { useState, useEffect } from "react";
import "../components/styles/home.css";

import NavBar from '../components/Navbar';
import CardI from '../components/card';
import Alert from '../components/alert';
import instruments from "../config/instruments";
import users from "../config/users";



function Home() {

	const [data, setData] = useState([]);
	const [inUse, setInUse] = useState([]);

	useEffect(() => {
		instruments.getInstruments().then((res) => {
			setData(res.res);
		});

		users.getUserById().then((res)=> {
			setInUse(res.res.inUse);
			// console.log(res.res)
		});
	},[]);


	return (
		<>
			<NavBar />
			
			<div className="div-principal">
					<div className="div-button-a">
									<a className="button-primary" href="/history">Historial de Uso</a>
					</div>

					<div className="title">
						<h2>Instrumentos</h2>
						<h6>Disponibles en almacen</h6>
					</div>
					<div className="div-home-items">
						{
							data.length?
								// Instrumentos en inventario
								data.map((el, i) => (
									<CardI key={i} title={el.name} disp={el.amount} inUse={el.inUse} contentType={el.img.contentType} data={el.img.data}/>
								))
							: 
							<Alert/>
						}
					</div>
					<div className="title">
						<h2>Instrumentos en uso</h2>
					</div>
					<div className="div-home-items">
						{
							// Instrumentos en inventario
							inUse.map((el, i) => (
								<CardI key={i} title={el.idInstrument.name} disp={el.disp} inUse={el.inUse} />
							))
						}
					</div>
			</div>
		</>
	);
}


export default Home;