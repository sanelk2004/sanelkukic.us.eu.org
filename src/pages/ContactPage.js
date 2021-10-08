import React, { useState } from 'react';
import { Container, Tab, Tabs, Button, Modal, Alert } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faMastodon, faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faKey, faComments, faMobileAlt, faCommentDots, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import ContactForm from '../components/ContactForm';

const ContactPage = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [copyButtonText, setButtonText] = useState("Copy to clipboard");
    const changeButtonText = (text) => setButtonText(text);

    function copyKeyToClipboard() {
        navigator.clipboard.writeText(`-----BEGIN PGP PUBLIC KEY BLOCK-----

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
sPBaBwqxr0Zjx8jP1ArYKj3ziEYi7kQ=
=JrpQ
-----END PGP PUBLIC KEY BLOCK-----`);
        changeButtonText("Copied!");
    }
    return (
        <Container className="mt-3">
            <h1>Contact Me</h1>
            <hr/>
            <p>If you want to get in touch with me, you can use any of the methods listed below.</p>
            <br/>
            <Tabs defaultActiveKey="email" id="contact-options" className="mb-3" variant="pills">
                <Tab tabClassName="custom-tabs-color" eventKey="email" title={<React.Fragment><FontAwesomeIcon icon={faEnvelope}/> Email</React.Fragment>}>
                    <ul>
                        <li><a href="mailto:sanelk2004@icloud.com">sanelk2004 [at] icloud [dot] com</a></li>
                        <li><a href="mailto:sk@sanelkukic.us.eu.org">sk [at] sanelkukic [dot] us [dot] eu [dot] org</a></li>
                    </ul>
                    <br/>
                    <Alert variant="danger">
                        <Alert.Heading>Warning</Alert.Heading>
                        I do <b>NOT</b> send emails from the second address listed above. I only send emails from my iCloud email address, and all emails I send are signed using my S/MIME certificate. If you receive an email from either of these two addresses that is not signed using S/MIME, please report it to me as soon as possible. Thank you.
                    </Alert>
                    <br/>
                    <Alert variant="warning">
                        <Alert.Heading>If you wish to send me sensitive information...</Alert.Heading>
                        If you wish to send me sensitive information via email, I <b>strongly</b> recommend that you encrypt your email message using PGP. You can click the button below to view my PGP public key.
                        <hr/>
                        <Button variant="dark" onClick={handleShow}><FontAwesomeIcon icon={faKey}/> View my PGP key</Button>
                    </Alert>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>My PGP public key</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <p className="dark-text-color">PGP public key for email address <pre>sanelk2004@icloud.com</pre></p>
                            <code>
                            -----BEGIN PGP PUBLIC KEY BLOCK-----

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
sPBaBwqxr0Zjx8jP1ArYKj3ziEYi7kQ=
=JrpQ
-----END PGP PUBLIC KEY BLOCK-----
                            </code>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="primary" onClick={copyKeyToClipboard}>{copyButtonText}</Button>
                            <Button variant="secondary" onClick={handleClose}>Close</Button>
                        </Modal.Footer>
                    </Modal>
                </Tab>
                <Tab tabClassName="custom-tabs-color" eventKey="discord" title={<React.Fragment><FontAwesomeIcon icon={faDiscord}/> Discord</React.Fragment>}>
                    <ul>
                        <li><a href="https://discord.com/users/588852269177372685" target="_blank" rel="noreferrer"><img src="https://lanyard-profile-readme.vercel.app/api/588852269177372685?theme=dark" alt="Discord Presence"/></a></li>
                        <li>
                            <Button variant="dark" href="https://discord.gg/NSVPhwn9rG">Join the Discord server!</Button>
                        </li>
                    </ul>
                    <iframe src="https://discord.com/widget?id=883556672679862283&theme=dark" title="Discord Widget" width="350" height="500" allowtransparency="true" frameBorder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
                </Tab>
                <Tab tabClassName="custom-tabs-color" eventKey="xmpp" title={<React.Fragment><FontAwesomeIcon icon={faComments}/> XMPP</React.Fragment>}>
                    <ul>
                        <li>Jabber ID (JID): <a href="xmpp:ksanel@og.im?message">ksanel@og.im</a></li>
                        <li>My own XMPP chatroom: <a href="xmpp:sanel.kukic@conference.og.im?join">sanel.kukic@conference.og.im</a></li>
                    </ul>
                    <p>Feel free to use <abbr title="OMEMO Multi-End Message and Object Encryption">OMEMO</abbr> or <abbr title="Off-the-Record">OTR</abbr> encryption if you wish to do so.</p>
                </Tab>
                <Tab tabClassName="custom-tabs-color" eventKey="matrix" title={<React.Fragment><FontAwesomeIcon icon={faCommentDots}/> Matrix</React.Fragment>}>
                    <ul>
                        <li>Matrix username: <a href="https://matrix.to/#/@sanel.k:halogen.city">@sanel.k:halogen.city</a></li>
                        <li>My own Matrix chatroom: <a href="https://matrix.to/#/#sanel.kukic:halogen.city">#sanel.kukic:halogen.city</a></li>
                    </ul>
                    <p>You can download a Matrix client such as Element to message me on Matrix. The Matrix chatroom is not encrypted because encryption would break certain integrations and apps I have installed in the chatroom.</p>
                </Tab>
                <Tab tabClassName="custom-tabs-color" eventKey="social-media" title={<React.Fragment><FontAwesomeIcon icon={faMobileAlt}/> Social Media</React.Fragment>}>
                    <p><a href="https://instagram.com/sanelk2004" target="_blank" rel="noreferrer"><FontAwesomeIcon size="2x" icon={faInstagram}/></a> @sanelk2004</p>
                    <p><a href="https://twitter.com/idkhow_to_read" target="_blank" rel="noreferrer"><FontAwesomeIcon size="2x" icon={faTwitter}/></a> @idkhow_to_read</p>
                    <p><a href="https://im-in.space/@sanelkukic" target="_blank" rel="noreferrer"><FontAwesomeIcon size="2x" icon={faMastodon}/></a> @sanelkukic@im-in.space</p>
                </Tab>
                <Tab tabClassName="custom-tabs-color" eventKey="contact-form" title={<React.Fragment><FontAwesomeIcon icon={faPaperPlane}/> Contact Form</React.Fragment>}>
                    <p>Fill out the form below and submit it to contact me!</p>
                    <ContactForm/>
                </Tab>
            </Tabs>
        </Container>
    )
}

export default ContactPage;