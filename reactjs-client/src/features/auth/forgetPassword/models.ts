import { IBaseState } from '../../../common/models';

export interface IForgetPasswordModel {
    username: string;
}

export interface IForgetPasswordStateModel extends IBaseState, IForgetPasswordModel {
    isValidForm: boolean;
}

export interface IForgetPasswordProps extends IBaseState {
    forgetPasswordRequestAction: (forgetPasswordModel: IForgetPasswordModel) => void
    redirectToLogin: () => void
    reset: () => void
}