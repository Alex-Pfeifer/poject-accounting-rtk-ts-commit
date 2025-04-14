import {createAsyncThunk} from "@reduxjs/toolkit";
import {UserDate, UserProfile, UserRegister} from "../../utils/types";
import {base_url, createToken} from "../../utils/constants.ts";
import {RootState} from "../../app/store.ts";

export const registerUser = createAsyncThunk(
    'user/register',
    async (user: UserRegister) => {
        const response = await fetch(`${base_url}/account/user`, {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (response.status === 409) {
            throw new Error(`user ${user.login} already exists}`);
        }
        if (!response.ok) {
            throw new Error(`Something went wrong`);
        }
        const data = await response.json();
        const token = createToken(user.login, user.password);
        return {user: data, token}
    }
)

export const fetchUser = createAsyncThunk(
    'user/fetch',
    async (token: string) => {
        const response = await fetch(`${base_url}/account/login`, {
            method: 'Post',
            headers: {
                'Authorization': token
            }
        })
        if (response.status === 401) {
            throw new Error(`Login or password incorrect`);
        }
        if (!response.ok) {
            throw new Error(`Something went wrong`);
        }
        const data = await response.json();
        return {user: data, token};
    }
)

export const updateUser = createAsyncThunk<UserProfile, UserDate, { state: RootState}>(
    'user/update',
    async (user, {getState}) => {
        const response = await fetch(`${base_url}/account/user`, {
            method: 'PUT',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json',
                Authorization: getState().token
            }
        })
        if (response.status === 401) {
            throw new Error(`Login or password incorrect`);
        }
        if (!response.ok) {
            throw new Error(`Something went wrong`);
        }
        return await response.json();
    }
)