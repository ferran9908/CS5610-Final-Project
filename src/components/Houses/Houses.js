import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { findAllHouses, findSellerHouses } from '../../store/slices/houseSlice'
import HouseCard from '../House/HouseCard'
import './Houses.css'

const Houses = () => {
    const dispatch = useDispatch()
    const authData = useSelector(state => state.auth)
    const houses = useSelector(state => state.houses.houses)
    useEffect(() => {
        if (authData.user.role === "SELLER") {
            console.log("HELLO")
            dispatch(findSellerHouses({ jwt: authData.jwt, email: authData.user.email }))
        }
        else {

            dispatch(findAllHouses())
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div className="card-HouseDetails">
            <div className="card-title-House">
                    My Houses
            </div>
            {houses && houses.map((house, idx) => <Link key={idx} className="houseLink" to={`/house/${house._id}`} style={{ textDecoration: 'none' }}>
                <HouseCard name={house.name} streetAddress={house.streetAddress} price={house.price}
                           description={house.description} images={house.images} />
            </Link>)}
        </div>
    )
}

export default Houses