//Create Store
import { Store, AnyAction } from  'redux'
import createSagaMiddleware  from 'redux-saga'
import { configureStore } from '@reduxjs/toolkit'

//Persistor
import { persistStore, persistReducer } from 'redux-persist'

//Modules Configs
import rootSaga from './modules/rootSagas'
import rootReducer from './modules/rootReducers'
import { persistConfig } from './modules/rootPersistors'

//--------------------------------------Configure Store--------------------------------------//

//Perisistor Module
const persistedReducer = persistReducer(persistConfig, rootReducer)

//Create Saga
const sagaMiddleware = createSagaMiddleware()

//Default Store
const store: Store<unknown, AnyAction> = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }).concat(sagaMiddleware) 
})

//Default Persistor
const persistor = persistStore(store)

//Run Sagas
sagaMiddleware.run(rootSaga)

//----------------------------------------- Exports ----------------------------------------//
export {store, persistor}
export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch