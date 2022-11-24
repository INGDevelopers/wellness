import "../components/styles/Login.css";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import users from "../config/users";

const Registro = (props) => {

    const [name1, setName1] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitData = (e) => {
        e.preventDefault();

        users.postUser({
            name1: name1,
            email: email,
            password: password

        }).then((res) => {
            if (res.success) {
                setName1('');
                setEmail('');
                setPassword('');
                // console.log(res)
            }
        });

    }


    return (
        <>
            <Form onSubmit={submitData}>
                <Row>
                    <Col>
                        <label className="form-label ">Nombre</label>
                        <Form.Control required type="text" placeholder="" value={name1} onChange={(e) => setName1(e.target.value)} />
                    </Col>

                </Row>
                <label className="form-label">Correo institucional</label>
                <Form.Control required type="text" placeholder="" value={email} onChange={(e) => setEmail(e.target.value)} />

                <Row>
                    <Col>
                        <label className="form-label">Contraseña</label>
                        <Form.Control required type="password" placeholder="" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </Col>

<<<<<<< HEAD
                        </Row>
                        <div id="btn1"><button type="submit" className="button-primary">Registrarse</button></div>
                    </Form>
                </Modal.Body>
            </Modal>
=======
                </Row>
                <div id="btn1"><button type="submit" className="button-primary">Registrarse</button></div>
            </Form>
>>>>>>> a61d051fa1d219664c084eabdc8f907a8bb1f3ef

        </>
    );




}

export default Registro;
