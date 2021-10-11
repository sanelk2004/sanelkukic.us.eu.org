import { Switch, Route, Link, Redirect, useLocation } from 'react-router-dom';

// import components
import { Navbar, Nav, Container, Button, Alert, Image } from 'react-bootstrap';
import Page from './Page';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import CookieConsent from 'react-cookie-consent';

// import styles
import './styles/main.css';

// import pages
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import SupportPage from './pages/SupportPage';
import ProjectsPage from './pages/ProjectsPage';
import ResumePage from './pages/ResumePage';
import NotFoundPage from './pages/NotFoundPage';
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';

import Egg from './components/Egg';

function App() {
  const location = useLocation();
  const is_debug = process.env.NODE_ENV !== 'production';
  return (
    <>
      {
        is_debug &&
        <Alert variant="danger" dismissible="true"><Alert.Heading>You are in debug mode</Alert.Heading>This is a <b>debug</b> build and should not be run in a production environment. Some features may not work until deployed to production, and other features may be unstable and cause errors and/or crashes.</Alert>
      }
      <Container fluid>
      <Navbar expand="lg">
        <Container>
            <Navbar.Brand href="/" className="txt-white">
              <Image alt="My profile picture" src="./profile_picture.png" height={30} width={30} roundedCircle/>{' '} Sanel Kukic
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse>
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/" className="txt-white">Home</Nav.Link>
                <Nav.Link as={Link} to="/projects" className="txt-white">Projects</Nav.Link>
                <Nav.Link as={Link} to="/resume" className="txt-white">Résumé</Nav.Link>
                <Nav.Link href="https://tools.sanelkukic.us.eu.org" className="txt-white">Tools</Nav.Link>
                <Nav.Link href="https://cats.sanelkukic.us.eu.org" className="txt-white">Cats</Nav.Link>
                <Nav.Link as={Link} to="/contact" className="txt-white">Contact Me</Nav.Link>
                <Nav.Link as={Link} to="/support" className="txt-white">Support Me</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
      <Egg/>
      <TransitionGroup>
        <CSSTransition timeout={300} classNames="fade" key={location.key}>
          <Switch location={location}>
            <Route exact path="/about-me">
              <Redirect to="/"/>
            </Route>
            <Route exact path="/support-me">
              <Redirect to="/support"/>
            </Route>
            <Route exact path="/contact-me">
              <Redirect to="/contact"/>
            </Route>
            <Route exact path="/cv">
              <Redirect to="/projects"/>
            </Route>
            <Route exact path="/about">
              <Redirect to="/"/>
            </Route>
            <Route exact path="/portfolio">
              <Redirect to="/projects"/>
            </Route>
            <Route exact path="/terms-of-service">
              <Redirect to="/terms"/>
            </Route>
            <Route exact path="/tos">
              <Redirect to="/terms"/>
            </Route>
            <Route exact path="/privacy-policy">
              <Redirect to="/privacy"/>
            </Route>
            <Route exact path="/projects" render={(props) => (
              <Page title="Projects">
                <ProjectsPage {...props}/>
              </Page>
            )}/>
            <Route exact path="/contact" render={(props) => (
              <Page title="Contact Me">
                <ContactPage {...props}/>
              </Page>
            )}/>
            <Route exact path="/support" render={(props) => (
              <Page title="Support Me">
                <SupportPage {...props}/>
              </Page>
            )}/>
            <Route exact path="/resume" render={(props) => (
              <Page title="Résumé">
                <ResumePage {...props}/>
              </Page>
            )}/>
            <Route exact path="/terms" render={(props) => (
              <Page title="Terms and Conditions of Service">
                <TermsPage {...props}/>
              </Page>
            )}/>
            <Route exact path="/privacy" render={(props) => (
              <Page title="Privacy Policy">
                <PrivacyPage {...props}/>
              </Page>
            )}/>
            <Route exact path="/" render={(props) => (
              <Page title="Home">
                <HomePage {...props}/>
              </Page>
            )}/>
            <Route path="*" render={(props) => (
              <Page title="404 Not Found">
                <NotFoundPage {...props}/>
              </Page>
            )}/>
          </Switch>
        </CSSTransition>
      </TransitionGroup>
      <Container>
        <footer>
          <p className="txt-white sticky-footer">Made with 💖 <a href="./humans.txt">by Sanel Kukic</a> All content &copy; {new Date().getFullYear()} Sanel Kukic. All rights reserved.</p>
          <br/>
          <CookieConsent
            debug={is_debug}
            ButtonComponent={Button}
            location="bottom"
            overlay>
            My website uses cookies to enhance your user experience. <a href="https://www.allaboutcookies.org/cookies/" target="_blank" rel="noreferrer">Learn more</a>
          </CookieConsent>
        </footer>
      </Container>
    </>
  );
}

export default App;