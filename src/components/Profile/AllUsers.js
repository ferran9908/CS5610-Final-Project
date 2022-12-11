
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { deleteUserFromDb, findAllProfiles } from '../../store/slices/profileSlice'
import ProfileCard from './ProfileCard'
import './Profile.css'

const AllUsers = () => {
    const dispatch = useDispatch()
    const users = useSelector(state => state.profile.profiles)
    const jwt = useSelector(state => state.auth.jwt)
    const userData = useSelector(state => state.auth.user)
    useEffect(() => {
        dispatch(findAllProfiles(jwt))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const navigateTo = useNavigate()

    useEffect(() => console.log({ users }), [users])

    return (
        <div className="card-profilecard-userID">

            <div className='card-title-userID' style={{ display: 'flex' }}>

                <h2 className="card-title-userID">
                    User Profiles</h2>
            </div>
            <div>
                {users && users.filter(userEl => userEl._id !== userData._id).map((user) =>
                    <ProfileCard key={user._id} id={user._id} name={user.name} role={user.role} />
                )}
            </div>

            <div className="">
                <button onClick={() => {
                    navigateTo("/")
                }} className="btn btn-primary">Back</button>
            </div>


        </div>

    )
}

export default AllUsers

