import React, { Component } from 'react'
import { defaultEmployeeState, reset, employee } from './store';
import { IEmployeeProps, IEmployeeStateModel } from './models';
import { connect } from 'react-redux';
import { IReducerState } from '../../helpers/rootStore';

export class EmployeeComponent extends Component<IEmployeeProps> {
    state = defaultEmployeeState
    render() {
        return (
            <div className="row">
                <div className="col-6 offset-3 mt-5">
                    <div>
                        <h3 className="float-left">Employee Contacts</h3>
                        <button type="button" className="btn btn-sm btn-outline-dark float-right" >Add New</button>
                    </div>

                    <table className="table table-bordered mt-4">
                        <thead>
                        <tr>
                            <th>Firstname</th>
                            <th>Lastname</th>
                            <th>Email</th>
                            <th>Mobile</th>
                            <th>skype_id</th>
                        </tr>
                        </thead>
                        <tbody>
                            
                                <tr>
                                    <td>John</td>
                                    <td>Doe</td>
                                    <td>john@example.com</td>
                                    <td>+8801XXXXXXXX</td>
                                    <td>john_doe</td>
                                </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state: IReducerState) => {
    return {
        ...state.employeeStore
    };
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        employeeRequestAction: (employeeState: IEmployeeStateModel) => dispatch(employee(employeeState)),
        reset: () => reset()
    }
}

export const Employee = connect(
    mapStateToProps,
    mapDispatchToProps
)(EmployeeComponent);