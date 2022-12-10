import "./HouseCard.css"
import React from 'react';

function HouseCard({ name, streetAddress, price, description }) {
    return (
        <div>
            <div className='buyerListingbody'>
                {/* dividing the page to 2 parts  */}
                <div className='buyerListingdivide'>
                    <div className='buyerListingbox1'>
                        <img className="listingImage"
                            src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                            alt="House"
                        />
                    </div>

                    <div className='buyerListingbox2'>
                        <div className="listingName">
                            Welcome to {name}
                        </div>
                        <ul>
                            <li>Street Address: {streetAddress}</li>
                            <li>Price: {price}</li>
                            <li>Description: {description}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
            </div>
        </div>
    )
}

export default HouseCard;