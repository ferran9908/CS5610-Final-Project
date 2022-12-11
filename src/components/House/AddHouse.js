import "./AddHouse.css"
import React, { useEffect, useState } from 'react'

function AddHouse() {

    const [formData, setFormData] = useState({name:'', streetAddress:'',unit: '', city: '',
        states: '', phonenumber:'', zipcode:'', price:'', beds:'', baths:'', homeType: '',squareFeet:'',
        year:'', description:'', lat:'', lng:'', sellerEmailId:''  })
    const handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        setFormData({...formData,[name]: value})
    }

    useEffect(() => console.log({formData}),[formData])
    return(
        <div>
            <div className="card-addHouse">
                <h2 className="card-title-addHouse">Add New House Details</h2>
                <form>
                    <div className="mb-3">
                        <label htmlFor="" className="form-label">House Name</label>
                        <input name="name" onChange={handleChange} type="text" className="form-control" id="" placeholder="Enter House Name" />
                        
                    </div>
                    <div className="row">
                        <div className="col-8" >
                            <div className="mb-3">
                                <label htmlFor="" className="form-label">Street Address</label>
                                <input name="streetAddress" onChange={handleChange} type="text" className="form-control" id="" placeholder="Enter Location" />

                            </div>
                        </div>
                        <div className="col-4" >
                            <div className="mb-3">
                                <label htmlFor="" className="form-label">Unit</label>
                                <input name="unit" onChange={handleChange} type="text" className="form-control" id="" placeholder="Enter House Number" />

                            </div>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-4" >
                            <div className="mb-3">
                                <label htmlFor="" className="form-label">City</label>
                                <input name="city" onChange={handleChange} type="text" className="form-control" id="" placeholder="Enter City" />

                            </div>
                        </div>
                        <div className="col-4" >
                            <div className="mb-3">
                                <label htmlFor="" className="form-label">State</label>
                                <input name="states" onChange={handleChange} type="text" className="form-control" id="" placeholder="Enter State" />

                            </div>
                        </div>
                        <div className="col-4" >
                            <div className="mb-3">
                                <label htmlFor="" className="form-label">Zip Code</label>
                                <input name="zipcode" onChange={handleChange} type="text" className="form-control" id="" placeholder="Enter Zip Code" />

                            </div>
                        </div>

                    </div>

                    <div className="row">
                        <div className="col-3" >
                            <div className="mb-3">
                                <label htmlFor="" className="form-label">Beds</label>
                                <input name="beds" onChange={handleChange} type="number" className="form-control" id="" placeholder="Enter number of Bedrooms" />

                            </div>
                        </div>
                        <div className="col-3" >
                            <div className="mb-3">
                                <label htmlFor="" className="form-label">Baths</label>
                                <input name="baths" onChange={handleChange} type="number" className="form-control" id="" placeholder="Enter number of Bathrooms" />

                            </div>
                        </div>
                        <div className="col-3" >
                            <div className="mb-3">
                                <label htmlFor="" className="form-label">Home Type</label>
                                <input name="homeType" onChange={handleChange} type="text" className="form-control" id="" placeholder="Enter Type" />

                            </div>
                        </div>

                        <div className="col-3" >
                            <div className="mb-3">
                                <label htmlFor="" className="form-label">Square Feet</label>
                                <input name="squareFeet" onChange={handleChange} type="text" className="form-control" id="" placeholder="Enter Sq. feet" />

                            </div>
                        </div>

                    </div>

                    <div className="row">
                        <div className="col-3" >
                            <div className="mb-3">
                                <label htmlFor="" className="form-label">Latitude</label>
                                <input name="lat" onChange={handleChange} type="number" className="form-control" id="" placeholder="Enter Latitude Cordinate" />

                            </div>
                        </div>
                        <div className="col-3" >
                            <div className="mb-3">
                                <label htmlFor="" className="form-label">Longitude</label>
                                <input name="lng" onChange={handleChange} type="number" className="form-control" id="" placeholder="Enter Longitude Cordinate" />

                            </div>
                        </div>
                        <div className="col-3" >
                            <div className="mb-3">
                                <label htmlFor="" className="form-label">Year Built/ Renovated</label>
                                <input name="year" onChange={handleChange} type="number" className="form-control" id="" placeholder="Enter the year built" />

                            </div>
                        </div>
                        <div className="col-3" >
                            <div className="mb-3">
                                <label htmlFor="" className="form-label">Contact Number</label>
                                <input name="phonenumber" onChange={handleChange} type="text" className="form-control" id="" placeholder="Enter Phone No." />

                            </div>
                        </div>

                    </div>

                    <div className={"row"}>
                        <div className={"col-7"}>
                            <div className="mb-3">
                                <label htmlFor="" className="form-label">Contact Email ID</label>
                                <input name="sellerEmailId"  onChange={handleChange} type="email" className="form-control" id="" placeholder="Enter Seller's contact Details" />

                            </div>
                        </div>

                        <div className="col-5" >
                            <div className="mb-3">
                                <label htmlFor="" className="form-label">Price ($) </label>
                                <input name="price" onChange={handleChange} type="number" className="form-control" id="" placeholder="Enter the price in Dollars" />

                            </div>
                        </div>

                    </div>

                    <div className="form-group">
                        <label htmlFor="">Description</label>
                        <textarea name="description" onChange={handleChange} className="form-control" id="" rows="3" placeholder="Enter House Details"></textarea>
                    </div>


                    <button type="submit" className="btn btn-primary">Save</button>
                </form>
            </div>

        </div>
    )
}

export default AddHouse;