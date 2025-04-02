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
        [api.reducerPath]:api.reducer, // rtk query api
        user:persistUserReducer
    },
    middleware:(getDefaultMiddleWare)=>
        getDefaultMiddleWare({
            serializableCheck:{
                ignoredActions:[FLUSH,REHYDRATE,PAUSE,PURGE,PERSIST,REGISTER]
            },
        }).concat(api.middleware)
});
// setup the listner  for RTK QUERY
setupListeners(store.dispatch);
// create a persistor
export const persistor =persistStore(store)
// infer the `RootState` and `Appdispatch` types from the store it self
export type RootState = ReturnType<typeof store.getState>
// interred type:{postState,comments:CommentState,users:UserState}
export type AppDispatch =typeof store.dispatch