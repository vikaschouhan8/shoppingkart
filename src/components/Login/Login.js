import React, { Component } from 'react';
import './Login.css'
import { NavLink } from 'react-router-dom'

class Login extends Component {

    render() {
        return (
            <div className="container loginBg">
                <div className="row">
                    <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <div className="card card-signin my-5">
                            <div className="card-body">
                                <h5 className="card-title text-center">Login</h5>

                                <form className="form-signin">

                                    <div className="form-label-group">
                                        <input type="username" className="form-control" placeholder="Email address"  />
                                        <label htmlFor="inputEmail">User name</label>
                                    </div>

                                    <div className="form-label-group">
                                        <input type="password" className="form-control" placeholder="Password"  />
                                        <label htmlFor="inputPassword">Password</label>
                                    </div>

                                    <div className="custom-control custom-checkbox mb-3">
                                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                        <label className="custom-control-label" htmlFor="customCheck1">Remember password</label>
                                    </div>

                                    <button className="btn btn-lg btn-primary btn-block text-uppercase" >
                                        <NavLink exact to="/dashboard">Login</NavLink>
                                    </button>
                                    <hr className="my-4" />

                                </form>
                                <NavLink exact to="/dashboard">Login</NavLink>
    
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;