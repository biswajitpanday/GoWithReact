import React, { Component } from 'react'
import { IReducerState } from '../../../helpers/rootStore';
import { IRegistrationProps, IRegistrationState } from './models';
import { registration, registrationState, reset } from './store';
import { Routes } from '../../../helpers/routes';
import { push } from 'connected-react-router';
import { connect } from 'react-redux';

export class RegistrationComponent extends Component<IRegistrationProps, IRegistrationState> {

    state = registrationState

    handleInputChange = (event: any) => {
        const model = {
            ...this.state,
            [event.target.name]: event.target.value
        }
        const isValid = this.validateModel(model);
        this.setState({
            ...model,
            isFormValid: isValid
        })
    }

    /* #region  Private Methods */

    private validateModel(model: IRegistrationState): boolean {
        const isValid = !!(model.firstName &&
            model.lastName &&
            model.email &&
            model.password &&
            model.confirmPassword);
        return isValid;
    }

    /* #endregion */


    render() {
        return (
            <form>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" name="firstName" value={this.state.firstName} onChange={this.handleInputChange} />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" name="lastName" value={this.state.lastName} onChange={this.handleInputChange}/>
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" name="email" value={this.state.email} onChange={this.handleInputChange}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" name="password" value={this.state.password} onChange={this.handleInputChange}/>
                </div>

                <div className="form-group">
                    <label>Confirm Password</label>
                    <input type="password" className="form-control" placeholder="Confirm password " name="confirmPassword" value={this.state.confirmPassword} onChange={this.handleInputChange}/>
                </div>

                <button type="button" className="btn btn-dark btn-block" disabled={this.props.isBusy || !this.state.isFormValid} onClick={() => this.props.registrationRequestAction(this.state)}>Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="/" onClick={(e) => { e.preventDefault(); this.props.redirectToLogin() }}>sign in?</a>
                </p>
            </form>
        )
    }
}

const mapStateToProps = (state: IReducerState) => {
    return {
        ...state.registrationStore
    };
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        registrationRequestAction: (registrationState: IRegistrationState) => dispatch(registration(registrationState)),
        redirectToForgotPassword: () => dispatch(push(Routes.forgotPassword)),
        redirectToLogin: () => dispatch(push(Routes.login)),
        reset: () => reset()
    }
}

export const Registration = connect(
    mapStateToProps,
    mapDispatchToProps
)(RegistrationComponent);