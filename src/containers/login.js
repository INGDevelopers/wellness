import "../components/styles/Login.css";
import React, { useState } from 'react';

import Registro from "../components/Registro";


function Login() {

    const [estadoModal1, cambiarestadoModal1] = useState(false);

    return (

        <div className="principal-login" >

            <div className="img">
                <img src="../images/deportes.jpg" alt="" />
            </div>

            <div className="login-in">
                <form>
                    <div className="mb-3 ">
                        <label htmlFor="exampleInputEmail1" className="form-label">Correo institucional</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" required />
                        <div id="emailHelp" className="form-text"> ¿Has olvidado tu contraseña? </div>
                    </div>
                    <div id="btn1"><button type="submit" className="btn btn-primary">Iniciar Sesion</button></div>

                    <div style={{ marginTop: "150px", display: "flex", justifyContent: "center" }} className="form-text">
                        <button className="btn-n" onClick={() => cambiarestadoModal1(!estadoModal1)} href="">¿No tienes cuenta?</button>
                    </div>
                </form>
                <Registro show={estadoModal1} animation={true} onHide={() => cambiarestadoModal1(false)} />

            </div>
        </div>
    );

}

export default Login;

