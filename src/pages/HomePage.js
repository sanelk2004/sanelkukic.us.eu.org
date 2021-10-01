import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container } from 'react-bootstrap';

// import font awesome icons
import {
    faDiscord,
    faGithub,
    faTwitter,
    faInstagram,
    faHackerNews,
    faMastodon,
    faSteam
} from '@fortawesome/free-brands-svg-icons';

const HomePage = (props) => {
    return (
        <Container className="mt-3">
            <h1 className="txt-white">Welcome to my website!</h1>
            <hr/>
            <p className="txt-white">Hey there! Welcome to my official website! My name is Sanel Kukic, I'm a 17 year old software developer from Florida. I like to code in JavaScript, Python, C#, and Java, and I occasionally do web development every now and then. Why don't you go ahead and browse this site a little? :D</p>
            <a href="https://github.com/sanelk2004" target="_blank" rel="noreferrer" className="txt-white homepage-icon"><FontAwesomeIcon size="2x" icon={faGithub}/></a>
            <a href="https://twitter.com/idkhow_to_read" target="_blank" rel="noreferrer" className="txt-white homepage-icon"><FontAwesomeIcon size="2x" icon={faTwitter}/></a>
            <a href="https://instagram.com/sanelk2004" target="_blank" rel="noreferrer" className="txt-white homepage-icon"><FontAwesomeIcon size="2x" icon={faInstagram}/></a>
            <a href="https://news.ycombinator.com/user?id=sanelkukic" target="_blank" rel="noreferrer" className="txt-white homepage-icon"><FontAwesomeIcon size="2x" icon={faHackerNews}/></a>
            <a href="https://im-in.space/@sanelkukic" target="_blank" rel="noreferrer" className="txt-white homepage-icon"><FontAwesomeIcon size="2x" icon={faMastodon}/></a>
            <a href="https://steamcommunity.com/id/idk_how_to_read" target="_blank" rel="noreferrer" className="txt-white homepage-icon"><FontAwesomeIcon size="2x" icon={faSteam}/></a>
            <a href="https://discord.gg/NSVPhwn9rG" target="_blank" rel="noreferrer" className="txt-white homepage-icon"><FontAwesomeIcon size="2x" icon={faDiscord}/></a>
        </Container>
    )
}

export default HomePage;