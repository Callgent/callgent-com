'use client';
import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchSignup } from '@/store/thunk';
import { AppDispatch, } from '@/store';
import { UserSignup } from '@/types/user';
import { setCookie } from '@/util/cookie';
import useSubmitForm from '@/hooks/button';

const SignupPage = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { isSubmitting, error, handleSubmit } = useSubmitForm();
    const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        handleSubmit(async () => {
            const formData = new FormData(event.currentTarget);
            const formValues = Object.fromEntries(formData.entries()) as UserSignup;
            const { payload }: any = await dispatch(fetchSignup(formValues));
            try {
                const token = payload;
                setCookie('x-callgent-jwt', token.meta.token);
                window.location.href = '/';
            } catch (error) {
                throw new Error(payload?.message);
            }
        });
    };
    return (
        <form onSubmit={onFormSubmit}>
            <div className="mb-8">
                <label
                    htmlFor="name"
                    className="mb-3 block text-sm text-dark dark:text-white"
                >
                    Full Name
                </label>
                <input
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                />
            </div>
            <div className="mb-8">
                <label
                    htmlFor="email"
                    className="mb-3 block text-sm text-dark dark:text-white"
                >
                    Work Email
                </label>
                <input
                    type="email"
                    name="email"
                    required
                    placeholder="Enter your Email"
                    className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                />
            </div>
            <div className="mb-2">
                <label
                    htmlFor="password"
                    className="mb-3 block text-sm text-dark dark:text-white"
                >
                    Your Password
                </label>
                <input
                    type="password"
                    name="credentials"
                    placeholder="Enter your Password"
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}"
                    required
                    title="Password must be 8-16 characters long and include at least one uppercase letter, one lowercase letter, and one number."
                    className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                />
            </div>
            <div className="mb-2">
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </div>
            <div className="mb-8 flex">
                <label
                    htmlFor="checkboxLabel"
                    className="flex cursor-pointer select-none text-sm font-medium text-body-color"
                >
                    <div className="relative">
                        <input
                            type="checkbox"
                            id="checkboxLabel"
                            required
                            className="sr-only"
                        />
                        <div className="box mr-4 mt-1 flex h-5 w-5 items-center justify-center rounded border border-body-color border-opacity-20 dark:border-white dark:border-opacity-10">
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
                    <span>
                        By creating account means you agree to the
                        <a href="/terms-of-service" className="text-primary hover:underline">
                            Terms and Conditions
                        </a>
                        , and our
                        <a href="/privacy-policy" className="text-primary hover:underline">
                            Privacy Policy
                        </a>
                    </span>
                </label>
            </div>
            <div className="mb-6">
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`flex w-full items-center justify-center rounded-sm px-9 py-4 text-base font-medium text-white shadow-submit duration-300 ${isSubmitting ? 'bg-primary/50 cursor-not-allowed' : 'bg-primary hover:bg-primary/90 dark:shadow-submit-dark'
                        }`}
                >
                    Sign up
                </button>
            </div>
        </form>
    );
};

export default SignupPage;
