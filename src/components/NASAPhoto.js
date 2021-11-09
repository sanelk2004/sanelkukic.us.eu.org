import React, { useState, useEffect} from 'react';
import { Card, Button } from 'react-bootstrap';
import ReactPlayer from "react-player/lazy";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

const NASAPhoto = () => {
    const [photoData, setPhotoData] = useState(null);
    useEffect(() => {
        fetchPhoto();

        async function fetchPhoto() {
            const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}&thumbs=bool`);
            const data = await res.json();
            setPhotoData(data);
        }
    }, []);

    if (!photoData) return <p className="dark-text-color">Sorry, looks like I couldn't connect to NASA's API. Try again later ;(</p>

    return (
        <React.Fragment>
            {photoData.media_type === 'image' ? (
                <React.Fragment>
                    <Card>
                        <Card.Img variant="top" src={photoData.url} alt={photoData.title} className="img-fluid"/>
                        <Card.Body>
                            <Card.Title>{photoData.title}</Card.Title>
                            <Card.Text className="dark-text-color">
                                {photoData.explanation}
                            </Card.Text>
                            <Card.Text className="dark-text-color">
                                <i>Captured on {photoData.date}, &copy; {photoData.date.substring(0, 4) + ' ' + photoData.copyright}</i>
                            </Card.Text>
                            <Button variant="primary" href="https://apod.nasa.gov" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faExternalLinkAlt}/> Read more at NASA.gov</Button>
                        </Card.Body>
                    </Card>
                    <br/>
                    <i className="dark-text-color">Data provided by the National Aeronautics and Space Administration, an agency of the United States federal government.</i>
                </React.Fragment>
            ) : (
                <React.Fragment>
                    <Card>
                        <ReactPlayer url={photoData.url} width="30vw" height="50vh" loop={true} playing={true} controls={false} config={{
                            youtube: {
                                playerVars: {
                                    controls: 0,
                                    autoplay: 1,
                                    loop: 1
                                }
                            }
                        }} fallback={
                            <React.Fragment>
                                <p className="dark-text-color">Failed to render video embed.</p>
                            </React.Fragment>
                        } light={photoData.thumbnail_url}/>
                        <Card.Body>
                            <Card.Title>{photoData.title}</Card.Title>
                            <Card.Text className="dark-text-color">
                                {photoData.explanation}
                            </Card.Text>
                            <Card.Text className="dark-text-color">
                                <i>Captured on {photoData.date}, &copy; {photoData.date.substring(0, 4) + ' ' + photoData.copyright}</i>
                            </Card.Text>
                            <Button variant="primary" href="https://apod.nasa.gov" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faExternalLinkAlt}/> Read more at NASA.gov</Button>
                        </Card.Body>
                    </Card>
                    <br/>
                    <i className="dark-text-color">Data provided by the National Aeronautics and Space Administration, an agency of the United States federal government.</i>
                </React.Fragment>
            )}
        </React.Fragment>
    )
}

export default NASAPhoto;
