import { React } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import ReCAPTCHA from 'react-google-recaptcha';

const ContactForm = () => {
    const [state, handleSubmit] = useForm("xnqllbnw");
    if (state.succeeded) {
        return (
            <p>Thank you for your inquiry. I will respond to your inquiry as soon as I possibly can, please check your email inbox for any further updates. :D</p>
        )
    }
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
                <Form.Label className="txt-white">Email address</Form.Label>
                <Form.Control required type="email" name="email" id="email" placeholder="doe@example.com" />
                <Form.Text className="text-muted txt-white">
                    I do not share your email address with third parties.
                </Form.Text>
                <ValidationError prefix="Email" field="email" errors={state.errors}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label className="txt-white">Your name</Form.Label>
                <Form.Control required type="text" name="name" id="name" placeholder="John Doe"/>
                <ValidationError prefix="Name" field="name" errors={state.errors}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label className="txt-white">Your message</Form.Label>
                <Form.Control as="textarea" placeholder="Type your message here" style={{ height: '150px' }} required name="message" id="message"/>
                <ValidationError prefix="Message" field="message" errors={state.errors}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <ReCAPTCHA className="g-recaptcha" sitekey="6LfIEkQcAAAAAFK2XLut5G_ir8Dfb2wNbG0S4Osp"/>
                <ValidationError prefix="CAPTCHA" field="captcha" errors={state.errors}/>
            </Form.Group>
            <Form.Group>
                <Button variant="dark" type="submit" disabled={state.submitting}><FontAwesomeIcon icon={faPaperPlane}/> Submit</Button>
            </Form.Group>
        </Form>
    )
}

export default ContactForm;