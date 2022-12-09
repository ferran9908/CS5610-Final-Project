
import NavigationBar from "./NavBar";
import "./HouseDetails.css"
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCoffee, faHome} from "@fortawesome/free-solid-svg-icons";

function HouseDetails() {
    return(
        <div>
            <NavigationBar/>
            <div className="listingName">
                Welcome to ABC
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
                            <li>Name:</li>
                            <li>Street Address:</li>
                            <li>City:</li>
                            <li>State:</li>
                            <li>Zip Code:</li>
                            <li>Phone Number:</li>
                            <li>Home Type:</li>
                            <li>Beds:</li>
                            <li>Baths:</li>
                            <li>Square Ft:</li>
                            <li>Price:</li>
                            <li>Description:</li>

                        </ul>

                        Your <FontAwesomeIcon icon={faCoffee} /> is hot and ready!
                        <FontAwesomeIcon icon={faHome} />
                    </div>


                </div>
            </div>

            <Link to='/buyerViewListing'>
                <button variant='outline-dark' className='backbutton'>
                    Back
                </button>

            </Link>
            <div>

            </div>

        </div>

    )
}

export default HouseDetails;