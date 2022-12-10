import NavigationBar from "../Header/TopNav";
import "./SellerBookings.css"
import React from 'react';
import { Link } from 'react-router-dom';


function SellerBookings(){
    return(
        <div className="card" style="width: 18rem;">
            <img className="card-img-top" src="..." alt="Card image cap"/>
            <div className="card-body">
                <div className="Heading">
                    Booking for ABC
                </div>
                <div className="row">
                    <div className="col-2">Home Address</div>
                    <div className="col-2">Price</div>
                </div>

                 <div className="row">
                      <div className="col-2">Home Address</div>
                      <div className="col-2">Price</div>
                 </div>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}
export default SellerBookings;

