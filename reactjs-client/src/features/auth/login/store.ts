import { createSlice, Dispatch } from '@reduxjs/toolkit';
import { ILoginStateModel, ILoginModel, ILoginResponse } from './models';
import { Utility } from '../../../helpers/utility';
import { HttpHelpers } from '../../../helpers/httpHelpers';
import { ApiConstant } from '../../../helpers/apiConstant';
import { LocalStorageHelper } from '../../../helpers/localStorageHelper';
import { push } from 'connected-react-router';
import { Routes } from '../../../helpers/routes';

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
        console.log(loginModel);
        if(!Utility.ValidateEmail(loginModel.username)) {
            dispatch(slice.actions.onError({ data: "Invalid Email Address." }));
            return;
        }
        dispatch(slice.actions.changeBusyState({ data: true }));
        const response = await HttpHelpers.post<ILoginResponse>(ApiConstant.login, loginModel);
        LocalStorageHelper.AccessToken = response.token;
        dispatch(push(Routes.root));
        

    } catch (error) {
        dispatch(slice.actions.changeBusyState({data: false }));
        dispatch(slice.actions.onError({ data: error.messages }));
    }
}

export const reset = () => async(dispatch: Dispatch) => {
    dispatch(slice.actions.changeBusyState({ data: false }));
}