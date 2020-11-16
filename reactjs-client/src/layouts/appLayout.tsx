import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import { LocalStorageHelper } from '../helpers/localStorageHelper';
import { Routes } from '../helpers/routes';

export class AppLayout extends Component {
    render() {
        const {children} = this.props;
        if(LocalStorageHelper.isUserAuthorized) {
            return (
                <>
                    {children}
                </>
            )
        }
        return (<Redirect to={{ pathname: Routes.login }} />)
    }
}
