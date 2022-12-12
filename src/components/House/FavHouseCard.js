import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const FavHouseCard = ({ house }) => {
    return (
        <div className="col">
            <div className="card " >
                <img className="card-img-top"
                    src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                    alt="Card cap" />
                <div className="card-body">
                    <div className="row">
                        <div className="col-8">
                            <h2 className="card-title">{house.name}</h2>
                        </div>
                        <div className="col-4">
                            <h2 className="card-title">$ {house.price}</h2>
                        </div>
                    </div>
                    <Link to={`/house/${house._id}`}>
                        <Button className="btn btn-primary">View Details</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default FavHouseCard