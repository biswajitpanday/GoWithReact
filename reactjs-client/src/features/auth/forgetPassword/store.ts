import { createSlice, Dispatch } from '@reduxjs/toolkit';
import { Utility } from '../../../helpers/utility';
import { HttpHelpers } from '../../../helpers/httpHelpers';
import { ApiConstant } from '../../../helpers/apiConstant';
import { push } from 'connected-react-router';
import { Routes } from '../../../helpers/routes';
import { IForgetPasswordModel, IForgetPasswordStateModel } from './models';

export const defaultForgetPasswordState: IForgetPasswordStateModel = {
    username: '',
    isBusy: false,
    errorMessage: '',
    isValidForm: false
}

const slice = createSlice({
    name: 'forgetPasswordStore',
    initialState: defaultForgetPasswordState,
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

export const forgetPassword = (forgetPasswordModel: IForgetPasswordModel) => async (dispatch: Dispatch) => {
    try {
        if(!Utility.ValidateEmail(forgetPasswordModel.username)) {
            dispatch(slice.actions.onError({ data: "Invalid Email Address." }));
            return;
        }
        dispatch(slice.actions.changeBusyState({ data: true }));
        const response = await HttpHelpers.post<boolean>(ApiConstant.forgetPassword, forgetPasswordModel);
        if(response) {
            dispatch(push(Routes.login));
        }
    } catch (error) {
        dispatch(slice.actions.changeBusyState({data: false }));
        dispatch(slice.actions.onError({ data: error.messages }));
    }
}

export const reset = () => async(dispatch: Dispatch) => {
    dispatch(slice.actions.changeBusyState({ data: false }));
}