import * as typesActions from './types';
import { AuthParams, UserType } from "./types";

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