const initState = {
  page: 'main',
};

export const app = (state = initState, actions = {}) => {
  switch (actions.type) {
    case 'PAGE_CHANGE':
      return Object.assign({}, state, { page: actions.payload });
    default:
      return state;
  }
};
