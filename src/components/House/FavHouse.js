
import "../Booking/SellerBookings.css"
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function FavHouse() {
    return (
        <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
                <div className="card " >
                    <img className="card-img-top"
                        src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                        alt="Card cap" />
                    <div className="card-body">
                        <div className="row">
                            <div className="col-8">
                                <h2 className="card-title">Apartment ABC</h2>
                            </div>
                            <div className="col-4">
                                <h2 className="card-title">$ 5000</h2>
                            </div>
                        </div>
                        <a href="/" className="btn btn-primary">View Details</a>
                    </div>
                </div>
            </div>


            <div className="col">
                <div className="card ">
                    <img className="card-img-top"
                        src="https://images.unsplash.com/photo-1506126279646-a697353d3166?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
                        alt="Card cap" />
                    <div className="card-body">
                        <div className="row">
                            <div className="col-8">
                                <h2 className="card-title">Apartment ABC</h2>
                            </div>
                            <div className="col-4">
                                <h2 className="card-title">$ 5000</h2>
                            </div>
                        </div>

                        <a href="#" className="btn btn-primary">View Details</a>
                    </div>
                </div>
            </div>

            <div className="col">
                <div className="card ">
                    <img className="card-img-top"
                        src="https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80"
                        alt="Card image cap" />
                    <div className="card-body">
                        <div className="row">
                            <div className="col-8">
                                <h2 className="card-title">Apartment ABC</h2>
                            </div>
                            <div className="col-4">
                                <h2 className="card-title">$ 5000</h2>
                            </div>
                        </div>

                        <a href="#" className="btn btn-primary">View Details</a>
                    </div>
                </div>
            </div>


            <div className="col">
                <div className="card ">
                    <img className="card-img-top"
                        src="https://images.unsplash.com/photo-1506126279646-a697353d3166?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
                        alt="Card image cap" />
                    <div className="card-body">
                        <div className="row">
                            <div className="col-8">
                                <h2 className="card-title">Apartment ABC</h2>
                            </div>
                            <div className="col-4">
                                <h2 className="card-title">$ 5000</h2>
                            </div>
                        </div>

                        <a href="#" className="btn btn-primary">View Details</a>
                    </div>
                </div>
            </div>

            <div className="col">
                <div className="card ">
                    <img className="card-img-top"
                        src="https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80"
                        alt="Card image cap" />
                    <div className="card-body">
                        <div className="row">
                            <div className="col-8">
                                <h2 className="card-title">Apartment ABC
                                </h2>

                            </div>
                            <div className="col-4">
                                <h2 className="card-title">$ 5000</h2>
                            </div>
                        </div>


                        <div>

                        </div>

                        <a href="#" className="btn btn-primary">View Details</a>
                    </div>
                </div>
            </div>


        </div>

    )
}
export default FavHouse;

