import React, { Component } from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

import MainComponent from './Components/MainComponent/MainComponent'
import RegisterContainer from './Components/RegisterComponent/Container'
import LoginContainer from './Components/LoginComponent/Container'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      redirect: false
    }
  }

  render () {
    return (
      <div className='App'>
        <Router>
          <div>
             <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              {/* <li>
                <Link to='/login'>About</Link>
              </li>
              <li>
                <Link to='/register'>Topics</Link>
              </li> */}
            </ul>

             <Switch>
              <Route path='/login'>
                <LoginContainer />
              </Route>
              <Route path='/register'>
                <RegisterContainer />
              </Route>
              <Route path='/'>
                <MainComponent />
              </Route>
            </Switch>
           </div>
        </Router>
      </div>
    )
  }
}

export default App
