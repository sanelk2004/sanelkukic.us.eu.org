import { Container, Button } from 'react-bootstrap';
import countapi from 'countapi-js';
import { useState, useEffect } from 'react';

const NotFoundPage = () => {
    const [petCounter, setPetCounter] = useState(0);
    const addPet = (newValue) => setPetCounter(newValue);
    useEffect(() => {
        countapi.get("sanelkukic.us.eu.org", "notFoundCat").then((result) => {
            addPet(result.value);
        });
    });
    function petTheKitty() {
        countapi.update("sanelkukic.us.eu.org", "notFoundCat", 1).then((result) => {
            addPet(result.value);
        });
    }
    return (
        <Container className="mt-3">
            <h1>404 Not Found</h1>
            <hr/>
            <p>Sorry, looks like you're trying to access a page that does not exist or was removed. But don't be sad, here's a little kitty cat to cheer you up! :D</p>
            <img src="./404cat.webp" alt="404 Not Found" width="400" height="400"/>
            <br/>
            <br/>
            <p>The cat has been petted <b>{petCounter}</b> times.</p>
            <Button variant="primary" onClick={petTheKitty}>Pet the kitty</Button>
            <br/>
            <br/>
            <Button variant="dark" href="/">Go home</Button>
        </Container>
    )
}

export default NotFoundPage;