import { Grommet } from 'grommet';

import Main from './Pages/Main/Main';

import './App.css';

const theme = {
  heading: {
    weight: 300,
  },
};

function App() {
  return (
    <Grommet theme={theme}>
      <Main />
    </Grommet>
  );
}

export default App;
