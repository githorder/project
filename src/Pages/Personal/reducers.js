const initState = {
  collections: [],
  topics: [],
  name: '',
  description: '',
  topic: '',
};

export const collection = (state = initState, actions = {}) => {
  switch (actions.type) {
    case 'WRITE_NAME':
      return Object.assign({}, state, {
        name: actions.payload,
      });
    case 'WRITE_DESCRIPTION':
      return Object.assign({}, state, {
        description: actions.payload,
      });
    case 'SELECT_TOPIC':
      return Object.assign({}, state, {
        topic: actions.payload,
      });
    case 'IS_ADDED_COLLECTION':
      return Object.assign({}, state, {
        collections: actions.payload,
        name: '',
        description: '',
        topic: '',
      });
    case 'FETCH_TOPICS':
      return Object.assign({}, state, { topics: actions.payload });
    case 'FETCH_COLLECTIONS':
      return Object.assign({}, state, { collections: actions.payload });
    default:
      return state;
  }
};
