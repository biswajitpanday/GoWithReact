import { ILoginStateModel } from './models';

export const defaultLoginState: ILoginStateModel = {
    username: '',
    password: '',
    isBusy: false,
    errorMessage: '',
    isValidForm: false
}