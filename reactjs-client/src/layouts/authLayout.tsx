import React, { Component } from 'react'
import './auth.css';

export class AuthLayout extends Component {
    render() {
        const {children} = this.props;
        return (
            <div className="auth-wrapper">
                <div className="auth-inner">
                    {children}
                </div>    
            </div>
        )
    }
}
