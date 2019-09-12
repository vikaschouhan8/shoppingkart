// import React, { Component } from 'react';
// import './Login.css'
// import { Link, BrowserRouter as Router } from 'react-router-dom'
// class Login extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             email:'',
//             password:''
//         }
//     }

//     handleEmail =(e) => {
//         this.setState({
//             email:e.target.value
//         })
//         console.log(this.state.email)
//     }

//     handlePassword = (e) => {
//         this.setState({
//             password:e.target.value
//         })
//         console.log(this.state.password)
//     }

//     handleSubmit = (e) => {
//         if(this.state.email.length > 0 && this.state.password.length > 0){
//             console.log("Submitted!!")

//             e.preventDefault()
//         }
//         else {
//             console.log('Empty Email or password')
//             e.preventDefault()
//         }            
//     }

//     render() {
//         return (
//             <Router>
//             <div className="container loginBg">
//                 <div className="row">
//                     <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
//                         <div className="card card-signin my-5">
//                             <div className="card-body">
//                                 <h5 className="card-title text-center">Login</h5>
//                                 <form className="form-signin">

//                                     <div className="form-label-group">
//                                         <input type="username"  onChange={this.handleEmail} id="inputEmail" className="form-control" placeholder="Email address"  />
//                                         <label htmlFor="inputEmail">User name</label>
//                                     </div>

//                                     <div className="form-label-group">
//                                         <input type="password" onChange={this.handlePassword}  id="inputPassword" className="form-control" placeholder="Password"  />
//                                         <label htmlFor="inputPassword">Password</label>
//                                     </div>

//                                     <div className="custom-control custom-checkbox mb-3">
//                                         <input type="checkbox" className="custom-control-input" id="customCheck1" />
//                                         <label className="custom-control-label" htmlFor="customCheck1">Remember password</label>
//                                     </div>

//                                     <button className="btn btn-lg btn-primary btn-block text-uppercase" >
//                                         <Link to="/dashboard">Login</Link>
//                                         </button>
//                                     <hr className="my-4" />

//                                 </form>
    
//                             </div> 
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             </Router>
//         );
//     }
// }

// export default Login;