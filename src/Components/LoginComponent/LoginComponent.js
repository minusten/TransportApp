import React, { Component } from 'react'
import Container from '@material-ui/core/Container'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { Redirect } from 'react-router-dom'

class LoginComponent extends Component {
constructor(props) {
        super (props)
        this.state = {
            userData: {
                email: '',
                password: ''
            },
            redirect: false
        }
    }

changeUserData = (e) => {
    const { userData } = this.state
    userData[e.target.name] = e.target.value;
    this.setState({ userData })
}

loginUser = () => {
    if (this.state.userData.email === this.props.user.email) {
        this.setState({
            redirect: './'
        })
    } else {
        console.log('User does not exist')
    }
}

  render () {
    const { redirect } = this.state
    return (
      <Container>
          {redirect && <Redirect to={redirect} />}
        <h1>Hello, please login</h1>
        <TextField
          id='outlined-basic' label='Email' variant='outlined'
          onChange={this.changeUserData}
          name='email'
          value={this.state.email}
        />

        <TextField
          id='outlined-basic' label='Password' variant='outlined'
          onChange={this.changeUserData}
          name='password'
          value={this.state.password}
        />
       <Button onClick={this.loginUser}> Login </Button>
      </Container>
    )
  }
}

export default LoginComponent
