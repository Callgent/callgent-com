'use client';
import { AppDispatch } from '@/store';
import { ApiResponse, fetchSignin, fetchUserInfo, sendConfirmEmail } from '@/store/thunk';
import { UserResponse, UserSignin } from '@/types/user';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import useSubmitForm from '@/hooks/button';
import { useRouter } from 'next/navigation';

const SigninPage = () => {
    const dispatch = useDispatch<AppDispatch>();
    const [showForgotPassword, setShowForgotPassword] = useState(false);
    const [state, setState] = useState(false);
    const router = useRouter();
    const { isSubmitting, error, handleSubmit, setError } = useSubmitForm();

    const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        handleSubmit(async () => {
            const formData = new FormData(event.currentTarget);
            const formValues = Object.fromEntries(formData.entries()) as UserSignin;
            const req = await dispatch(fetchSignin(formValues));
            const redirect = window.location.search?.split('=')[1] || '/';
            const payload = req.payload as ApiResponse<UserSignin>;
            if (payload.data) {
                await dispatch(fetchUserInfo());
                router.push(redirect);
            } else {
                throw new Error(payload.message as string);
            }
        });
    };

    const onForgotPasswordSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        handleSubmit(async () => {
            const formData = new FormData(event.currentTarget);
            const email = formData.get('email') as string;
            const req = await dispatch(sendConfirmEmail({ email }));
            const { data, message } = req.payload as ApiResponse<UserResponse>;
            if (!data) {
                throw new Error(message as string);
            } else {
                setState(true);
            }
        });
    };

    return (
        <div>
            {!showForgotPassword ? (
                <form onSubmit={onFormSubmit}>
                    <div className="mb-8">
                        <label
                            htmlFor="email"
                            className="mb-3 block text-sm text-dark dark:text-white"
                        >
                            Your Email
                        </label>
                        <input
                            type="email"
                            required
                            name="username"
                            placeholder="Enter your Email"
                            className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        />
                    </div>
                    <div className="mb-8">
                        <label
                            htmlFor="password"
                            className="mb-3 block text-sm text-dark dark:text-white"
                        >
                            Your Password
                        </label>
                        <input
                            type="password"
                            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}"
                            required
                            title="Password must be 8-16 characters long and include at least one uppercase letter, one lowercase letter, and one number."
                            name="password"
                            placeholder="Enter your Password"
                            className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        />
                        {error && <p className="text-red-600 text-sm my-2">{error}</p>}
                    </div>
                    <div className="mb-8 flex flex-col justify-between sm:flex-row sm:items-center">
                        <div className="mb-4 sm:mb-0">
                            <label
                                htmlFor="checkboxLabel"
                                className="flex cursor-pointer select-none items-center text-sm font-medium text-body-color"
                            >
                                <div className="relative">
                                    <input
                                        type="checkbox"
                                        id="checkboxLabel"
                                        className="sr-only"
                                    />
                                    <div className="box mr-4 flex h-5 w-5 items-center justify-center rounded border border-body-color border-opacity-20 dark:border-white dark:border-opacity-10">
                                        <span className="opacity-0">
                                            <svg
                                                width="11"
                                                height="8"
                                                viewBox="0 0 11 8"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
                                                    fill="#3056D3"
                                                    stroke="#3056D3"
                                                    strokeWidth="0.4"
                                                />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                                Keep me signed in
                            </label>
                        </div>
                        <div>
                            <span
                                onClick={() => { setShowForgotPassword(true); setState(false); setError(null); }}
                                className="text-sm cursor-pointer font-medium text-primary hover:underline"
                            >
                                Forgot Password?
                            </span>
                        </div>
                    </div>
                    <div className="mb-6">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`flex w-full items-center justify-center rounded-sm px-9 py-4 text-base font-medium text-white shadow-submit duration-300 ${isSubmitting ? 'bg-primary/50 cursor-not-allowed' : 'bg-primary hover:bg-primary/90 dark:shadow-submit-dark'
                                }`}
                        >
                            Sign in
                        </button>
                    </div>
                </form>
            ) : (
                <form onSubmit={onForgotPasswordSubmit}>
                    <div className="mb-8">
                        <label
                            htmlFor="email"
                            className="mb-3 block text-dark dark:text-white"
                        >
                            Your Email
                        </label>
                        <input
                            type="email"
                            required
                            name="email"
                            placeholder="Enter your Email"
                            className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        />
                        {error && !state && <p className="text-red-600 text-sm mt-2">{error}</p>}
                        {state && <div className=" text-sm mt-4 text-lime-700">Please go to your email to set up your account!</div>}
                    </div>
                    <div className="mb-6">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`flex w-full items-center justify-center rounded-sm px-9 py-4 text-base font-medium text-white shadow-submit duration-300 ${isSubmitting ? 'bg-primary/50 cursor-not-allowed' : 'bg-primary hover:bg-primary/90 dark:shadow-submit-dark'
                                }`}
                        >
                            Send Reset Email
                        </button>
                    </div>
                    <div className="mb-6">
                        <button
                            type="button"
                            onClick={() => { setShowForgotPassword(false); setState(false); setError(null); }}
                            className="flex w-full items-center justify-center rounded-sm bg-secondary px-9 py-4 text-base font-medium shadow-submit duration-300 hover:bg-secondary/90 dark:shadow-submit-dark"
                        >
                            Return to Sign In
                        </button>
                    </div>
                </form>
            )}
        </div>
    );
};

export default SigninPage;
