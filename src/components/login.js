import "./styles/Login.css";


function Login() {

    return (<div className="principal-login" style={{
        display: "flex",
        justifyContent: "center",
        alignItem: "center",
        width: "900px",
        height: "596px",
        margin: "0 auto",
        marginTop: "80px",
        padding: "15px",

        borderRadius: "10px",
        boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"

    }}>

        <img src="../images/deportes.jpg" alt="" />
        <div style={{ marginTop: "100px", marginLeft: "500px" }}>
            <form>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Correo institucional</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" class="form-text"> ¿Has olvidado tu contraseña? </div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Contraseña</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" />
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button style={{ position: "absolute", textAlign: "center" }} type="submit" class="btn btn-primary">Iniciar Sesion</button>
                <div style={{ marginTop: "130px" }} class="form-text"> ¿No tienes cuenta? </div>
            </form>

        </div>

    </div>);

}

export default Login;

