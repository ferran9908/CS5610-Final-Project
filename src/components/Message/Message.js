import React from "react";

//Pass params and display
function Message() {
    return(
        <div className="col">
            <div className="card-message" >
                <h2 className="card-title">Apartment ABC</h2>
                <div className="card-body">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Name:   </li>
                        <li className="list-group-item">Message: </li>
                    </ul></div>
                <a href="/" className="btn btn-primary">Delete</a>
            </div>
        </div>
    )
}