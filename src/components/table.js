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
                                            <button className="button-primary">Ver</button>
                                        </td>
                                    </tr>
                                ))
                            :props.table === 'requests'?
                                props.field.map((ele, i) => (
                                    <tr>
                                        <td></td>
                                    </tr>
                                ))
                            :props.table === 'h'?
                                props.field.map((ele, i) => (
                                    <tr>
                                        <td>{ele.intrument}</td>
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