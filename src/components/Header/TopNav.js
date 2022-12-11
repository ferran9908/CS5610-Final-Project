import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../imgs/logo.png';
import './TopNav.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from 'react-redux';

function TopNav() {
    const authData = useSelector(state => state.auth)
    return (
        <Navbar className="navigationBar" collapseOnSelect expand="lg" variant="dark"  >
            <Container>
                <FontAwesomeIcon className="iconLogo" icon={faHome} size={"2xl"} color={"white"} />
                {/*<img src={logo} className="wd-image-style rounded-circle pt-1" style={{ width: '40px', height: '50px' }} alt={"logo"} />*/}
                <Navbar.Brand className="headingLogo" href="/">Pillow</Navbar.Brand>
                <Navbar.Toggle classname="hamburger-menu" aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse classname="hamburger-menu" id="responsive-navbar-nav">
                    {
                        !authData.jwt ? (<Nav className="me-auto">
                            <Nav.Link href="/login">Login / SignUp</Nav.Link>
                            </Nav>

                        ) : (<Nav className="me-auto">
                            <Nav.Link href="/profile">Hi, {authData.user.name}</Nav.Link>
                            <Nav.Link href="/home">Home</Nav.Link>
                            <Nav.Link href="/booking">Bookings</Nav.Link>
                            <Nav.Link href="/favourites">Favourites</Nav.Link>
                            <Nav.Link href="#deets">SignOut</Nav.Link>
                        </Nav>)
                    }
                    
                    {/*<Nav>*/}
                    {/*    <Nav.Link className="me-auto" href="#deets">Contact Us</Nav.Link>*/}
                    {/*</Nav>*/}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default TopNav;