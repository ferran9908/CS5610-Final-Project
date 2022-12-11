import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router'
import { fetchUserById } from '../../store/slices/profileSlice'
import './Profile.css'

const Profile = () => {
    const { id } = useParams()
    const navigateTo = useNavigate()
    const profileData = useSelector(state => state.profile)
    const { profile } = profileData
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchUserById(id))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div>
            <div className="card-profile-userID">
                <h2 className="card-title-userID">User Profile</h2>
                {profile && <div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Name:   {profile.name}</li>
                        <li className="list-group-item">Role: {profile.role}</li>

                    </ul></div>}
                <div className="col-2">
                    <button onClick={() => {
                        navigateTo(-1)
                    }} className="btn btn-primary">Back</button>
                </div>

            </div>


        </div>

    )
}

export default Profile