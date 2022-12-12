import React from "react";
import Button from 'react-bootstrap/Button'
import { useDispatch, useSelector } from "react-redux";
import { deleteMessage } from "../../store/slices/messageSlice";
//Pass params and display
function Message({ houseName, name, message, id }) {
    const jwt = useSelector(state => state.auth.jwt)
    const user = useSelector(state => state.auth.user)
    const dispatch = useDispatch()
    return (
        <div className="col">
            <div className="card-message" >
                <h2 className="card-title">{houseName}</h2>
                <div className="card-body">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Name: {name}  </li>
                        <li className="list-group-item">Message: {message}</li>
                    </ul></div>
                <Button onClick={(e) => {
                    e.preventDefault()
                    dispatch(deleteMessage({ mid: id, jwt, id: user._id }))
                }} className="btn btn-primary">Delete</Button>
            </div>
        </div>
    )
}

export default Message