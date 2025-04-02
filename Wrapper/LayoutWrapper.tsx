"use client"
import React from 'react'
import { Provider } from 'react-redux'
import { store, persistor } from '../store/store';
import { PersistGate } from 'redux-persist/integration/react';
import BookLoader from '@/lib/bookLoader';
import {Toaster} from "react-hot-toast"

const LayoutWrapper = ({children}:{children:React.ReactNode}) => {
  return (    
    <>
    <Provider store={store}>
        <PersistGate loading={<BookLoader/>} persistor={persistor}>
        <Toaster/>
            {children}
        </PersistGate>
    </Provider>
    </>
  )
}

export default LayoutWrapper