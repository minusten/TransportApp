import * as reactRedux from 'react-redux'
import { bindActionCreators } from 'redux'
import { addUser } from '../../Actions/actions'
import RegisterComponent from './RegisterComponent'

const mapStateToProps = (state) => {
  console.log('state', state)
  return {
    user: state.userReducer.user
  }
}
const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({ addUser }, dispatch)
})

const RegisterContainer = reactRedux.connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterComponent)

export default RegisterContainer
