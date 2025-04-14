import {createSlice} from "@reduxjs/toolkit";
import {UserProfile} from "../../utils/types.js";

const initialState = {} as UserProfile

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => action.payload,
    }
})