import "../components/styles/Login.css";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const Registro = (props) => {

    return (
        <>
            <Modal
                {...props}
                className="modal"
                size="bg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Registro
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="modald ">
                    <Form>
                        <Row>
                            <Col>
                                <label className="form-label ">Nombre</label>
                                <Form.Control required />
                            </Col>

                        </Row>
                        <label className="form-label">Correo institucional</label>
                        <Form.Control required />

                        <Row>
                            <Col>
                                <label className="form-label">Contraseña</label>
                                <Form.Control required />
                            </Col>

                        </Row>
                        <div id="btn1"><button type="submit" className="btn btn-primary">Registrarse</button></div>
                    </Form>
                </Modal.Body>
                <Modal.Footer>

                </Modal.Footer>
            </Modal>

        </>
    );




}

export default Registro;
