export const writeName = (name) => ({ type: 'WRITE_NAME', payload: name });
export const writeDescription = (description) => ({
  type: 'WRITE_DESCRIPTION',
  payload: description,
});
export const selectTopic = (topic) => ({
  type: 'SELECT_TOPIC',
  payload: topic,
});
export const getTopics = (topics) => ({
  type: 'FETCH_TOPICS',
  payload: topics,
});
export const getCollections = (collections) => ({
  type: 'FETCH_COLLECTIONS',
  payload: collections,
});

export const addCollection =
  ({ email, name, description, topic, id }) =>
  async (dispatch) => {
    try {
      dispatch({ type: 'IS_ADDING_COLLECTION' });
      const response = await fetch(
        `https://project-diyor-api.herokuapp.com/collections/${id}`,
        {
          method: 'post',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email,
            collectionname: name,
            description,
            topic,
          }),
        }
      );
      const collections = await response.json();
      dispatch({ type: 'IS_ADDED_COLLECTION', payload: collections });
    } catch (err) {
      dispatch({ type: 'IS_NOT_ADDED_COLLECTION', payload: err.message });
    }
  };
