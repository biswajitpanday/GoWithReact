import React, { Component } from 'react';
import '../auth.css';
import { connect } from "react-redux";
import { ILoginProps, ILoginStateModel, ILoginModel } from './models';
import { defaultLoginState, login } from './store';
import { IReducerState } from '../../../helpers/rootStore';

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
        return (
            <div className="auth-wrapper">
                <div className="auth-inner">
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

                        <button type="submit" className="btn btn-dark btn-block">Submit</button>
                        <p className="forgot-password text-right">Forgot <a href="#">password?</a></p>

                    </form>
                </div>
            </div>
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
        loginRequestAction: (loginStateModel: ILoginModel) => dispatch(login(loginStateModel))
        
    }
}


export const Login = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginComponent);