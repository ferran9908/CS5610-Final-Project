
import "../Booking/SellerBookings.css"
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import './SellerMessages.css'

//Accept from Message slice and call Message.js


function SellerMessages() {
    return (
        <div className="row row-cols-1 row-cols-md-4 g-4">
            <div className="col">
                <div className="card-message" >
                    <h2 className="card-title">Apartment ABC</h2>
                    <div className="card-body">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Name:   </li>
                            <li className="list-group-item">Message: </li>
                        </ul></div>
                        <a href="/" className="btn btn-primary">Delete</a>
                    </div>
                </div>

            <div className="col">
                <div className="card-message" >
                    <h2 className="card-title">Apartment ABC</h2>
                    <div className="card-body">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Name:   </li>
                            <li className="list-group-item">Message: </li>
                        </ul></div>
                    <a href="/" className="btn btn-primary">Delete</a>
                </div>
            </div>

            <div className="col">
            <div className="card-message" >
                <h2 className="card-title">Apartment ABC</h2>
                <div className="card-body">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Name:   </li>
                        <li className="list-group-item">Message: </li>
                    </ul></div>
                <a href="/" className="btn btn-primary">Delete</a>
            </div>
        </div>


            
            </div>


    )
}
export default SellerMessages;

