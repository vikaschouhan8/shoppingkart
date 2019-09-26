import React, { Component } from 'react'
import {ButtonContainer} from './Button'
import {Link} from 'react-router-dom'
export default class Logout extends Component {
    render() {
        return (
            <Link to="/" className="ml-auto">
              <ButtonContainer>
                <span className="mr-2">
                  <i className="fas fa-user " />
                </span>
                Logout
              </ButtonContainer>
            </Link>
        )
    }
}
