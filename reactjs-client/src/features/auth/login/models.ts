import { IBaseState } from '../../../common/models';

export interface ILoginModel {
    username: string;
    password: string;
}

export interface ILoginStateModel extends IBaseState, ILoginModel {
    isValidForm: boolean;
}

export interface ILoginProps extends IBaseState {
    loginRequestAction: (loginModel: ILoginModel) => void;
    redirectToRegister: () => void
    reset: () => void
}

export interface ILoginResponse {
    token: string
}