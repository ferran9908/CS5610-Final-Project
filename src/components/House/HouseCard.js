import "./HouseCard.css"
import React, {useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';
const BASE_URL = process.env.REACT_APP_BASE_URL


function HouseCard({ name, streetAddress, price, description, images })
{
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    console.log(images)

    return (
        <div>
            <div className='card-HouseDetails'>
                {/* dividing the page to 2 parts  */}
                <div className='row container'>
                    <div className='col-lg-6 col-md-4 col-sm-12'>
                        {/*<img className="listingImage-card"*/}
                        {/*    src="https://images.unsplash.com/photo-1449844908441-8829872d2607?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60"*/}
                        {/*    alt="House"*/}
                        {/*/>*/}

                        <Carousel activeIndex={index} onSelect={handleSelect}>
                            { images && images.map (

                                image => {
                                    console.log({url: `${BASE_URL}/${image.image.pic}`})
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

                        </Carousel>
                    </div>

                    <div className='col-lg-6 col-md-8 col-sm-12'>
                        <div className="card-title-HouseCard">
                            {name}
                        </div>

                        <ul className="list-group list-group-flush-house">
                            <li className="list-group-item">Street Address: {streetAddress}</li>
                            <li className="list-group-item">Price: {price}</li>
                            <li className="list-group-item">Description: {description}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
            </div>
        </div>
    )
}

export default HouseCard;