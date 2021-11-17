import React, { useState } from 'react';
import { Container, Tab, Tabs, Button, Modal, Alert } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faMastodon, faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faKey, faComments, faMobileAlt, faCommentDots, faPaperPlane, faComment } from '@fortawesome/free-solid-svg-icons';
import ContactForm from '../components/ContactForm';
import config from '../config.json';

const ContactPage = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [copyButtonText, setButtonText] = useState("Copy to clipboard");
    const changeButtonText = (text) => setButtonText(text);

    function copyKeyToClipboard() {
        navigator.clipboard.writeText(config.socials.pgp_key);
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
                        {
                            config.socials.emails.map((data, key) => {
                                return (
                                    <li><a href={data}>{data.replace("@", " [at] ").replace(".", " [dot] ")}</a></li>
                                )
                            })
                        }
                    </ul>
                    <br/>
                    <Alert variant="danger">
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
                            <p className="dark-text-color">PGP public key for email address <pre>{config.socials.pgp_key_email}</pre></p>
                            <code>
                                {config.socials.pgp_key}
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
                        <li><a href={`https://discord.com/users/${config.socials.discord.user_id}`} target="_blank" rel="noreferrer"><img src={`https://lanyard-profile-readme.vercel.app/api/${config.socials.discord.user_id}?theme=dark`} alt="Discord Presence"/></a></li>
                        <li>
                            <Button variant="dark" href={`https://discord.gg/${config.socials.discord.server_invite}`}>Join the Discord server!</Button>
                        </li>
                    </ul>
                    <iframe src={`https://discord.com/widget?id=${config.socials.discord.server_id}&theme=dark`} title="Discord Widget" width="350" height="500" allowtransparency="true" frameBorder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
                </Tab>
                <Tab tabClassName="custom-tabs-color" eventKey="xmpp" title={<React.Fragment><FontAwesomeIcon icon={faComments}/> XMPP</React.Fragment>}>
                    <ul>
                        <li>Jabber ID (JID): <a href={`xmpp:${config.socials.xmpp.xmpp_user}?message`}>{config.socials.xmpp.xmpp_user}</a></li>
                        <li>My own XMPP chatroom: <a href={`xmpp:${config.socials.xmpp.xmpp_room}?join`}>{config.socials.xmpp.xmpp_room}</a></li>
                    </ul>
                    <p>Feel free to use <abbr title="OMEMO Multi-End Message and Object Encryption">OMEMO</abbr> or <abbr title="Off-the-Record">OTR</abbr> encryption if you wish to do so.</p>
                </Tab>
                <Tab tabClassName="custom-tabs-color" eventKey="irc" title={<React.Fragment><FontAwesomeIcon icon={faComment}/> IRC</React.Fragment>}>
                    <p>You can use IRC to reach me in real-time as well!</p>
                    <ul>
                        <li><a href={`irc://${config.socials.irc.irc_server}/${config.socials.irc.irc_user},isnick`}>{config.socials.irc.irc_user} on {config.socials.irc.irc_server}</a></li>
                        <li>You can often find me hanging out in the <a href={`irc://${config.socials.irc.irc_server}/%23${config.socials.irc.irc_room}`}>#{config.socials.irc.irc_room}</a> room, but feel free to message me directly!</li>
                    </ul>
                    <p>If you wish, you can also use something like <a href="https://kiwiirc.com" target="_blank" rel="noreferrer">KiwiIRC</a> to connect to the IRC server in your browser.</p>
                </Tab>
                <Tab tabClassName="custom-tabs-color" eventKey="matrix" title={<React.Fragment><FontAwesomeIcon icon={faCommentDots}/> Matrix</React.Fragment>}>
                    <ul>
                        <li>Matrix username: <a href={`https://matrix.to/#/${config.socials.matrix.matrix_user}`}>{config.socials.matrix.matrix_user}</a></li>
                        <li>My own Matrix chatroom: <a href={`https://matrix.to/#/${config.socials.matrix.matrix_room}`}>{config.socials.matrix.matrix_room}</a></li>
                    </ul>
                    <p>You can download a Matrix client such as Element to message me on Matrix. The Matrix chatroom is not encrypted because encryption would break certain integrations and apps I have installed in the chatroom.</p>
                </Tab>
                <Tab tabClassName="custom-tabs-color" eventKey="social-media" title={<React.Fragment><FontAwesomeIcon icon={faMobileAlt}/> Social Media</React.Fragment>}>
                    <p><a href={`https://instagram.com/${config.socials.instagram}`} target="_blank" rel="noreferrer"><FontAwesomeIcon size="2x" icon={faInstagram}/></a> @{config.socials.instagram}</p>
                    <p><a href={`https://twitter.com/${config.socials.twitter}`} target="_blank" rel="noreferrer"><FontAwesomeIcon size="2x" icon={faTwitter}/></a> @{config.socials.twitter}</p>
                    <p><a href={`https://${config.socials.mastodon.server}/@${config.socials.mastodon.username}`} target="_blank" rel="noreferrer"><FontAwesomeIcon size="2x" icon={faMastodon}/></a> @{config.socials.mastodon.username}@{config.socials.mastodon.server}</p>
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