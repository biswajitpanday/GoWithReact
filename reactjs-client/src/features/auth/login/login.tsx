import React, { Component } from 'react';
import { connect } from "react-redux";
import { ILoginProps, ILoginStateModel, ILoginModel } from './models';
import { defaultLoginState, login, reset } from './store';
import { IReducerState } from '../../../helpers/rootStore';
import { Routes } from '../../../helpers/routes';
import { push } from 'connected-react-router';

export class LoginComponent extends Component<ILoginProps, ILoginStateModel> {

    state = defaultLoginState;

    componentWillUnmount() {
        this.props.reset();
    }

    handleInputChange = (event: any) => {
        const model = {
            ...this.state,
            [event.target.name]: event.target.value
        };
        const isValid = this.validateModel(model);
        this.setState({...model, isValidForm: isValid});
    }

    private validateModel(model: ILoginStateModel): boolean {
        const isValid = !!(model.username && model.password);
        return isValid;
    }

    render() {
        console.log("Login Rendered...");
        return (
            <form>
                <h3>Login</h3>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" name="username" value={this.state.username} onChange={this.handleInputChange}></input>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" name="password" value={this.state.password} onChange={this.handleInputChange} />
                </div>

                <button type="button" className="btn btn-dark btn-block" disabled={this.props.isBusy || !this.state.isValidForm} onClick={() => this.props.loginRequestAction(this.state)}>Submit</button>
                <p className="forgot-password text-right">Forgot <a href="/" onClick={(e) => { e.preventDefault(); this.props.redirectToForgotPassword() }}>password?</a></p>

            </form>
        )
    }
}

const mapStateToProps = (state: IReducerState) => {
    return {
        ...state.loginStore
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        loginRequestAction: (loginStateModel: ILoginModel) => dispatch(login(loginStateModel)),
        redirectToForgotPassword: () => dispatch(push(Routes.forgotPassword)),
        redirectToRegister: () => dispatch(push(Routes.register)),
        reset: () => dispatch(reset())
    }
}

export const Login = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginComponent);