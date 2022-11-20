import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const ModalM = (props) => {

  return (
    <>
        <Modal
            show={props.show}
            onHide={props.onHide}

            className="modal"
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body className="modald ">
              {props.element}
              {props.elementA}
              {props.elementD}
            </Modal.Body>
        </Modal>
    </>
  );
}

export default ModalM;