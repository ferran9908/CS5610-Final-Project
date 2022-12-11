import "./AddHouse.css"
import React, { useEffect, useState } from 'react'

import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { createHouse, updateHouse } from "../../store/slices/houseSlice"
import { useNavigate } from "react-router"
import { useLocation } from "react-router-dom"

const BASE_URL = `${process.env.REACT_APP_BASE_URL}`

function AddHouse() {
    const dispatch = useDispatch()
    const jwt = useSelector(state => state.auth.jwt)
    const user = useSelector(state => state.auth.user)

    const navigateTo = useNavigate()

    const [isEdit, setIsEdit] = useState(false)

    const [formData, setFormData] = useState({
        name: '', streetAddress: '', unit: '', city: '',
        states: '', phonenumber: '', zipcode: '', price: '', beds: '', baths: '', homeType: '', squareFeet: '',
        year: '', description: '', lat: '', lng: '', sellerEmailId: user.email, images: []
    })

    const [images, setImages] = useState([])
    const location = useLocation()

    const handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        setFormData({ ...formData, [name]: value })
    }

    const imageAddHandler = (e) => {
        setImages(e.target.files)
    }
    useEffect(() => {
        if (location.state && location.state.currentHouse) {
            console.log({ cHouse: location.state.currentHouse })
            setFormData({ ...location.state.currentHouse, sellerEmailId: user.email })
            setIsEdit(true)
        }

    }, [])

    const imageUploadHandler = async (e) => {
        e.preventDefault()
        const data = new FormData()
        if (!images || (images && !images.length)) {
            console.log('no file is selected')
            return
        }

        for (let i = 0; i < images.length; i++) {
            data.append('file', images[0])
        }

        const currentImages = await (await fetch(`${BASE_URL}/upload-images`, { method: 'POST', body: data })).json()

        setFormData(state => {
            const currentData = { ...state }
            currentImages.map(image =>
                currentData.images.push({ image: image._id })
            )
            return currentData
        })

        alert("Images Uploaded")

    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!isEdit) {
            dispatch(createHouse({ payload: formData, jwt }))
            navigateTo("/")
        }
        else {
            dispatch(updateHouse({ payload: formData, jwt, hid: location.state.currentHouse._id }))
            navigateTo(-1)
        }

    }

    useEffect(() => console.log({ formData }), [formData])
    return (
        <div>
            <div className="card-addHouse">
                <h2 className="card-title-addHouse">Add New House Details</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="" className="form-label">House Name</label>

                        <input name="name" value={formData.name} onChange={handleChange} type="text" className="form-control" id="" placeholder="Enter House Name" />

                    </div>
                    <div className="row">
                        <div className="col-8" >
                            <div className="mb-3">
                                <label htmlFor="" className="form-label">Street Address</label>

                                <input name="streetAddress" value={formData.streetAddress} onChange={handleChange} type="text" className="form-control" id="" placeholder="Enter Location" />


                            </div>
                        </div>
                        <div className="col-4" >
                            <div className="mb-3">
                                <label htmlFor="" className="form-label">Unit</label>

                                <input name="unit" value={formData.unit} onChange={handleChange} type="text" className="form-control" id="" placeholder="Enter House Number" />

                            </div>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-4" >
                            <div className="mb-3">
                                <label htmlFor="" className="form-label">City</label>
                                <input name="city" value={formData.city} onChange={handleChange} type="text" className="form-control" id="" placeholder="Enter City" />

                            </div>
                        </div>
                        <div className="col-4" >
                            <div className="mb-3">
                                <label htmlFor="" className="form-label">State</label>

                                <input name="states" value={formData.states} onChange={handleChange} type="text" className="form-control" id="" placeholder="Enter State" />


                            </div>
                        </div>
                        <div className="col-4" >
                            <div className="mb-3">
                                <label htmlFor="" className="form-label">Zip Code</label>

                                <input name="zipcode" value={formData.zipcode} onChange={handleChange} type="text" className="form-control" id="" placeholder="Enter Zip Code" />


                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-3" >
                            <div className="mb-3">
                                <label htmlFor="" className="form-label">Beds</label>

                                <input name="beds" value={formData.beds} onChange={handleChange} type="number" className="form-control" id="" placeholder="Enter number of Bedrooms" />

                            </div>
                        </div>
                        <div className="col-3" >
                            <div className="mb-3">
                                <label htmlFor="" className="form-label">Baths</label>

                                <input name="baths" value={formData.baths} onChange={handleChange} type="number" className="form-control" id="" placeholder="Enter number of Bathrooms" />


                            </div>
                        </div>
                        <div className="col-3" >
                            <div className="mb-3">
                                <label htmlFor="" className="form-label">Home Type</label>

                                <input name="homeType" value={formData.homeType} onChange={handleChange} type="text" className="form-control" id="" placeholder="Enter Type" />


                            </div>
                        </div>

                        <div className="col-3" >
                            <div className="mb-3">
                                <label htmlFor="" className="form-label">Square Feet</label>

                                <input name="squareFeet" value={formData.squareFeet} onChange={handleChange} type="text" className="form-control" id="" placeholder="Enter Sq. feet" />


                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-3" >
                            <div className="mb-3">
                                <label htmlFor="" className="form-label">Latitude</label>

                                <input name="lat" value={formData.lat} onChange={handleChange} type="number" className="form-control" id="" placeholder="Enter Latitude Cordinate" />

                            </div>
                        </div>
                        <div className="col-3" >
                            <div className="mb-3">
                                <label htmlFor="" className="form-label">Longitude</label>

                                <input name="lng" value={formData.lng} onChange={handleChange} type="number" className="form-control" id="" placeholder="Enter Longitude Cordinate" />


                            </div>
                        </div>
                        <div className="col-3" >
                            <div className="mb-3">
                                <label htmlFor="" className="form-label">Year Built/ Renovated</label>

                                <input name="year" value={formData.year} onChange={handleChange} type="number" className="form-control" id="" placeholder="Enter the year built" />


                            </div>
                        </div>
                        <div className="col-3" >
                            <div className="mb-3">
                                <label htmlFor="" className="form-label">Contact Number</label>
                                <input name="phonenumber" value={formData.phonenumber} onChange={handleChange} type="text" className="form-control" id="" placeholder="Enter Phone No." />

                            </div>
                        </div>
                    </div>

                    <div className={"row"}>
                        <div className={"col-7"}>
                            <div className="mb-3">
                                <label htmlFor="" className="form-label">Contact Email ID</label>
                                <input name="sellerEmailId" disabled value={formData.sellerEmailId} onChange={handleChange} type="email" className="form-control" id="" placeholder="Enter Seller's contact Details" />

                            </div>
                        </div>
                        <div className="col-5" >
                            <div className="mb-3">
                                <label htmlFor="" className="form-label">Price ($) </label>
                                <input name="price" value={formData.price} onChange={handleChange} type="number" className="form-control" id="" placeholder="Enter the price in Dollars" />

                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Description</label>
                        <textarea name="description" value={formData.description} onChange={handleChange} className="form-control" id="" rows="3" placeholder="Enter House Details"></textarea>
                    </div>
                    <div>
                        <input type="file" className="form-control" multiple name="file" onChange={imageAddHandler} />
                        <div>
                            <button onClick={imageUploadHandler}>Upload</button>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Save</button>
                </form>
            </div>

        </div>
    )
}

export default AddHouse;