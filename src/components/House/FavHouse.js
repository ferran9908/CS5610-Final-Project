
import "../Booking/SellerBookings.css"
import React, { useEffect } from 'react';
import FavHouseCard from "./FavHouseCard";
import { useDispatch, useSelector } from "react-redux";
import { getMe } from "../../store/slices/authSlice";

function FavHouse() {
    const dispatch = useDispatch()
    const favoriteHouses = useSelector(state => state.auth.user.favHouses)
    const uid = useSelector(state => state.auth.user._id)
    useEffect(() => {
        dispatch(getMe({ id: uid }))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div className="row row-cols-1 row-cols-md-3 g-4">
            {favoriteHouses && favoriteHouses.map(house => <FavHouseCard key={house.house._id} house={house.house} />)}
        </div>

    )
}
export default FavHouse;

