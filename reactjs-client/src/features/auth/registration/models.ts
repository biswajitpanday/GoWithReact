import { IBaseState } from '../../../common/models';


export interface IRegistrationModel {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export interface IRegistrationState extends IRegistrationModel, IBaseState {
    isFormValid: boolean;
}

export interface IRegistrationProps extends IBaseState {
    registrationRequestAction: (registrationModel: IRegistrationState) => void
    redirectToForgotPassword: () => void
    redirectToLogin: () => void
    reset : () => void
}