import { createSlice, Dispatch } from '@reduxjs/toolkit';
import { ApiConstant } from '../../helpers/apiConstant';
import { HttpHelpers } from '../../helpers/httpHelpers';
import { IEmployeeModel, IEmployeeResponse, IEmployeeStateModel } from './models';

export const defaultEmployeeState: IEmployeeStateModel = {
    isBusy: false,
    errorMessage: '',
    isValidForm: false
}

const slice = createSlice({
    name: 'employeeStore',
    initialState: defaultEmployeeState,
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
        },
    }
});

export default slice.reducer;

export const employees = (employeeModel: IEmployeeModel) => async (dispatch: Dispatch) => {
    try {
        console.log(employeeModel);
        dispatch(slice.actions.changeBusyState({ data: true }));
        const response = await HttpHelpers.post<Array<IEmployeeResponse>>(ApiConstant.employee, employeeModel);
        return response;
    } catch (error) {
        dispatch(slice.actions.changeBusyState({ data: false }));
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