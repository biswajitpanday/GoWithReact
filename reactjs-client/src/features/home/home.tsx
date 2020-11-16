import React, { Component } from 'react'
import { TopNav } from '../../common/topNav'
import { AppLayout } from '../../layouts/appLayout'

export default class Home extends Component {
    render() {
        return (
            <AppLayout>
                <TopNav></TopNav>
                <h1>Welcome Home</h1>
            </AppLayout>
        )
    }
}
