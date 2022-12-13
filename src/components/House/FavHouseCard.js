import React, {useState} from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel';
const BASE_URL = process.env.REACT_APP_BASE_URL

const FavHouseCard = ({ house }) => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div className="col">
            <div className="card " >
                {
                    !house.images.length &&
                    <img className="card-img-top"
                         src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                         alt="Card cap" />
                }


                {
                    house.images.length ? <Carousel activeIndex={index} onSelect={handleSelect}>
                        { house.images.map (
                            image => {
                                console.log({url: `${BASE_URL}/${image.pic}`})
                                return (
                                    <Carousel.Item>
                                        <img
                                            className=" listingImage"
                                            src={`${BASE_URL}/${image.image.pic}`}
                                            alt="Loading House Image.."
                                        />

                                    </Carousel.Item>
                                )}
                        )

                        }

                    </Carousel> : <></>
                }


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