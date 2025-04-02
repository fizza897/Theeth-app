import {configureStore} from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query/react"
import storage from "redux-persist/lib/storage"
import {persistReducer,persistStore,FLUSH,REHYDRATE,PAUSE,PURGE,PERSIST,REGISTER} from "redux-persist"
import  userReducer  from "./slice/userSlice"
import {api} from "./api"

// presist configuration for user
const userPersistedConfig={key:"user",storage,whiteList:["user","isEmailVerified","isLoggedIn"]}
// wrap reducer with `persists config`
const persistUserReducer =persistReducer(userPersistedConfig,userReducer)

export const store= configureStore({
    reducer:{
        [api.reducerPath]:api.reducer,
        user:persistUserReducer
    }
})
