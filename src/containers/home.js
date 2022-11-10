import "../components/styles/home.css";

import NavBar from '../components/Navbar';
import CardI from '../components/card';



function Home() {
	const carsd = [
		{
			title: "Raqueta",
			disp: 15,
      inUse: 2
		},
		{
			title: "Guitarra",
			disp: 15,
      inUse: 2
		},
		{
			title: "B. de futbol",
			disp: 15,
      inUse: 2
		},
		{
			title: "B. de futbol",
			disp: 15,
      inUse: 2
		},
		{
			title: "B. de futbol",
			disp: 15,
      inUse: 2
		}
	]

	const inUse = [{
		title: "Guitarra",
		disp: 15,
		inUse: 2
	}];


	return (
		<>
			<NavBar />
			<div className="div-button-a">
				<a className="button-primary" href="/history">Historial de Uso</a>
			</div>
			<div className="div-home-principal">

					<h2>Instrumentos</h2>
					<div className="div-home-items">
						{
							// Instrumentos en inventario
							carsd.map((el, i) => (
								<CardI key={i} title={el.title} disp={el.disp} inUse={el.inUse} />
							))
						}
					</div>
					<h2>Instrumentos en uso</h2>
					<div className="div-home-wrapp">
						<div className="div-home-items">
							{
								// Instrumentos en inventario
								inUse.map((el, i) => (
									<CardI key={i} title={el.title} disp={el.disp} inUse={el.inUse} />
								))
							}
						</div>
					</div>
			</div>
		</>
	);
}


export default Home;