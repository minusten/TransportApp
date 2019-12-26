import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import Container from '@material-ui/core/Container'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

class RegisterComponent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      userData: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        redirect: false
      }
    }
  }

  changeUserData = (e) => {
    const { userData } = this.state;
    userData[e.target.name] = e.target.value;
    this.setState({ userData })
    console.log(this.state.userData.email)
  }

  registerUser = () => {
    let newArr = this.props.user.slice()
    newArr.push(this.state.userData)
    this.props.addUser(newArr)
    this.setState({
        redirect: './login'
    })
  }

  render () {
    const { redirect } = this.state
    return (
      <Container maxWidth='sm'>
        {redirect && <Redirect to={redirect} />}
        <h1>Register</h1>
        <TextField id='outlined-basic' label='First Name' variant='outlined'  
                onChange={this.changeUserData}
                name='firstName'
                value={this.state.firstName} />
        <TextField id='outlined-basic' label='Last Name' variant='outlined' 
                onChange={this.changeUserData}
                name='lastName'
                value={this.state.lastName}
        />
        <TextField id='outlined-basic' label='Email' variant='outlined' 
                onChange={this.changeUserData}
                name='email'
                value={this.state.email}
        />
        <TextField id='outlined-basic' label='Password' variant='outlined'
                onChange={this.changeUserData}
                name='password'
                value={this.state.password}
        />
        <Button variant='contained' onClick={this.registerUser}>Register</Button>
      </Container>
    )
  }
}

export default RegisterComponent
