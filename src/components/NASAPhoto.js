import React, { useState, useEffect} from 'react';
import { Card, Button } from 'react-bootstrap';

var apiKey;
if (process.env.NODE_ENV === 'production' || (process.env.REACT_APP_NASA_API_KEY === undefined)) {
    apiKey = process.env.CF_PAGES_NASA_API_KEY;
} else {
    apiKey = process.env.REACT_APP_NASA_API_KEY;
}

const NASAPhoto = () => {
    const [photoData, setPhotoData] = useState(null);
    useEffect(() => {
        fetchPhoto();

        async function fetchPhoto() {
            const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&thumbs=bool`);
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
                                {photoData.explanation} - Captured on {photoData.date}, &copy; {photoData.copyright}.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <br/>
                    <i className="dark-text-color">Data provided by the National Aeronautics and Space Administration, an agency of the United States federal government.</i>
                </React.Fragment>
            ) : (
                <React.Fragment>
                    <Card>
                        <Card.Img variant="top" src={photoData.thumbnail_url} alt={photoData.title} className="img-fluid"/>
                        <Card.Body>
                            <Card.Title>{photoData.title}</Card.Title>
                            <Card.Text className="dark-text-color">
                                {photoData.explanation} - Captured on {photoData.date}, &copy; {photoData.copyright}
                            </Card.Text>
                            <Button variant="secondary" onClick={window.location.href = photoData.url}>View the video</Button>
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