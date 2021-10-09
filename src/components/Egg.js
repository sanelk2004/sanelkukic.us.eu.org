import { Modal, Button } from 'react-bootstrap';
import { useState } from 'react';
import { useKonami } from 'react-konami-code';
import NASAPhoto from './NASAPhoto';

const Egg = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    useKonami(handleShow);
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>easter egg? 👀</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <NASAPhoto/>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default Egg;