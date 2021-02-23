import actionTypes from './actionTypes';

export default {
    login: (loginDataObject) => ({type: actionTypes.LOGIN, payload: loginDataObject}),
    signup: (email, password) => ({type: actionTypes.SIGNUP, payload: {email, password}}),
    signout: () => ({type: actionTypes.SIGNOUT}),
    setUser: (user) => ({type: actionTypes.SET_USER, payload: user})
}
