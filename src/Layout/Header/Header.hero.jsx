import { Box, Heading } from 'grommet';

import Search from '../../features/Search/Search';

import './Header.background.css';

export default function Hero() {
  return (
    <div className="bg">
      <Box pad="small" responsive justify="center" height="small">
        <Box gap="medium" align="center">
          <Heading color="light-5" margin="none" responsive weight="300">
            Search Collections!
          </Heading>
          <Box width="medium">
            <Search />
          </Box>
        </Box>
      </Box>
    </div>
  );
}
