'use client';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/store';
import { UserResponse, UserSignin } from '@/types/user';
import { ApiResponse, confirmEmail, fetchUserInfo } from '@/store/thunk';
import { param } from '@/util/location';

const ResetPage = () => {
    const dispatch = useDispatch<AppDispatch>();
    const [error, setError] = useState<string | null>(null);

    const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const formValues = Object.fromEntries(formData.entries()) as { password: string, confirmPassword: string };
        const { token } = param();

        if (formValues.password !== formValues.confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        setError(null); // 清除错误信息

        dispatch(confirmEmail({ token, data: formValues.password })).then((req) => {
            const { data } = req.payload as ApiResponse<UserResponse>;
            if (data) {
                // window.location.href = '/signin';
            }
        });
    };

    return (
        <form onSubmit={onFormSubmit}>
            <div className="mb-8">
                <label
                    htmlFor="password"
                    className="mb-3 block text-sm text-dark dark:text-white"
                >
                    Your Password
                </label>
                <input
                    type="password"
                    name="password"
                    placeholder="Enter your Password"
                    className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                />
            </div>
            <div className="mb-8">
                <label
                    htmlFor="confirmPassword"
                    className="mb-3 block text-sm text-dark dark:text-white"
                >
                    Confirm Password
                </label>
                <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm your Password"
                    className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                />
                {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            </div>
            <div className="mb-6">
                <button className="flex w-full items-center justify-center rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark">
                    Confirm
                </button>
            </div>
        </form>
    );
};

export default ResetPage;
