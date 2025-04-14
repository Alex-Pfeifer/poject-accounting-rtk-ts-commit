import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {UserProfile} from "../../utils/types.d";

const initialState = {} as UserProfile

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (_state, action: PayloadAction<UserProfile>) => action.payload,
        deleteUser: () => initialState,
        changeFirstName: (state, action: PayloadAction<string>) => {
            state.firstName = action.payload || state.firstName
        },
        changeLastName: (state, action: PayloadAction<string>) => {
            state.lastName = action.payload || state.lastName
        }

    }
})




export const {setUser, deleteUser, changeFirstName, changeLastName} = userSlice.actions
export default userSlice.reducer;