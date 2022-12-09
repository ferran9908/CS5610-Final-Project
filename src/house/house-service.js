import axios from "axios";
const HOUSE_API_URL = 'https://cs5610-final-project-node.herokuapp.com/house'

export const createHouse = async (newHouse) => {
    const response = await axios.post(HOUSE_API_URL, newHouse)
    const house = response.data
    return house
}

export const findAllHouses = async () => {
    const response = await axios.get(`${HOUSE_API_URL}/get-houses`)
    const houses = response.data
    return houses
}

export const findHouse = async (hid) => {
    const response = await axios.get(`${HOUSE_API_URL}/get-house-details/${hid}`)
    const house = response.data
    return house
}


export const deleteHouse = async (hid) => {
    const response = await axios.delete(`${HOUSE_API_URL}/${hid}`)
    const status = response.data
    return hid;
}