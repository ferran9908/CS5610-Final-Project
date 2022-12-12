import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import logo from '../../imgs/logo.png';
import './TopNav.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../store/slices/authSlice';

function TopNav() {
    const authData = useSelector(state => state.auth)
    const dispatch = useDispatch()
    return (
        <Navbar className="navigationBar" collapseOnSelect expand="lg" variant="dark"   >
            <Container>
                <FontAwesomeIcon className="iconLogo" icon={faHome} size={"2xl"} color={"white"} />
                {/*<img src={logo} className="wd-image-style rounded-circle pt-1" style={{ width: '40px', height: '50px' }} alt={"logo"} />*/}
                <Navbar.Brand className="headingLogo" href="/">Pillow</Navbar.Brand>
                <Navbar.Toggle className="hamburger-menu" aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className="hamburger-menu" id="responsive-navbar-nav">
                    {
                        !authData.jwt ? (<Nav className="me-auto">
                            <Nav.Link href="/login">Login / SignUp</Nav.Link>
                        </Nav>


                        ) : (<Nav className="me-auto">
                            <Nav.Link href="/profile">Hi, {authData.user.name}</Nav.Link>
                            <Nav.Link href="/home">Home</Nav.Link>
                            {
                                authData && authData.user.role === 'SELLER' && <div className="navbar-flex">
                                    <Nav.Link href="/houses">My Houses</Nav.Link>
                                    <Nav.Link href="/addHouse">Add House</Nav.Link>
                                    <Nav.Link href="/booking">Bookings</Nav.Link>
                                    <Nav.Link href="/messages">Messages</Nav.Link>
                                </div>
                            }
                            {
                                authData && authData.user.role === 'BUYER' && <div className="navbar-flex">
                                    <Nav.Link href="/favourites">Favorites</Nav.Link>
                                    <Nav.Link href="/booking">Bookings</Nav.Link>
                                </div>
                            }
                            {authData && authData.user.role === 'ADMIN' && <div className='navbar-flex'>
                                <Nav.Link href="/userList">User List</Nav.Link>
                            </div>}
                            <Nav.Link href="/">Advanced Search</Nav.Link>
                            <Nav.Link onClick={() => {
                                dispatch(logout())
                            }}>SignOut</Nav.Link>
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