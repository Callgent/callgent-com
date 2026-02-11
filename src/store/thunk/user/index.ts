import { UserSignup, UserSignin, UserResponse, ConfirmEmailParams } from '@/types/user';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { deleteCookie } from '@/util/cookie';
import axios from '@/util/axios';
import { ApiResponse } from '..';

// Signup
export const fetchSignup = createAsyncThunk<ApiResponse<UserResponse>, UserSignup>(
    'users/fetchSignup',
    async (userData) => {
        try {
            const { data } = await axios.post('/api/auth/register', userData);
            return data;
        } catch (error) {
            return error?.data;
        }
    }
);

// Signin
export const fetchSignin = createAsyncThunk<ApiResponse<UserResponse>, UserSignin>(
    'users/fetchSignin',
    async (userData) => {
        try {
            const { data } = await axios.post('/api/auth/login', userData);
            return data;
        } catch (error) {
            return error?.data;
        }
    }
);

// UserInfo
export const fetchUserInfo = createAsyncThunk<ApiResponse<UserResponse>>(
    'users/fetchUserInfo',
    async () => {
        try {
            const { data } = await axios.get('/api/users/info');
            if (data?.data) {
                localStorage.setItem('userinfo', JSON.stringify(data.data));
            } else {
                localStorage.removeItem('userinfo');
                deleteCookie('x-callgent-jwt');
            }
            return data;
        } catch (error) {
            return error?.data;
        }
    }
);

// Confirm Email
export const confirmEmail = createAsyncThunk<ApiResponse<UserResponse>, ConfirmEmailParams>(
    'users/confirmEmail',
    async ({ token, data }) => {
        try {
            const response = await axios.patch(`/api/users/confirm-email/${token}`, JSON.stringify(data),
                { headers: { 'accept': '*/*', 'Content-Type': 'application/json' } });
            return response.data;
        } catch (error) {
            return error?.data;
        }
    }
);

// Send a confirmation email
export const sendConfirmEmail = createAsyncThunk<ApiResponse<any>, { email: string }>(
    'users/sendConfirmEmail',
    async (emailData) => {
        try {
            const { data } = await axios.post('/api/users/send-confirm-email', {
                email: emailData.email,
                create: false,
                resetPwd: true,
            });
            return data;
        } catch (error) {
            return error?.data;
        }
    }
);
