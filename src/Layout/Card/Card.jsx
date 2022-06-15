import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  ResponsiveContext,
} from 'grommet';
import React from 'react';

export default function CustomCard({ basis, height }) {
  const size = React.useContext(ResponsiveContext);

  return (
    <Card
      margin={{ horizontal: 'small' }}
      height={height}
      basis={size === 'small' ? 'small' : basis}
      background="brand"
    >
      <CardHeader></CardHeader>
      <CardBody></CardBody>
      <CardFooter></CardFooter>
    </Card>
  );
}
