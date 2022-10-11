import "./styles/Login.css";


function Login() {

    return (<div className="login">
        <form onSubmit={ev => console.log(ev.target)}>
            <label>
                <p className="usuario">Usuario:</p>
                <br></br>
                <input className="correo" type="text" name="correo"></input>
            </label>
            <label>
                <p className="contraseña-e">Contraseña:</p>
                <br></br>
                <input className="contraseña" type="text" name="contraseña"></input>
            </label>
            <a className="olvidado" href="">¿Has olvidado tu contraseña?</a>
            <br></br>
            <button className="entrar" type="submit" value="Ingresar">Iniciar sesion</button>
            <a className="registro" href="">¿No tienes cuenta?</a>
        </form>
    </div>);

}

export default Login;

