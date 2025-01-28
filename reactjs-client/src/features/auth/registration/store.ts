import { IRegistrationModel, IRegistrationState } from './models';
import { createSlice, Dispatch } from '@reduxjs/toolkit';
import { Utility } from '../../../helpers/utility';
import { HttpHelpers } from '../../../helpers/httpHelpers';
import { ApiConstant } from '../../../helpers/apiConstant';
import { Routes } from '../../../helpers/routes';
import { push } from 'connected-react-router';

export const registrationState: IRegistrationState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    isBusy: false,
    errorMessage: '',
    isFormValid: false
}

const slice = createSlice({
    name: 'registrationStore',
    initialState: registrationState,
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
                errorMessage: '',
                isBusy: action.payload.data
            }
        }
    }
});

export default slice.reducer

export const registration = (registrationModel: IRegistrationModel) => async (dispatch: Dispatch) => {
    const validationMessage = validateModel(registrationModel)
    if (validationMessage) {
        dispatch(slice.actions.onError({ data: validationMessage }))
        return;
    }
    try {
        dispatch(slice.actions.changeBusyState({ data: true }))
        await HttpHelpers.post<any>(ApiConstant.registration, registrationModel);
        dispatch(push(Routes.login))
    } catch (error) {
        dispatch(slice.actions.changeBusyState({ data: false }))
        if (error instanceof Error && error.message) {
            dispatch(slice.actions.onError({ data: error.message }));
        } else {
            dispatch(slice.actions.onError({ data: 'An unknown error occurred' }));
        }
    }
}

export const reset = () => async (dispatch: Dispatch) => {
    dispatch(slice.actions.changeBusyState({ data: false }));
}

/* #region  Supported Methods */

const validateModel = (registrationModel: IRegistrationModel): string => {
    if (!Utility.ValidateEmail(registrationModel.email)) {
        return 'Email address is not valid';
    }
    if (registrationModel.password.length < 8) {
        return 'Minimum password length is 8';
    }
    if (registrationModel.password !== registrationModel.confirmPassword) {
        return 'Password did not match';
    }
    return '';
}

/* #endregion */

