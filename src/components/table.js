import { json, useNavigate, useParams } from "react-router-dom";
import "./styles/table.css";


function History(props) {


    const handleClick = (id) => {
        // const idJ = JSON.stringify(id);
        sessionStorage.setItem('idUserSearch', id);
        props.onClick();
    }

    const request = (id) =>{
        sessionStorage.setItem('idRequest', id);
        props.onClick();
    }

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
                            props.table === 'users' ?
                                props.field.map((ele, i) => (
                                    <tr key={i}>
                                        <td>Vacio</td>
                                        <td>{ele.email}</td>
                                        <td>{ele.name1}</td>
                                        <td>{ele.lastName1}</td>
                                        <td>
                                            <button className="button-primary"  onClick={() => handleClick(ele._id)}>Ver</button>
                                        </td>
                                    </tr>
                                ))
                                : props.table === 'requests' ?
                                    props.field.map((ele, i) => (
                                        <tr key={i}>
                                            <td>Vacio</td>
                                            <td>{ele.idUser.email}</td>
                                            <td>{ele.idUser.name1}</td>
                                            <td>{ele.idInstrument.name}</td>
                                            <td>{ele.requ}</td>
                                            <td>{ele.createdAt}</td>
                                            <td>{ele.updatedAt}</td>
                                            <td><button className="button-primary" onClick={() => request(ele._id)}>Ver</button></td>
                                        </tr>
                                    ))
                                    : props.table === 'history' ?
                                        props.field.map((ele, i) => (
                                            <tr key={i}>
                                                <td>Vacio</td>
                                                <td>{ele.idInstrument.name}</td>
                                                <td>{ele.createdAt}</td>
                                                <td>{ele.updatedAt}</td>
                                            </tr>
                                        ))
                                        : null
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default History;