import storage from 'redux-persist/lib/storage'

export const persistConfig = {
    key: '@root',
    storage,

    //Is persisted in local storage
    whitelist: ['auth'],

    //Is not persisted in local storage
    blacklist: []
}