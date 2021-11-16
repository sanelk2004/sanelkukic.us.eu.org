import { Container, Tabs, Tab } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCoffee, faDonate } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const SupportPage = () => {
    return (
        <Container className="mt-3">
            <h1>Support Me</h1>
            <hr/>
            <p>If you wish to support me financially, you can view different ways to do so here!</p>
            <Tabs defaultActiveKey="github" id="support-options" className="mb-3" variant="pills">
                <Tab tabClassName="custom-tabs-color" eventKey="github" title={<React.Fragment><FontAwesomeIcon icon={faGithub}/> GitHub Sponsors</React.Fragment>}>
                    <p>You can use GitHub Sponsors to help support me financially, just click the button below to be taken to my GitHub Sponsors page.</p>
                    <p>If you do not see a button below, make sure you don't have an adblocker turned on.</p>
                    <iframe src="https://github.com/sponsors/sanelk2004/button" title="Sponsor sanelk2004" height="35" width="116" style={{ border: '0' }}></iframe>
                </Tab>
                <Tab tabClassName="custom-tabs-color" eventKey="liberapay" title={<React.Fragment><FontAwesomeIcon icon={faDonate}/> Liberapay</React.Fragment>}>
                    <p>You can use Liberapay to help support me financially, just click the button below to be taken to my Liberapay page.</p>
                    <p>If you do not see a button below, make sure you don't have an adblocker turned on.</p>
                    <a href="https://liberapay.com/sanelkukic/donate" target="_blank" rel="noreferrer"><img alt="Donate using Liberapay" src="https://liberapay.com/assets/widgets/donate.svg"/></a>
                </Tab>
                <Tab tabClassName="custom-tabs-color" eventKey="buymeacoffee" title={<React.Fragment><FontAwesomeIcon icon={faCoffee}/> Buy me a coffee</React.Fragment>}>
                    <p>You can use the website Buy Me A Coffee to help support me financially, just click the button below to be taken to my <abbr title="Buy Me A Coffee">BMAC</abbr> page.</p>
                    <p>If you do not see a button below, make sure you don't have an adblocker turned on.</p>
                    <a href="https://www.buymeacoffee.com/sanelkukic" target="_blank" rel="noreferrer"><img className="buymeacoffee-embed" src="https://cdn.buymeacoffee.com/buttons/v2/default-violet.png" alt="Buy Me A Coffee"/></a>
                </Tab>
            </Tabs>
        </Container>
    )
}

export default SupportPage;