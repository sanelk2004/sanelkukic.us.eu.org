import { Switch, Route, Link, Redirect } from 'react-router-dom';

// import components
import { Navbar, Nav, Container } from 'react-bootstrap';
import Page from './Page';

// import styles
import './styles/main.css';

// import pages
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import SupportPage from './pages/SupportPage';
import ProjectsPage from './pages/ProjectsPage';
import ResumePage from './pages/ResumePage';

function App() {
  return (
    <>
      <Container fluid>
      <Navbar expand="lg">
        <Container>
            <Navbar.Brand href="/" className="txt-white">Sanel Kukic</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse>
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/" className="txt-white">Home</Nav.Link>
                <Nav.Link as={Link} to="/projects" className="txt-white">Projects</Nav.Link>
                <Nav.Link as={Link} to="/resume" className="txt-white">Resume</Nav.Link>
                <Nav.Link href="https://tools.sanelkukic.us.eu.org" className="txt-white">Tools</Nav.Link>
                <Nav.Link href="https://cats.sanelkukic.us.eu.org" className="txt-white">Cats</Nav.Link>
                <Nav.Link as={Link} to="/contact" className="txt-white">Contact Me</Nav.Link>
                <Nav.Link as={Link} to="/support" className="txt-white">Support Me</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
      <Switch>
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
          <Page title="Resume">
            <ResumePage {...props}/>
          </Page>
        )}/>
        <Route exact path="/" render={(props) => (
          <Page title="Home">
            <HomePage {...props}/>
          </Page>
        )}/>
      </Switch>
      <Container>
        <footer>
          <p className="txt-white sticky-footer">&copy; 2021 Sanel Kukic. All rights reserved.</p>
        </footer>
      </Container>
    </>
  );
}

export default App;