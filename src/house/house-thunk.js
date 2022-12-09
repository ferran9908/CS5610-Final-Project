import {createAsyncThunk} from "@reduxjs/toolkit";
import {createHouse,findHouse,findAllHouses,deleteHouse} from "./house-service";

export const createHouseThunk = createAsyncThunk(
    'createHouse',
    (newHouse) => createHouse(newHouse)
)

export const findAllHousesThunk = createAsyncThunk(
    'findAllHouses',
    () => findAllHouses()
)

export const findHouseThunk =  createAsyncThunk(
    'findHouse',
    (hid) => findHouse(hid)
)

export const deleteHouseThunk = createAsyncThunk(
    'deleteHouse',
    (hid) => deleteHouse(hid)
)