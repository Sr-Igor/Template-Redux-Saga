import './index.css'
import App from './App'
import React from 'react'
import ReactDOM from 'react-dom/client'

//Redux Providers
import {store, persistor} from './store'
import { Provider as ReduxProvider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

//-------------------------------APP --------------------------------------/
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </ReduxProvider>
  </React.StrictMode>,
)
