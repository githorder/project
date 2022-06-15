import {
  Box,
  Carousel,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Text,
} from 'grommet';

export default function LargestCollection() {
  return (
    <>
      <Box fill pad="medium" align="center">
        <Box pad={{ vertical: 'medium' }}>
          <Text color="brand" size="large" textAlign="center">
            Largest Collection
          </Text>
        </Box>
        <Carousel fill controls={false} wrap play={3000}>
          <Box direction="row" gap="medium">
            {Array.from({ length: 3 }, (_, id) => (
              <Card width="large" background="light-1">
                <CardHeader pad="medium">Header</CardHeader>
                <CardBody pad="medium">Body</CardBody>
                <CardFooter pad={{ horizontal: 'small' }} background="light-2">
                  <Button hoverIndicator>Click</Button>
                </CardFooter>
              </Card>
            ))}
          </Box>
        </Carousel>
      </Box>
    </>
  );
}
