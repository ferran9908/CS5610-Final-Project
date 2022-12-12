
import "../Booking/SellerBookings.css"
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import './SellerMessages.css'
import { useDispatch, useSelector } from "react-redux";
import { getMe } from "../../store/slices/authSlice";
import Message from "./Message";

//Accept from Message slice and call Message.js

function SellerMessages() {
    const dispatch = useDispatch()
    const user = useSelector(state => state.auth.user)
    useEffect(() => {
        if (user) {
            dispatch(getMe({ id: user._id }))
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (

        <div className="row row-cols-1 row-cols-md-4 g-4">

            {user.messages.map(message => {
                return <Message key={message._id} id={message._id} houseName={message.message.house.name} name={message.message.user.name} message={message.message.description} />
            })}



        </div>


    )
}
export default SellerMessages;

