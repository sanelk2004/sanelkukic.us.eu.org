import { Container, Button, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf/dist/esm/entry.webpack';
import download from 'downloadjs';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const ResumePage = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({numPages}) {
        setNumPages(numPages);
    }

    function downloadPDF() {
        download("./sanel_resume.pdf");
    }

    // onClick handler functions that allow for simple pagination
    function decrementPage() {
        if (pageNumber !== 1) {
            setPageNumber(pageNumber - 1);
        } else {
            setPageNumber(numPages);
        }
    }

    function incrementPage() {
        if (pageNumber + 1 > numPages) {
            setPageNumber(1);
        } else {
            setPageNumber(pageNumber + 1);
        }
    }

    return (
        <Container className="mt-3">
            <h1>Résumé</h1>
            <hr/>
            <p>Below you can view my résumé and download it if you wish. You can also click the icon below to view my LinkedIn profile, which has much more detailed information about me and my work.</p>
            <Button variant="dark" onClick={handleShow}>View my résumé</Button>
            <br/>
            <br/>
            <Button variant="dark" href="https://linkedin.com/in/sanelkukic"><FontAwesomeIcon icon={faLinkedin}/> View my LinkedIn profile</Button>
            <Modal dialogClassName="pdf-modal" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>My résumé</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Document file="./sanel_resume.pdf" onLoadSuccess={onDocumentLoadSuccess}>
                        <Page pageNumber={pageNumber}/>
                    </Document>
                    <p className="dark-text-color">Page {pageNumber} of {numPages}</p>
                    <Button variant="dark" onClick={decrementPage}><FontAwesomeIcon icon={faArrowLeft}/></Button>
                    <Button variant="dark" onClick={incrementPage}><FontAwesomeIcon icon={faArrowRight}/></Button>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={downloadPDF}>Download .PDF</Button>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </Container>
    )
}

export default ResumePage;