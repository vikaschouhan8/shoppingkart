import React, { Component } from 'react'
import style from "styled-components"
import Login from './Login';
export default class Default extends Component {
    render() {
        console.log(this.props);
        return (
            <>
                <CenterContiner>
                    {/* <h1>404</h1>
                    <h2>Your requested url:/
                        <span>{this.props.location.pathname}</span>
                        not found
                    </h2> */}
                    <div >
                        <input type="text" style={{display:"block"}}/>
                        <input type="password" style={{display:"block"}} name=""/>
                    </div>
                    
                    <Login />
                </CenterContiner>
            </>
        )
    }
}

const CenterContiner = style.div`
    disply:flex;
    text-align:center;
`