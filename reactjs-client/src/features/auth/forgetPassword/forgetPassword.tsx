import React, { Component } from 'react'

export default class ForgetPassword extends Component {
    render() {
        return (
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <form>
                        <h3>Forget Password</h3>

                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" className="form-control" placeholder="Enter email"></input>
                        </div>

                        <button type="submit" className="btn btn-dark btn-block">Submit</button>
                        
                        <p className="forgot-password text-right">
                            <a href="#">Sign in?</a>
                        </p>

                    </form>
                </div>
            </div>
        )
    }
}
