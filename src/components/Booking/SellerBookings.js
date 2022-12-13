import "./SellerBookings.css"
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { acceptBooking, findAllBookings, findAllBookingsSeller } from "../../store/slices/bookingSlice";
import BookingCard from './BookingCard'
import { getMe } from "../../store/slices/authSlice";

function SellerBookings() {

    const dispatch = useDispatch()
    const user = useSelector(state => state.auth.user)
    useEffect(() => {
        if (user) {
            dispatch(getMe({ id: user._id }))
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <div className="row row-cols-1 row-cols-md-3 g-4">

            {user.bookings.map(booking => {
                return <BookingCard key={booking._id} id={booking._id}
                                    houseName={booking.booking?.house?.name}
                                    date={booking.booking.date}
                                    time={booking.booking.time}
                                    bid = {booking.booking._id}
                                    isAccepted={booking.booking.isAccepted}
                                    images={booking.booking.house.images}
                                    buyerEmail={booking.booking.buyerEmailId}
                                    sellerEmail={booking.booking.sellerEmailId}
                />
            }
            )}

        </div>


    )
}

export default SellerBookings;

