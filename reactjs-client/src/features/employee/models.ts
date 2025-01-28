import { IBaseState } from "../../common/models";


export interface IEmployeeModel {

}

export interface IEmployeeStateModel extends IBaseState, IEmployeeModel {
    isValidForm: boolean;
}

export interface IEmployeeProps extends IBaseState {
    reset: () => void
}

export interface IEmployeeResponse {
    firstName: string;
    lastName: string;
    email: string;
    mobile: string;
    skypeId: string;
}