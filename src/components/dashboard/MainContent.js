import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
  } from "react-router-dom";
  
  import TakeLeave from '../LeaveMangement/TakeLeave'
  import ViewLeaves from '../LeaveMangement/ViewLeaves'
  
  import ViewSalary from '../Salary/ViewSalary'
  import GeneratePayslip from '../Salary/GeneratePayslip'
  
  import ViewFeedback from '../Feedback/ViewFeedback'
  import AddFeedback from '../Feedback/AddFeadback'
  
  import ViewAttendance from '../Attendance/ViewAttendance'
  import GiveAttendance from '../Attendance/GiveAttendance'
  import Header from './Header'
  import Sidenav from './Sidenav'
import Dashboard from './Dashboard';


class MainContent extends Component {
    render() {
        return (
            <>
            {/* <Sidenav /> */}
            
            <Router>
            
                <Route path='/dashboard'  component={Dashboard}/>
                <Route path='/takeLeave' component={TakeLeave}/>
                    <Route path='/viewLeaves' component={ViewLeaves}/>
                  
                    <Route path='/viewSalary' component={ViewSalary} />
                    <Route path='/generatePayslip' component={GeneratePayslip} />

                    <Route path='/viewAttendance' component={ViewAttendance} />
                    <Route path='/giveAttendance' component={GiveAttendance} />

                    <Route path='/viewfeedback' component={ViewFeedback} />
                    <Route path='/addFeedback' component={AddFeedback} />
                 
            </Router>
            </>
        );
    }
}

export default MainContent;