import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { fetchUserById } from '../../store/slices/profileSlice'

const Profile = () => {
    const { id } = useParams()
    const profileData = useSelector(state => state.profile)
    const { profile } = profileData
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchUserById(id))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div>
            {/*<div className="card">*/}
            {/*    <h2 className="card-title">Booking for ABC</h2>*/}


            {/*    <ul className="list-group list-group-flush">*/}
            {/*        <li className="list-group-item">Address:</li>*/}
            {/*        <li className="list-group-item">Price:</li>*/}
            {/*        <li className="list-group-item">Date:</li>*/}
            {/*        <li className="list-group-item">Time:</li>*/}
            {/*    </ul>*/}
            {/*</div>*/}

            <div style={{ display: 'grid', placeItems: 'center', height: '80vh', color: 'white' }}>
                {profile && <div style={{ border: '3px solid gray', borderRadius: '10px', paddingTop: '2rem', paddingBottom: '2rem', paddingLeft: '4rem', paddingRight: '4rem' }}>
                    <p>Name: {profile.name}</p>
                    <p>Role: {profile.role}</p>
                </div>}
            </div>
        </div>

    )
}

export default Profile