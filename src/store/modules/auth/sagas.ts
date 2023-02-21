import * as typesActions from './types';
import { AuthAction, UserType } from './types';
import { call, put, all, takeLatest } from 'redux-saga/effects';
import { authUserFailure, authUserSuccess } from "./actions";

let user: UserType | null = null;

const userRequest = async (action: Pick<AuthAction, 'payload'>) => {
    //Do request with autentication link 

    user = {
        email: 'mock@email.com',
        name: 'mock name',
        token: 'mock token',
        genre: 'mock genre',
        active: true,
        age: 20
    }
    return true

    //To see error 
    // throw new Error('Error to authenticate user')
}

export function* userAuth(action: AuthAction) {
    try {
        yield call(userRequest, action)
        yield put(authUserSuccess(user as UserType))
    }catch(err) {
        yield put(authUserFailure())
    }
}

export default all([takeLatest(typesActions.AUTH_USER_REQUEST, userAuth)])