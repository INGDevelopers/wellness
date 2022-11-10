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
                                    <tr>
                                        <td>Vacio</td>
                                        <td key={i}>{ele.name1}</td>
                                        <td key={i}>{ele.lastName1}</td>
                                        <td key={i}>Vacio</td>
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
                            :props.table === 'history'?
                                props.field.map((ele, i) => (
                                    <tr>
                                        <td></td>
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