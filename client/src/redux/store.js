import { configureStore, combineReducers } from "@reduxjs/toolkit"
import { persistReducer, persistStore } from "redux-persist"
import userReducer from "./user/userSlice"
import storage from"redux-persist/lib/storage"

const persistConfig = {
  key: "root",
  storage,
  version: 1
}

const rootReducer = combineReducers({
  user: userReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: 
     persistedReducer,
    middleware: getDwfaultMiddleware =>
      getDwfaultMiddleware({ serializableCheck: false })
  
})

export const persistor = persistStore(store)
