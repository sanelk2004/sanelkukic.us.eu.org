import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container } from 'react-bootstrap';
import config from '../config.json';

// import font awesome icons
import {
    faDiscord,
    faGithub,
    faTwitter,
    faInstagram,
    faHackerNews,
    faMastodon,
    faSteam,
    faDev,
    faReddit
} from '@fortawesome/free-brands-svg-icons';

import Carbonbadge from 'react-carbonbadge';

const HomePage = (props) => {
    return (
        <Container className="mt-3">
            <h1>{config.heading}</h1>
            <hr/>
            <p>{config.description}</p>
            <a href={`https://github.com/${config.socials.github}`} target="_blank" rel="noreferrer"><FontAwesomeIcon size="2x" icon={faGithub}/></a>
            <a href={`https://twitter.com/${config.socials.twitter}`} target="_blank" rel="noreferrer"><FontAwesomeIcon size="2x" icon={faTwitter}/></a>
            <a href={`https://instagram.com/${config.socials.instagram}`} target="_blank" rel="noreferrer"><FontAwesomeIcon size="2x" icon={faInstagram}/></a>
            <a href={`https://news.ycombinator.com/user?id=${config.socials.hacker_news}`} target="_blank" rel="noreferrer"><FontAwesomeIcon size="2x" icon={faHackerNews}/></a>
            <a href={`https://${config.socials.mastodon.server}/@${config.socials.mastodon.username}`} target="_blank" rel="noreferrer"><FontAwesomeIcon size="2x" icon={faMastodon}/></a>
            <a href={`https://steamcommunity.com/id/${config.socials.steam}`} target="_blank" rel="noreferrer"><FontAwesomeIcon size="2x" icon={faSteam}/></a>
            <a href={`https://discord.gg/${config.socials.discord.server_invite}`} target="_blank" rel="noreferrer"><FontAwesomeIcon size="2x" icon={faDiscord}/></a>
            <a href={`https://dev.to/${config.socials.dev}`} target="_blank" rel="noreferrer"><FontAwesomeIcon size="2x" icon={faDev}/></a>
            <a href={`https://reddit.com/u/${config.socials.reddit}`} target="_blank" rel="noreferrer"><FontAwesomeIcon size="2x" icon={faReddit}/></a>
            <Carbonbadge darkMode={false}/>
        </Container>
    )
}

export default HomePage;