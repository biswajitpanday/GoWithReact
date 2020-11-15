import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { combineReducers } from 'redux';
import loginStore from "../features/auth/login/store";
import registrationStore from "../features/auth/registration/store";
import forgetPasswordStore from "../features/auth/forgetPassword/store";
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory()

const reducer =  combineReducers({
    router : connectRouter(history),
    loginStore,
    registrationStore,
    forgetPasswordStore
});

export const store = configureStore({
    reducer : reducer,
    middleware: [...getDefaultMiddleware(), routerMiddleware(history)]
});

export type IReducerState = ReturnType<typeof store.getState>;