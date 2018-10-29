const initState = {
  authError: null
};

const authReducer = (state = initState, action) => {
  switch(action.type) {
    case 'LOGIN_ERROR':
    console.log('login error');
    return { 
      ...state, 
      authError: 'Login failed'
    }

    case 'LOGIN_SUCCESS':
    console.log('login success');
    return {
      ...state,
      authError: null
    }

    case 'SIGN_OUT_SUCCESS':
    console.log('sign out success');
    return {
      ...state,
      authError: null
    }

    case 'SIGN_UP_SUCCESS':
    console.log('sign up success');
    return {
      ...state,
      authError: null
    }

    case 'SIGN_UP_ERROR':
    console.log('sign up error');
    return {
      ...state,
      authError: action.err.message
    }

    default:
    return state;

  }
}

export default authReducer;