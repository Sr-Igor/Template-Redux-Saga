import { applyMiddleware, Store, AnyAction } from  'redux'
import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware  from 'redux-saga'
import rootReducer from './modules/rootReducers'
import rootSaga from './modules/rootSagas'

const sagaMiddleware = createSagaMiddleware()

const store: Store<unknown, AnyAction> = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware) 
})

sagaMiddleware.run(rootSaga)

export default store
export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch