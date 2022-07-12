const initState = {
  name: '',
  email: '',
  password: '',
  user: {},
  isPending: false,
  error: '',
  isLogged: false,
};

export const user = (state = initState, action = {}) => {
  switch (action.type) {
    case 'WRITE_NAME':
      return Object.assign({}, state, { name: action.payload });
    case 'WRITE_EMAIL':
      return Object.assign({}, state, { email: action.payload });
    case 'WRITE_PASSWORD':
      return Object.assign({}, state, { password: action.payload });
    case 'IS_SUBMITING':
      return Object.assign({}, state, { isPending: true });
    case 'IS_SUBMITED':
      return Object.assign({}, state, {
        isPending: false,
        isLogged: true,
        user: action.payload,
        name: '',
        email: '',
        password: '',
      });
    case 'IS_NOT_SUBMITED':
      return Object.assign({}, state, {
        isPending: false,
        error: action.payload,
        name: '',
        email: '',
        password: '',
      });
    case 'LOGOUT':
      return Object.assign({}, state, { isLogged: false });
    default:
      return state;
  }
};
