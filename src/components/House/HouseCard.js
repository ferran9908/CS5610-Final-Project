import "./HouseCard.css"
import React from 'react';

function HouseCard({ name, streetAddress, price, description }) {
    return (
        <div>
            <div className='buyerListingbody-card'>
                {/* dividing the page to 2 parts  */}
                <div className='buyerListingdivide'>
                    <div className='buyerListingbox1-card'>
                        <img className="listingImage-card"
                            src="https://images.unsplash.com/photo-1449844908441-8829872d2607?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60"
                            alt="House"
                        />
                    </div>

                    <div className='buyerListingbox2-card'>
                        <div className="listingName-card">
                            {name}
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