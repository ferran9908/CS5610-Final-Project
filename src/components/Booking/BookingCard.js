
import { useDispatch, useSelector } from "react-redux";
import { acceptBooking, findAllBookings, findAllBookingsSeller } from "../../store/slices/bookingSlice";
import React, { useEffect } from 'react';

function BookingCard({houseName, date='', time='', bid='', isAccepted}) {
    const authData = useSelector(state => state.auth)
    const dispatch = useDispatch()

    return (
    <div className="col" >
        <div className="card " >
            <img className="card-img-top"
                 src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"/>
            <div className="card-body">
                <h2 className="card-title">Booking for {houseName}</h2>


                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Date: {date.split('T')[0]}</li>
                    <li className="list-group-item">Time: {time}</li>
                </ul>

                {
                    authData && authData.user.role === 'SELLER' && (

                        !isAccepted ? (<div className="flex flex-row">
                            <button onClick={() => {
                                dispatch(acceptBooking({ id: bid, jwt: authData.jwt, sid: authData.user._id }))
                            }} className="btn btn-primary">Accept</button>
                            {/* <button href="#" className="btn btn-primary">Not Sold</button> */}
                        </div>) : ((<p>House sold!</p>))
                    )
                }


            </div>
        </div>
    </div>
    )
}

        export default BookingCard;