import React, { Component } from 'react'
import '../auth.css'

export default class Login extends Component {
    render() {
        return (
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <form>
                        <h3>Login</h3>

                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" className="form-control" placeholder="Enter email"></input>
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Enter password" />
                        </div>

                        <button type="submit" className="btn btn-dark btn-block">Submit</button>
                        <p className="forgot-password text-right">Forgot <a href="#">password?</a></p>

                    </form>
                </div>
            </div>
        )
    }
}
