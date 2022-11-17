
function Request(props) {

    return (
        <>
            <div className="Solicitud">

                <button className="button-primary" onClick={props.onClick}>Aceptar</button>

                <button style={{ backgroundColor: "red", borderColor: "red" }} className="button-primary" onClick={props.onClick}>Denegar</button>

            </div>
        </>
    );
}

export default Request;