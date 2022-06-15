import './App.css';
import { Grommet, Header, Button, Menu, Box, Heading } from 'grommet';
import { Home } from 'grommet-icons';

import bg from './bg.png';

const theme = {
  heading: {
    weight: 300,
  },
};

function App() {
  return (
    <Grommet theme={theme}>
      <Header justify="around">
        <Button icon={<Home />} hoverIndicator />
        <Box direction="row" align="center">
          <Menu
            label="main"
            items={[{ label: 'signin' }, { label: 'signup' }]}
          />
        </Box>
      </Header>
      <Box
        pad="large"
        responsive
        justify="center"
        height="small"
        background={{
          image: `url(${bg})`,
        }}
      >
        <Heading
          alignSelf="center"
          color="#fff"
          margin="none"
          responsive
          weight="300"
        >
          Search Collections!
        </Heading>
      </Box>
    </Grommet>
  );
}

export default App;
