import { Box, Heading } from 'grommet';

import bg from './bg.png';

export default function Hero() {
  return (
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
  );
}
