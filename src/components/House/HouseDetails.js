import "./HouseDetails.css"
import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link, useNavigate, useParams, } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { deleteHouse, findHouse, likeHouseInDb, unlikeHouseInDb } from "../../store/slices/houseSlice";
import { getMe } from "../../store/slices/authSlice";
import { createMessage } from "../../store/slices/messageSlice";

const isHouseLiked = (houseId, favoriteHouses) => {
    const likedArray = favoriteHouses.filter(house => {
        if (house.house._id === houseId) {
            return true
        }
        return false
    })

    return likedArray.length > 0

}

function HouseDetails() {
    const { id } = useParams()
    const dispatch = useDispatch()
    const currentHouse = useSelector(state => state.houses.currentHouse)
    const user = useSelector(state => state.auth.user)
    const jwt = useSelector(state => state.auth.jwt)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // const today = new Date();
    const [smShow, setSmShow] = useState(false);
    // const [lgShow, setLgShow] = useState(false);

    const [message, setMessage] = useState('')

    const handleMessageSubmit = () => {
        if (user) {
            const payload = {
                user: user._id,
                description: message,
                house: id,
                sellerEmailId: currentHouse.sellerEmailId
            }
            dispatch(createMessage({ payload, jwt, id: user._id }))
            setShow(false)
        }
    }


    useEffect(() => {
        dispatch(findHouse(id))
        if (user) {
            dispatch(getMe({ id: user._id }))
            // favoriteHouses = user.favHouses
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    const navigateTo = useNavigate()

    const likeHouse = () => {
        dispatch(likeHouseInDb({ jwt, houseId: id, userId: user._id }))
    }

    const unlikeHouse = () => {
        dispatch(unlikeHouseInDb({ jwt, houseId: id, userId: user._id }))
    }

    return (currentHouse &&
        <div>
            <div className='card-HouseDetails'>
                <div className="card-title-House">
                    Welcome to {currentHouse.name}

                    {jwt ? isHouseLiked(id, user.favHouses) ?
                        <FontAwesomeIcon onClick={unlikeHouse} style={{ cursor: 'pointer' }} className="iconFav" icon={faHeart} color={'red'} />
                        : <FontAwesomeIcon onClick={likeHouse} style={{ cursor: 'pointer' }} className="iconFav" icon={faHeart} color={'white'} />
                        : <></>}
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
                                user && user.role === 'BUYER' &&
                                <div>
                                    <Button onClick={() => setSmShow(true)} className="me-2 col-lg-4 col-sm-12">
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


                                    <button type="button" className="btn btn-primary col-lg-4 col-sm-12" variant="primary"
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
                                                    <Form.Control value={message} onChange={e => setMessage(e.target.value)} as="textarea" rows={3} />
                                                </Form.Group>
                                            </Form>
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Button variant="primary" onClick={handleMessageSubmit}>
                                                Send
                                            </Button>
                                        </Modal.Footer>
                                    </Modal>

                                </div>


                            }
                            {
                                user && user.role === 'SELLER' &&
                                <div className="col-8">
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
                                user && user.role === 'ADMIN' && <div className="col-6">
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