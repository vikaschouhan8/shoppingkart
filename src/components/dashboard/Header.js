import React, { Component } from 'react';
import { MDBIcon } from "mdbreact";

class Header extends Component {
    render() {
        return (
            <div className="header navbar fixed-top">
                <a href="#" className="nav-trigger">
                    <span><MDBIcon icon="flag-checkered" size="2x" className="deep-purple-text"/></span>
                    <span style={{color: 'aliceblue',fontSize: '26px'}}>Employee Management System</span>
                </a>
            </div>
        );
    }
}

export default Header;