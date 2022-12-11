import NavigationBar from "../Header/TopNav";
import "./HouseDetails.css"
import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link, useNavigate, useParams,  } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { deleteHouse, findHouse } from "../../store/slices/houseSlice";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function HouseDetails () {
    const { id } = useParams()
    const dispatch = useDispatch()
    const currentHouse = useSelector(state => state.houses.currentHouse)
    const user = useSelector(state => state.auth.user)
    const jwt = useSelector(state => state.auth.jwt)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const today = new Date();
    const [smShow, setSmShow] = useState(false);
    const [lgShow, setLgShow] = useState(false);


    useEffect(() => {
        dispatch(findHouse(id))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    const navigateTo = useNavigate()

    return (currentHouse &&
        <div>
            <div className='card-HouseDetails'>
                <div className="card-title-House">
                    Welcome to {currentHouse.name}

                    <FontAwesomeIcon className="iconFav" icon={faHeart} color={"red"} />
                </div>

                <div className="row container">
                    <div className="col-lg-6 col-md-4 col-sm-12">
                        <img className="listingImage"
                            src="https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                            alt="listing"
                        />

                        <div className="row houses-fav-book">
                            {/**/}
                            {
                                user.role === 'BUYER' &&
                                <div>
                                    <Button onClick={() => setSmShow(true)} className="me-2 col-4">
                                        Book Tour
                                    </Button>
                                    <Modal
                                        show={smShow}
                                        onHide={() => setSmShow(false)}>
                                        <Modal.Header closeButton>
                                            <Modal.Title id="example-modal-sizes-title-sm">
                                                Book Tour
                                            </Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <Form>
                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                    <Form.Label>Enter Date:</Form.Label>
                                                    <Form.Control type="date" name="tour-date" placeholder="Enter Tour Date" />

                                                </Form.Group>

                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                    <Form.Label>Enter Date:</Form.Label>
                                                    <Form.Control type="time" name="tour-date" placeholder="Enter Tour Date" />

                                                </Form.Group>
                                            </Form>
                                        </Modal.Body>

                                        <Modal.Footer>
                                            <Button variant="primary" onClick={handleClose}>
                                                Book
                                            </Button>
                                        </Modal.Footer>

                                    </Modal>



                                        <button  type="button" className="btn btn-primary col-4" variant="primary"
                                                 onClick={handleShow}>Contact Seller</button>

                                        <Modal show={show} onHide={handleClose}>
                                            <Modal.Header closeButton>
                                                <Modal.Title>Send Message to Seller</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                                <Form>
                                                    <Form.Group
                                                        className="mb-3"
                                                        controlId="exampleForm.ControlTextarea1"
                                                    >
                                                        <Form.Label>Description</Form.Label>
                                                        <Form.Control as="textarea" rows={3} />
                                                    </Form.Group>
                                                </Form>
                                            </Modal.Body>
                                            <Modal.Footer>
                                                <Button variant="primary" onClick={handleClose}>
                                                    Send
                                                </Button>
                                            </Modal.Footer>
                                        </Modal>


                                </div>


                            }
                            {
                                user.role === 'SELLER' &&
                                <div className="col-6">
                                    <Link to={"/addHouse"} state={{ currentHouse }}>
                                        <button className="btn btn-primary">Edit</button>
                                        <button onClick={(e) => {
                                            e.preventDefault()
                                            dispatch(deleteHouse({ hid: currentHouse._id, jwt }))
                                            navigateTo(-1)
                                        }} className="btn btn-primary">Delete</button>
                                    </Link>
                                </div>

                            }
                            {
                                user.role === 'ADMIN' && <div className="col-6">
                                    <button onClick={(e) => {
                                        e.preventDefault()
                                        dispatch(deleteHouse({ hid: currentHouse._id, jwt }))
                                        navigateTo(-1)
                                    }} className="btn btn-primary">Delete</button>
                                </div>
                            }



                        </div>


                    </div>

                    <div className="col-lg-6 col-md-8 col-sm-12">
                        <ul className="list-group list-group-flush-house">
                            <li className="list-group-item">Street Address: {currentHouse.streetAddress}</li>
                            <li className="list-group-item">Unit: {currentHouse.unit}</li>
                            <li className="list-group-item">City:{currentHouse.city}</li>
                            <li className="list-group-item">State: {currentHouse.states}</li>
                            <li className="list-group-item">Zip Code: {currentHouse.zipcode}</li>
                            <li className="list-group-item">Phone Number: {currentHouse.phonenumber}</li>
                            <li className="list-group-item">Home Type: {currentHouse.homeType}</li>
                            <li className="list-group-item">Beds: {currentHouse.beds}</li>
                            <li className="list-group-item">Baths:{currentHouse.baths}</li>
                            <li className="list-group-item">Square Ft: {currentHouse.squareFeet}</li>
                            <li className="list-group-item">Price: {currentHouse.price}</li>
                            <li className="list-group-item">Description: {currentHouse.description}</li>
                        </ul>
                    </div>
                </div>


            </div>
            <button onClick={() => { navigateTo(-1) }} variant='outline-dark' className='backbutton'>
                Back
            </button>

            <div>

            </div>
        </div>
    )
}

export default HouseDetails;