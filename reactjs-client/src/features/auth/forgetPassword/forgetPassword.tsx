import { push } from "connected-react-router";
import React, { Component } from "react";
import { connect } from "react-redux";
import { IReducerState } from "../../../helpers/rootStore";
import { Routes } from "../../../helpers/routes";
import {
  IForgetPasswordModel,
  IForgetPasswordProps,
  IForgetPasswordStateModel,
} from "./models";
import { forgetPassword, reset, defaultForgetPasswordState } from "./store";

export class ForgetPasswordComponent extends Component<
  IForgetPasswordProps,
  IForgetPasswordStateModel
> {
  state = defaultForgetPasswordState;

  componentWillUnmount() {
    this.props.reset();
  }

  handleInputChange = (event: any) => {
    const model = {
      ...this.state,
      [event.target.name]: event.target.value,
    };
    const isValid = this.validateModel(model);
    this.setState({ ...model, isValidForm: isValid });
  };

  private validateModel(model: IForgetPasswordStateModel): boolean {
    const isValid = !!model.username;
    return isValid;
  }

  render() {
    return (
      <form>
        <h3>Forget Password</h3>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            name="username"
            value={this.state.username}
            onChange={this.handleInputChange}
          ></input>
        </div>

        <button
          type="button"
          className="btn btn-dark btn-block"
          disabled={this.props.isBusy || !this.state.isValidForm}
          onClick={() => this.props.forgetPasswordRequestAction(this.state)}
        >
          Submit
        </button>

        <p className="forgot-password text-right">
          <a href="/">Sign in</a>
        </p>
      </form>
    );
  }
}

const mapStateToProps = (state: IReducerState) => {
  return {
    ...state.loginStore,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    forgetPasswordRequestAction: (
      forgetPasswordStateModel: IForgetPasswordModel
    ) => dispatch(forgetPassword(forgetPasswordStateModel)),
    redirectToLogin: () => dispatch(push(Routes.login)),
    reset: () => dispatch(reset()),
  };
};

export const ForgetPassword = connect(
  mapStateToProps,
  mapDispatchToProps
)(ForgetPasswordComponent);
