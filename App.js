// import * as React from 'react';
// import  Nav from './Nav'
// import {Provider} from 'react-redux'
// import {store,persistor} from './src/app/configureStore'
// import { PersistGate } from 'redux-persist/integration/react'



// export default function Root(){
//   return (
//     <Provider store={store}>
//         <PersistGate loading={null} >
//           <Nav />
//       </PersistGate>
//     </Provider>
//   )
// }


import * as React from 'react';
import  Nav from './Nav'
import { configureStore } from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from '@react-native-async-storage/async-storage';
import { PersistGate } from 'redux-persist/integration/react'
import counterReducer from './src/features/expense.slice'
import {Provider} from 'react-redux'
import rootReducer from './src/app/store'

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const persistedReducer = persistReducer(persistConfig, counterReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

let persistor = persistStore(store)



export default function Root(){
  return (
    <Provider store={store}>
       <PersistGate loading={null} persistor={persistor}>
          <Nav />
          </PersistGate>
    </Provider>
  )
}
