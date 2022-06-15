import { Grommet } from 'grommet';

import Main from './Pages/Main/Main';

import './App.css';

const theme = {
  global: {
    colors: {
      brand: '#27187E',
      secondary: '#758BFD',
      third: '#AEB8FE',
    },
  },
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
