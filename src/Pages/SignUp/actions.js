export const writeName = (name) => ({ type: 'WRITE_NAME', payload: name });
export const writeEmail = (email) => ({ type: 'WRITE_EMAIL', payload: email });
export const writePassword = (password) => ({
  type: 'WRITE_PASSWORD',
  payload: password,
});

export const submit = (userData) => async (dispatch) => {
  try {
    dispatch({ type: 'IS_SUBMITING' });
    const response = await fetch('http://localhost:8000/register', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    });
    const user = await response.json();
    dispatch({ type: 'IS_SUBMITED', payload: user });
  } catch (err) {
    dispatch({ type: 'IS_NOT_SUBMITED', payload: err.message });
  }
};

export const login = (userData) => async (dispatch) => {
  try {
    dispatch({ type: 'IS_SUBMITING' });
    const response = await fetch('http://localhost:8000/login', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    });
    const user = await response.json();
    dispatch({ type: 'IS_SUBMITED', payload: user });
  } catch (err) {
    dispatch({ type: 'IS_NOT_SUBMITED', payload: err.message });
  }
};
