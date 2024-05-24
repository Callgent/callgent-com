import { createAsyncThunk } from '@reduxjs/toolkit';
import { UserSignup, UserSignin, UserResponse, ConfirmEmailParams } from '@/types/user';
import { ApiResponse } from '..';
import axios from '@/util/axios';
import { deleteCookie } from '@/util/cookie';

// Signup
export const fetchSignup = createAsyncThunk<ApiResponse<UserResponse>, UserSignup>(
    'users/fetchSignup',
    async (userData, thunkAPI) => {
        try {
            const { data } = await axios.post('/api/auth/register', userData);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue('Failed to fetch users');
        }
    }
);

// Signin
export const fetchSignin = createAsyncThunk<ApiResponse<UserResponse>, UserSignin>(
    'users/fetchSignin',
    async (userData, thunkAPI) => {
        try {
            const { data } = await axios.post('/api/auth/login', userData);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue('Failed to fetch users');
        }
    }
);

// UserInfo
export const fetchUserInfo = createAsyncThunk<ApiResponse<UserResponse>>(
    'users/fetchUserInfo',
    async (user, thunkAPI) => {
        try {
            const { data } = await axios.get('/api/users/info');
            if (data?.data) {
                localStorage.setItem('userinfo', JSON.stringify(data.data));
            } else {
                localStorage.removeItem('userinfo');
                deleteCookie('jwt');
            }
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue('Failed to fetch users');
        }
    }
);

// Confirm Email
export const confirmEmail = createAsyncThunk<ApiResponse<UserResponse>, ConfirmEmailParams>(
    'users/confirmEmail',
    async ({ token, data }, thunkAPI) => {
        try {
            const response = await axios.patch(`/api/users/confirm-email/${token}`, JSON.stringify(data),
                {
                    headers: {
                        'accept': '*/*',
                        'Content-Type': 'application/json'
                    }
                });
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue('Failed to confirm email');
        }
    }
);
