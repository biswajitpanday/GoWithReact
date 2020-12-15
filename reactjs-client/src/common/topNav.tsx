import { push } from 'connected-react-router';
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Routes } from '../helpers/routes';
import "./topNav.css"
import { FaGripfire } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default class TopNavComponent extends Component<any> {
    render() {
        return (
            <>
                <button data-trigger="#navbar_main" className="d-lg-none float-left btn btn-dark m-3" type="button">  <FaGripfire /> </button>

                <nav id="navbar_main" className="mobile-offcanvas navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="offcanvas-header">
                        <FaGripfire />
                    </div>
                    <ul className="navbar-nav">
                        <li className="nav-item active"> <Link to={"/"} className="nav-link" href="/">Home </Link> </li>
                        <li className="nav-item"><Link to={"/about"} className="nav-link" href="/"> About </Link></li>
                        <li className="nav-item"><Link to={"/services"} className="nav-link" href="/"> Services </Link></li>
                    </ul>
                </nav>
            </>
        )
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        goToLogin: () => dispatch(push(Routes.login)),
    }
}

export const TopNav = connect(
    null,
    mapDispatchToProps
)(TopNavComponent);