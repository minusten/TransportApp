import * as actionTypes from './types'

export const addUser = user => {
  return {
    type: actionTypes.ADD_USER,
    payload: user
  }
}
