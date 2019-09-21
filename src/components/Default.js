import React, { Component } from 'react'
import style from "styled-components"
export default class Default extends Component {
    render() {
        console.log(this.props);
        return (
            <>
                <CenterContiner>
                    <h1>404</h1>
                    <h2>Your requested url:/
                        <span>{this.props.location.pathname}</span>
                        not found
                    </h2>
                </CenterContiner>
            </>
        )
    }
}

const CenterContiner = style.div`
    disply:flex;
    text-align:center;
`