import NavigationBar from "../Header/TopNav";
import "./HouseDetails.css"
import React, { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faHome,faHeart } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { findHouse } from "../../store/slices/houseSlice";

function HouseDetails() {
    const { id } = useParams()
    const dispatch = useDispatch()
    const currentHouse = useSelector(state => state.houses.currentHouse)
    useEffect(() => {
        dispatch(findHouse(id))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const navigateTo = useNavigate()

    return (currentHouse &&
        <div>
            <div className='buyerListingbody'>
                <div className="listingName">
                    Welcome to {currentHouse.name}
                </div>

                {/* dividing the page to 2 parts  */}
                <div className='buyerListingdivide'>
                    <div className='buyerListingbox1'>
                        {/*<ListingImages cardDetails={card} />*/}

                        <img className="listingImage"
                            src="https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                        />
                        <div>
                            <FontAwesomeIcon className="iconFav" icon={faHeart} size={"2xl"} color={"red"} />
                        </div>

                    </div>

                    <div className='buyerListingbox2'>
                        {/*<ListingInformation cardDetails={card} />*/}
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
            <button  onClick={() => { navigateTo(-1) }} variant='outline-dark' className='backbutton'>
                Back
            </button>

            <div>

            </div>
        </div>
    )
}

export default HouseDetails;