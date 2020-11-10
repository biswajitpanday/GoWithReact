import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import loginStore from "../features/auth/login/store";
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory()

const reducer =  combineReducers({
    router : connectRouter(history),
    loginStore
});

export const store = configureStore({
    reducer : reducer,
    middleware: [...getDefaultMiddleware()]
});

export type IReducerState = ReturnType<typeof store.getState>;