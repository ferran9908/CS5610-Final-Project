
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { findAllHouses } from '../../store/slices/houseSlice'
import HouseCard from './HouseCard'

const AllHouses = () => {
    const dispatch = useDispatch()
    const houses = useSelector(state => state.houses.houses)
    useEffect(() => {
        dispatch(findAllHouses())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div>
            {houses && houses.map((house, idx) => <Link key={idx} className="houseLink" to={`/house/${house._id}`} style={{ textDecoration: 'none' }}>
                <HouseCard name={house.name}
                           streetAddress={house.streetAddress}
                           price={house.price}
                           description={house.description}
                           images={house.images}/>
            </Link>)}
        </div>
    )
}

export default AllHouses

