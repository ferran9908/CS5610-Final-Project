
import React from 'react';

function ProfileCard({ name, role }) {
    return (
        <div className="row">
            <div className="col-10">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Name:   {name}</li>
                    <li className="list-group-item">Role: {role}</li>

                </ul>
            </div>
            
            <div className="col-2">
                <button href="#" className="btn btn-primary">Remove User</button>
            </div>
            
        </div>
    )
}

export default ProfileCard;