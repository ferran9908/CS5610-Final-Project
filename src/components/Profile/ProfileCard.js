
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUserFromDb } from '../../store/slices/profileSlice';

function ProfileCard({ name, role, id }) {
    const dispatch = useDispatch()
    const jwt = useSelector(state => state.auth.jwt)
    return (
        <div className="row">
            <div className="col-10">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Name:   {name}</li>
                    <li className="list-group-item">Role: {role}</li>

                </ul>
            </div>

            <div className="col-2">
                <button onClick={() => {
                    console.log({ id, jwt })
                    dispatch(deleteUserFromDb({ jwt, userId: id }))
                }} className="btn btn-primary">Remove User</button>
            </div>

        </div>
    )
}

export default ProfileCard;