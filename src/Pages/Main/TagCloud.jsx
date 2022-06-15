import { Text, Tag, Box } from 'grommet';

export default function TagCloud() {
  return (
    <>
      <Box pad={{ vertical: 'medium' }}>
        <Text color="brand" size="large" textAlign="center">
          Tag Cloud
        </Text>
      </Box>
      <Box
        direction="row"
        pad={{ vertical: 'small' }}
        gap="xxsmall"
        justify="center"
      >
        {Array.from({ length: 3 }, (_, id) => (
          <Box key={id} pad={{ horizontal: 'xxsmall' }} gap="small">
            <Tag size="small" pad="xxsmall" value="value" />
            <Tag size="small" pad="xxsmall" value="value" />
          </Box>
        ))}
      </Box>
    </>
  );
}
