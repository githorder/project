import { Box, Heading } from 'grommet';

export default function Hero() {
  return (
    <Box
      pad="large"
      responsive
      justify="center"
      height="small"
      background="brand"
    >
      <Box animation="slideLeft">
        <Heading
          alignSelf="center"
          color="light-5"
          margin="none"
          responsive
          weight="300"
        >
          Search Collections!
        </Heading>
      </Box>
    </Box>
  );
}
