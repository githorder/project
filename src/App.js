import { connect } from 'react-redux';
import { Grommet, Box } from 'grommet';

import Main from './Pages/Main/Main';
import Login from './Pages/SignUp/Login';
import Register from './Pages/SignUp/Register';
import Personal from './Pages/Personal/Personal';
import Navigation from './Layout/Header/Header.nav';
import Hero from './Layout/Header/Header.hero';

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
  select: {
    background: '#fff',
    container: {
      extend: `color: 'white'`,
    },
  },
};

const mapStateToProps = (state) => ({
  page: state.app.page,
});

function App({ page }) {
  return (
    <Grommet theme={theme}>
      <Box background="light-2">
        <Navigation />
        <Hero />
        {page === 'main' ? (
          <Main />
        ) : page === 'login' ? (
          <Login />
        ) : page === 'register' ? (
          <Register />
        ) : page === 'personal' ? (
          <Personal />
        ) : (
          ''
        )}
      </Box>
    </Grommet>
  );
}

export default connect(mapStateToProps)(App);
