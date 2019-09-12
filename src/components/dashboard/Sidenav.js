import React, { Component } from 'react';
import { MDBIcon } from "mdbreact";
import {NavLink} from 'react-router-dom'
import {
    BrowserRouter as Router,
    Route,
  } from "react-router-dom";

import TakeLeave from '../LeaveMangement/TakeLeave'
import ViewLeaves from '../LeaveMangement/ViewLeaves'

import ViewSalary from '../Salary/ViewSalary'
import GeneratePayslip from '../Salary/GeneratePayslip'

import ViewFeedback from '../Feedback/ViewFeedback'
import AddFeedback from '../Feedback/AddFeadback'

import ViewAttendance from '../Attendance/ViewAttendance'
import GiveAttendance from '../Attendance/GiveAttendance'
  
class Sidenav extends Component {
    render() {
        return (
                <Router>
                <div className="side-nav">
                    <nav>
                        <ul>
                            <li>
                                <NavLink to='/takeLeave'>
                                <a href="#">
                                    <span><MDBIcon icon="chart-area" /></span>
                                    <span>Leave Management</span>
                                </a>
                                </NavLink>
                                <ul>
                                    <NavLink to='/takeLeave'>
                                        <a><li><span><MDBIcon fab icon="buffer" /></span>Take Leave</li></a>
                                    </NavLink>
                                    <NavLink to="viewLeaves">
                                        <a><li><span><MDBIcon icon="bus-alt" /></span>View leaves</li></a>
                                    </NavLink>
                                    
                                </ul>
                            </li> 
                            <li>
                                <NavLink to='/viewSalary'>
                                <a href="#">
                                    <span><MDBIcon icon="chart-area" /></span>
                                    <span>Salary</span>
                                </a>
                                </NavLink>
                                <ul>
                                    <NavLink to='/viewSalary'>
                                        <a><li><span><MDBIcon fab icon="buffer" /></span>View salary</li></a>
                                    </NavLink>
                                    <NavLink to="generatePayslip">
                                        <a><li><span><MDBIcon icon="bus-alt" /></span>Generate payslip</li></a>
                                    </NavLink>
                                    
                                </ul>
                            </li> 
                            <li>
                                <NavLink to='/viewAttendance'>
                                <a href="#">
                                    <span><MDBIcon icon="chart-area" /></span>
                                    <span>Attendance</span>
                                </a>
                                </NavLink>
                                <ul>
                                    <NavLink to='/viewAttendance'>
                                        <a><li><span><MDBIcon fab icon="buffer" /></span>View attendance</li></a>
                                    </NavLink>
                                    <NavLink to="giveAttendance">
                                        <a><li><span><MDBIcon icon="bus-alt" /></span>Give attendance</li></a>
                                    </NavLink>
                                    
                                </ul>
                            </li> 
                            <li>
                                <NavLink to='/viewfeedback'>
                                <a href="#">
                                    <span><MDBIcon icon="chart-area" /></span>
                                    <span>Feedback and suggestions</span>
                                </a></NavLink>
                                <ul>
                                    <NavLink to='/viewfeedback'>
                                        <a><li><span><MDBIcon fab icon="buffer" /></span>View all feedbacks</li></a>
                                    </NavLink>
                                    <NavLink to="addFeedback">
                                        <a><li><span><MDBIcon icon="bus-alt" /></span>Add a new feedback and suggestion</li></a>
                                    </NavLink>
                                    
                                </ul>
                            </li> 
                        </ul>
                    </nav>
                </div>
                <div className="main-contain" style={{fontSize:'100px', background:'#cecece', height:'100vh'}}>
                    
                    <Route path='/takeLeave' component={TakeLeave}/>
                    <Route path='/viewLeaves' component={ViewLeaves}/>

                    <Route path='/viewSalary' component={ViewSalary} />
                    <Route path='/generatePayslip' component={GeneratePayslip} />

                    <Route path='/viewAttendance' component={ViewAttendance} />
                    <Route path='/giveAttendance' component={GiveAttendance} />

                    <Route path='/viewfeedback' component={ViewFeedback} />
                    <Route path='/addFeedback' component={AddFeedback} />
                    
             </div>
        </Router>
        );
    }
}

export default Sidenav;