import React, { useEffect, useState } from 'react'
import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api';
import { useParams } from "react-router-dom";
import axios from "axios";
import './MapContainer.css'
import { useDispatch, useSelector } from "react-redux";
import { getHousesByZip } from "../../store/slices/houseSlice";
import HouseCard from '../House/HouseCard';

const containerStyle = {
    width: '500px',
    height: '500px'
};

const BASE_URL = `https://maps.googleapis.com/maps/api/geocode/json?address=`
const API_KEY = "AIzaSyBK-xckagY7ua5F0qsjtzDVnxL0-63BquU"

const Map = () => {
    const { zip } = useParams()
    const [lat, setLat] = useState(0)
    const [lng, setLng] = useState(0)
    const dispatch = useDispatch()

    const housesByZip = useSelector(state => state.houses.housesByZip)

    useEffect(() => {
        async function getLatLng() {
            const locationMap = await axios.get(`${BASE_URL}${zip}&key=${API_KEY}`)
            setLat(locationMap.data.results[0].geometry.location['lat'])
            setLng(locationMap.data.results[0].geometry.location['lng'])
        }
        dispatch(getHousesByZip({ zip }))
        getLatLng()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="map-container  ">
            <div className="col-lg-4" >
                <LoadScript googleMapsApiKey={API_KEY}>
                    <GoogleMap
                        mapContainerStyle={containerStyle} center={{ lat: lat, lng: lng }} zoom={15} >
                        <MarkerF position={{ lat: lat, lng: lng }}></MarkerF>
                    </GoogleMap>
                </LoadScript>
            </div>

            <div className="col-lg-8 col-sm-12">
                {housesByZip && housesByZip.map(house => {
                    return <HouseCard name={house.name}
                        streetAddress={house.streetAddress}
                        price={house.price}
                        description={house.description}
                        images={house.images} />
                })}

            </div>
        </div>
    )
}

export default Map;