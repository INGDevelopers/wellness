import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const ModalR = (props) => {

    return (
        <>
            <Modal
                show={props.show}
                onHide={props.onHide}

                className="modal"
                size="bg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body className="modald ">
                    {props.element}

                </Modal.Body>
            </Modal>
        </>
    );
}

export default ModalR;