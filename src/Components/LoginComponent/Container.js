import * as reactRedux from 'react-redux'
import { bindActionCreators } from 'redux'
import { addUser } from '../../Actions/actions'
import LoginComponent from './LoginComponent'

const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user
  }
}
const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({ addUser }, dispatch)
})

const LoginContainer = reactRedux.connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginComponent)

export default LoginContainer