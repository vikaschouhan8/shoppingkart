import React, { Component } from 'react';
import './dashboard.css'
import Sidenav from './Sidenav';
import Header from './Header';
import MainContent from './MainContent';
// https://mdbootstrap.com/docs/react/content/icons-usage/

class Dashboard extends Component {
    render() {
        return (
            <>
            <Header />
            <Sidenav />
                {/* <div>
                    Test
                </div> */}
            {/* <MainContent /> */}
            </>
        );
    }
}

export default Dashboard;