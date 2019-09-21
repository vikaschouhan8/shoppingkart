import React from 'react';
import SideNav from './SideNav';
import ProductList from './ProductList';
import '../Sidenav.css'
const Dashboard = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <SideNav />
                    </div>
                    <div className="col-md-8">
                        <ProductList />
                    </div>
                </div>
            </div>

        </>
    );
}

export default Dashboard;
