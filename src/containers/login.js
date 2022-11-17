import "../components/styles/Login.css";
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Registro from "../components/Registro";
import login from "../config/login";

import Portada from '../images/deportes.jpg';


function Login() {

    const [estadoModal1, cambiarestadoModal1] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    
    const navigate = useNavigate();

    document.title = 'Login | wellness';

    const submitData = (e) => {
        e.preventDefault();

        login.login({
            email: email,
            password: password

        }).then((res) => {
            if (!res.success) {

            } else {
                const rolJson = JSON.stringify(res.res.rol);
                sessionStorage.setItem('rol', rolJson);
                sessionStorage.setItem('token', res.token);
                navigate('/');
            }
        });
    }


    return (

        <div className="principal-login" >

            <div className="login">
                <div className="img">
                    <img src={Portada} alt="" />
                </div>

                <div className="login-in">
                    <form onSubmit={submitData}>
                        <div className="mb-3 ">
                            <label htmlFor="exampleInputEmail1" className="form-label">Correo institucional</label>
                            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />

                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
                            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" id="exampleInputPassword1" required />
                            <div id="emailHelp" className="form-text"> ¿Has olvidado tu contraseña? </div>
                        </div>
                        <div id="btn1"><button type="submit" className="button-primary">Iniciar Sesion</button></div>

                        <div style={{ marginTop: "150px", display: "flex", justifyContent: "center" }} className="form-text">
                            <button className="btn-n" onClick={() => cambiarestadoModal1(!estadoModal1)} href="">¿No tienes cuenta?</button>
                        </div>
                    </form>
                    <Registro show={estadoModal1} animation={true} onHide={() => cambiarestadoModal1(false)} />

                </div>
            </div>
        </div>
    );

}

export default Login;

