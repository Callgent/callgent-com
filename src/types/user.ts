export type UserSignin = {
    email: string;
    password: string;
}

export type UserSignup = {
    name: string;
    email: string;
    password: string;
}


export type UserResponse = {
    avatar?: string;
    email?: string;
}

export type userSliceType = {
    userData: UserResponse,
    loading: boolean,
    value: number,
}

export type ConfirmEmailParams = {
    token: string;
    data: string;
}
