
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteUserFromDb } from '../../store/slices/profileSlice';
import './Profile.css'

function ProfileCard({ name, role, id }) {
    const dispatch = useDispatch()
    const jwt = useSelector(state => state.auth.jwt)
    return (
        <div className="row">
            <div className="col-lg-10 col-sm-10">
            <Link to={`/profile/${id}`} style={{ textDecoration: 'none' }}>

                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Name:   {name}</li>
                        <li className="list-group-item">Role: {role}</li>

                    </ul>

            </Link>
            </div>

            <div className="col-lg-2 col-sm-12">
                <button onClick={() => {
                    console.log({ id, jwt })
                    dispatch(deleteUserFromDb({ jwt, userId: id }))
                }} className="btn btn-primary ">Remove User</button>
            </div>

        </div>
    )
}

export default ProfileCard;