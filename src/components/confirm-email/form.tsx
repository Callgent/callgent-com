'use client';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/store';
import { UserResponse } from '@/types/user';
import { ApiResponse, confirmEmail } from '@/store/thunk';
import { param } from '@/util/location';

const ResetPage = () => {
    const dispatch = useDispatch<AppDispatch>();
    const [error, setError] = useState<string | null>(null);
    const [params, setParam] = useState({ token: null, resetPwd: null });
    useEffect(() => {
        const { token, resetPwd } = param();
        setParam({ token, resetPwd });
    }, []);

    const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const formValues = Object.fromEntries(formData.entries()) as { password: string, confirmPassword: string };

        if (formValues.password !== formValues.confirmPassword) {
            setError('Passwords do not match');
            return;
        }
        setError(null);
        dispatch(confirmEmail({ token: params.token, data: formValues.password })).then((req) => {
            const { data } = req.payload as ApiResponse<UserResponse>;
            if (data) {
                window.location.href = '/';
            }
        }).catch(() => {
            setError('Password reset failed, please try again later.');
        });
    };

    return (
        <>
            <h3 className="mb-10 text-2xl font-bold text-black dark:text-white sm:text-3xl">
                Reset in to your password
            </h3>
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
                    {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
                </div>
                <div className="mb-6">
                    <button className="flex w-full items-center justify-center rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark">
                        Confirm
                    </button>
                </div>
            </form>
        </>
    );
};

export default ResetPage;
