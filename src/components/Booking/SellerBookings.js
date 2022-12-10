import "./SellerBookings.css"
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { findAllBookings, findAllBookingsSeller } from "../../store/slices/bookingSlice";

function SellerBookings() {
    const authData = useSelector(state => state.auth)
    const listings = useSelector(state => state.bookings.bookings)
    const dispatch = useDispatch()
    useEffect(() => {
        if (authData.user.role === 'ADMIN')
            dispatch(findAllBookings({ jwt: authData.jwt }))
        else if (authData.user.role === 'SELLER')
            dispatch(findAllBookingsSeller({ sid: authData.user._id, jwt: authData.jwt }))
        else if (authData.user.role === 'BUYER')
            dispatch(findAllBookingsSeller({ bid: authData.user._id, jwt: authData.jwt }))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div className="row row-cols-1 row-cols-md-3 g-4">

            {listings && listings.length && listings.map(listing => (<div class="col">
                <div className="card " >
                    <img className="card-img-top"
                        src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                        alt="Card cap" />
                    <div className="card-body">
                        <h2 className="card-title">Booking for {listing.houseName}</h2>


                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Date: {listing.date.split('T')[0]}</li>
                            <li className="list-group-item">Time: {listing.time}</li>
                        </ul>

                        <button href="#" className="btn btn-primary">Edit Booking</button>
                    </div>
                </div>
            </div>))
            }

        </div>


    )
}

export default SellerBookings;

