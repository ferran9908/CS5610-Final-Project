import NavigationBar from "../Header/TopNav";
import "./HouseDetails.css"
import React, { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faHome } from "@fortawesome/free-solid-svg-icons";
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
            <div className="listingName">
                Welcome to {currentHouse.name}
            </div>
            <div className='buyerListingbody'>

                {/* dividing the page to 2 parts  */}
                <div className='buyerListingdivide'>
                    <div className='buyerListingbox1'>
                        {/*<ListingImages cardDetails={card} />*/}

                        <img className="listingImage"
                            src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                        />
                    </div>

                    <div className='buyerListingbox2'>
                        {/*<ListingInformation cardDetails={card} />*/}
                        <ul>
                            <li>Street Address: {currentHouse.streetAddress}</li>
                            <li>Unit: {currentHouse.unit}</li>
                            <li>City:{currentHouse.city}</li>
                            <li>State: {currentHouse.states}</li>
                            <li>Zip Code: {currentHouse.zipcode}</li>
                            <li>Phone Number: {currentHouse.phonenumber}</li>
                            <li>Home Type: {currentHouse.homeType}</li>
                            <li>Beds: {currentHouse.beds}</li>
                            <li>Baths:{currentHouse.baths}</li>
                            <li>Square Ft: {currentHouse.squareFeet}</li>
                            <li>Price: {currentHouse.price}</li>
                            <li>Description: {currentHouse.description}</li>

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