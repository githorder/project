import { Header, Button, Menu, Box } from 'grommet';
import { Home } from 'grommet-icons';

export default function Navigation() {
  return (
    <Header justify="around">
      <Button icon={<Home />} hoverIndicator />
      <Box direction="row" align="center">
        <Menu label="main" items={[{ label: 'signin' }, { label: 'signup' }]} />
      </Box>
    </Header>
  );
}
