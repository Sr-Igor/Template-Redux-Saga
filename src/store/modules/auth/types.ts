//Type Actions
export const AUTH_USER_REQUEST = '@auth_user/AUTH_USER_REQUEST'
export const AUTH_USER_SUCCESS = '@auth_user/AUTH_USER_SUCCESS'
export const AUTH_USER_FAILURE = '@auth_user/AUTH_USER_FAILURE'

//Reduce Types
export type UserState = {
    user: UserType | null;
    loading: boolean;
    success: boolean;
    error: string;
}

export type AuthAction = {
    type: string;
    payload?: AuthParams;
}

export type AuthParams = {
    email: string;
    password: string;
}

export type UserType = {
    email: string,
    name: string,
    token: string
    genre: string,
    active: boolean,
    age: number,
}