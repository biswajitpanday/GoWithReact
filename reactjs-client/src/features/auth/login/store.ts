import { createSlice, Dispatch } from '@reduxjs/toolkit';
import { ILoginStateModel, ILoginModel } from './models';
import { Utility } from '../../../helpers/utility';

export const defaultLoginState: ILoginStateModel = {
    username: '',
    password: '',
    isBusy: false,
    errorMessage: '',
    isValidForm: false
}

const slice = createSlice({
    name: 'loginStore',
    initialState: defaultLoginState,
    reducers: {
        onError: (state, action) => {
            return {
                ...state,
                isBusy: false,
                errorMessage: action.payload.data
            }
        },

        changeBusyState: (state, action) => {
            return {
                ...state,
                errorMessage: "",
                isBusy: action.payload.data
            }
        }
    }
});

export default slice.reducer;

export const login = (loginModel: ILoginModel) => async (dispatch: Dispatch) => {
    try {
        if(!Utility.ValidateEmail(loginModel.username)) {
            dispatch(slice.actions.onError({ data: "Invalid Email Address." }));
            return;
        }
        dispatch(slice.actions.changeBusyState({ data: true }));
        

    } catch (error) {
        dispatch(slice.actions.changeBusyState({data: false }));
        dispatch(slice.actions.onError({ data: error.messages }));
    }
}