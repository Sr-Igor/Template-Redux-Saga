import * as typesActions from './types';

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

export const authUserRequest = (params: AuthParams) => {
    return {
        type: typesActions.AUTH_USER_REQUEST,
        payload: params
    }
}

export const authUserSuccess = (params: UserType) => {
    return {
        type: typesActions.AUTH_USER_SUCCESS,
        payload: params
    }
}

export const authUserFailure = () => {
    return {
        type: typesActions.AUTH_USER_FAILURE,
    }
}