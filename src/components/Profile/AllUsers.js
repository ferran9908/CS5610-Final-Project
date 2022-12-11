
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { findAllProfiles } from '../../store/slices/profileSlice'
import ProfileCard from './ProfileCard'
import './Profile.css'

const AllUsers = () => {
    const dispatch = useDispatch()
    const users = useSelector(state => state.profile.profiles)
    const jwt = useSelector(state => state.auth.jwt)
    useEffect(() => {
        dispatch(findAllProfiles(jwt))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div className="card-profilecard-userID">
            <h2 className="card-title-userID">User Profiles</h2>
            <div>
                {users && users.map((user) =>
                    <ProfileCard name={user.name} role={user.role} />
                )}
            </div>

        </div>

    )
}

export default AllUsers

