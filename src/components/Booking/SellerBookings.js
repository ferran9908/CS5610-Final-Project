import NavigationBar from "../Header/TopNav";
import "./SellerBookings.css"
import React from 'react';
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";

function SellerBookings(){
    return(
        <div className="row row-cols-1 row-cols-md-3 g-4">
            <div class="col">
                <div className="card " >
                    <img className="card-img-top"
                         src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                         alt="Card image cap"/>
                    <div className="card-body">
                        <h2 className="card-title">Booking for ABC</h2>


                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Address:</li>
                            <li className="list-group-item">Price:</li>
                            <li className="list-group-item">Date:</li>
                            <li className="list-group-item">Time:</li>
                        </ul>

                        <a href="#" className="btn btn-primary">Edit Booking</a>
                    </div>
                </div>
            </div>


            <div className="col">
                <div className="card ">
                    <img className="card-img-top"
                         src="https://images.unsplash.com/photo-1506126279646-a697353d3166?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
                         alt="Card image cap"/>
                    <div className="card-body">
                        <h2 className="card-title">Booking for ABC</h2>


                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Address:</li>
                            <li className="list-group-item">Price:</li>
                            <li className="list-group-item">Date:</li>
                            <li className="list-group-item">Time:</li>
                        </ul>

                        <a href="#" className="btn btn-primary">Edit Booking</a>
                    </div>
                </div>
            </div>

            <div className="col">
                <div className="card ">
                    <img className="card-img-top"
                         src="https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80"
                         alt="Card image cap"/>
                    <div className="card-body">
                        <h2 className="card-title">Booking for ABC</h2>


                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Address:</li>
                            <li className="list-group-item">Price:</li>
                            <li className="list-group-item">Date:</li>
                            <li className="list-group-item">Time:</li>
                        </ul>

                        <a href="#" className="btn btn-primary">Edit Booking</a>
                    </div>
                </div>
            </div>

        </div>

    )
}
export default SellerBookings;

