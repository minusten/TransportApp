import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class MainComponent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      redirect: false
    }
  }

  redirectToRegister = () => {
    this.setState({
      redirect: './register'
    })
  }

  redirectToLogin = () => {
      this.setState({
          redirect: './login'
      })
  }

  render () {
   const {redirect} = this.state
    return (
      <div>
        {redirect && <Redirect to={redirect} /> }
        <button onClick={this.redirectToRegister}>Register</button>
        <button onClick={this.redirectToLogin}>Login</button>
      </div>
    )
  }
}

export default MainComponent