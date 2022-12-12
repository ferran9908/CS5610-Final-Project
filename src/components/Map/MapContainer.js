import React, {useEffect, useState} from 'react'
import {GoogleMap, LoadScript, MarkerF, useJsApiLoader} from '@react-google-maps/api';
import {useLocation, useParams} from "react-router-dom";
import axios from "axios";
import './MapContainer.css'
import {useDispatch} from "react-redux";
import {getHousesByZip} from "../../store/slices/houseSlice";

const containerStyle = {
    width: '500px',
    height: '500px'
};

const BASE_URL = `https://maps.googleapis.com/maps/api/geocode/json?address=`
const API_KEY = "AIzaSyBK-xckagY7ua5F0qsjtzDVnxL0-63BquU"

const Map =  () => {
    const {zip} = useParams()
    const [lat, setLat] = useState(0)
    const [lng, setLng] = useState(0)
    const dispatch = useDispatch()

    useEffect(() => {
        async function getLatLng() {
            const locationMap = await axios.get(`${BASE_URL}${zip}&key=${API_KEY}`)
            setLat(locationMap.data.results[0].geometry.location['lat'])
            setLng(locationMap.data.results[0].geometry.location['lng'])
        }
        dispatch(getHousesByZip({zip}))
        getLatLng()
    },[])

    return (
        <div className="map-container">
            <LoadScript googleMapsApiKey={API_KEY}>
                <GoogleMap
                    mapContainerStyle={containerStyle} center={{lat: lat, lng: lng}} zoom={15} >
                    <MarkerF position={{lat: lat, lng: lng}}></MarkerF>
                </GoogleMap>
            </LoadScript>
        </div>
    )
}

export default Map;