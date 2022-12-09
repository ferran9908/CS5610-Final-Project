import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome} from "@fortawesome/free-solid-svg-icons";
import './NavigationBar.css'

function NavigationBar() {
    return (
        <Navbar className="navigationBar" collapseOnSelect expand="lg" bg="medium" variant="dark">
            <Container>
                <FontAwesomeIcon icon={faHome} size={"2xl"} color={"white"} />
                {/*<img src = {logo} className="wd-image-style rounded-circle pt-1" style={{width : '40px', height : '50px'}} alt={"logo"}/>*/}
                <Navbar.Brand className="heading" href="#home"> Pillow</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#profile">Profile</Nav.Link>
                        <Nav.Link href="#favs">Favourites</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;