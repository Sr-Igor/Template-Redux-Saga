import { AuthParams, UserType } from "./actions";
import * as typesActions from './types';

type UserState = {
    user: UserType | null;
    loading: boolean;
    success: boolean;
    error: string;
}

export type AuthAction = {
    type: string;
    payload?: AuthParams;
}

const initialState = {
    user: null,
    loading: false,
    success: false,
    error: ''
}

export default function authReducer(state: UserState = initialState, action: AuthAction) {
    switch (action.type) {
        case typesActions.AUTH_USER_REQUEST:
            return {
                user: action.payload,
                loading: true,
                success: false,
                error: ''
            }
        case typesActions.AUTH_USER_SUCCESS:
            return {
                user: action.payload,
                loading: false,
                success: true,
                error: ''
            }
        case typesActions.AUTH_USER_FAILURE:
            return {
                user: null,
                loading: false,
                success: false,
                error: 'Failure to authenticate user'
            }
        default:
            return state;
    }
}