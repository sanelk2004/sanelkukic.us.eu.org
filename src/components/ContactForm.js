import { React, useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Form, Button, FloatingLabel } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import ReCAPTCHA from 'react-google-recaptcha';

const ContactForm = () => {
    const [state, handleSubmit] = useForm(process.env.REACT_APP_FORMSPREE_FORM_ID);
    const [validated, setValidated] = useState(false);
    if (state.succeeded) {
        return (
            <p>Thank you for your inquiry. I will respond to your inquiry as soon as I possibly can, please check your email inbox for any further updates. :D</p>
        )
    }
    const formSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
        handleSubmit(event);
    }
    return (
        <Form noValidate validated={validated} onSubmit={formSubmit}>
            <Form.Group className="mb-3">
                <FloatingLabel controlId="email" label="Email address" className="mb-3">
                    <Form.Control required type="email" name="email" id="email" placeholder="doe@example.com" />
                </FloatingLabel>
                <Form.Text className="text-muted txt-white">
                    I do not share your email address with third parties.
                </Form.Text>
                <Form.Control.Feedback type="invalid">
                    <p className="txt-white">Invalid email address</p>
                </Form.Control.Feedback>
                <ValidationError className="txt-white" prefix="Email" field="email" errors={state.errors}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <FloatingLabel controlId="name" label="Your name" className="mb-3">
                    <Form.Control required type="text" name="name" id="name" placeholder="John Doe"/>
                </FloatingLabel>
                <Form.Control.Feedback type="invalid">
                    <p className="txt-white">You must provide a name</p>
                </Form.Control.Feedback>
                <ValidationError className="txt-white" prefix="Name" field="name" errors={state.errors}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <FloatingLabel controlId="message" label="Type your message here" className="mb-3">
                    <Form.Control as="textarea" placeholder="Type your message here" style={{ height: '150px' }} required name="message" id="message"/>
                </FloatingLabel>
                <Form.Control.Feedback type="invalid">
                    <p className="txt-white">You must provide a message to send.</p>
                </Form.Control.Feedback>
                <ValidationError className="txt-white" prefix="Message" field="message" errors={state.errors}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <ReCAPTCHA className="g-recaptcha" sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}/>
                <Form.Control.Feedback type="invalid">
                    <p className="txt-white">You must complete the CAPTCHA.</p>
                </Form.Control.Feedback>
                <ValidationError className="txt-white" prefix="CAPTCHA" field="captcha" errors={state.errors}/>
            </Form.Group>
            <Form.Group>
                <Button variant="dark" type="submit" disabled={state.submitting}><FontAwesomeIcon icon={faPaperPlane}/> Submit</Button>
            </Form.Group>
        </Form>
    )
}

export default ContactForm;