import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../imgs/logo.png';
import './TopNav.css'

function TopNav() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <img src = {logo} className="wd-image-style rounded-circle pt-1" style={{width : '40px', height : '50px'}} alt={"logo"}/>
                <Navbar.Brand href="#home">Pillow</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#login">Login</Nav.Link>
                        <Nav.Link href="#signup">Signup</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">Contact Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default TopNav;