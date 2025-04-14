import {createAsyncThunk} from "@reduxjs/toolkit";
import {UserRegister} from "../../utils/types";
import {base_url, createToken} from "../../utils/constants.ts";

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
        if(response.status === 409){
            throw new Error(`user ${user.login} already exists}`);
        }
        if (!response.ok){
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
        if (response.status === 401){
            throw new Error(`Login or password incorrect`);
        }
        if (!response.ok){
            throw new Error(`Something went wrong`);
        }
        const data = response.json();
        return {user: data, token};
    }

)