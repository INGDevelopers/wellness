import "./styles/table.css";


function History(props) {

	return (
		<> 
			<div className="History">
                
				<table>
					<thead>
						<tr>
                            {
                                props.title.map((ele, i) => (
                                    <th key={i}>{ele}</th>
                                ))
                            }
						</tr>
					</thead>

                    <tbody>
                        {
                            props.table === 'users'?
                                props.field.map((ele, i) => (
                                    <tr key={i}>
                                        <td>Vacio</td>
                                        <td>{ele.email}</td>
                                        <td>{ele.name1}</td>
                                        <td>{ele.lastName1}</td>
                                        <td>
                                            <button className="button-primary" onClick={props.onClick}>Ver</button>
                                        </td>
                                    </tr>
                                ))
                            :props.table === 'requests'?
                                props.field.map((ele, i) => (
                                    <tr key={i}>
                                        <td>Vacio</td>
                                        <td>{ele.idUser.email}</td>
                                        <td>{ele.idUser.name1}</td>
                                        <td>{ele.idInstrument.name}</td>
                                        <td>{ele.requ}</td>
                                        <td>{ele.createdAt}</td>
                                        <td>{ele.updatedAt}</td>
                                        <td><button className="button-primary">Ver</button></td>
                                    </tr>
                                ))
                            :props.table === 'history'?
                                props.field.map((ele, i) => (
                                    <tr key={i}>
                                        <td>Vacio</td>
                                        <td>{ele.idInstrument.name}</td>
                                        <td>{ele.createdAt}</td>
                                        <td>{ele.updatedAt}</td>
                                    </tr>
                                ))
                            :null
                        }
                    </tbody>
				</table>
			</div>
		</>
	);
}

export default History;