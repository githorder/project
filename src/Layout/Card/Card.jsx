import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  ResponsiveContext,
} from 'grommet';
import { Cubes } from 'grommet-icons';
import React from 'react';

export default function CustomCard({ basis, height }) {
  const size = React.useContext(ResponsiveContext);

  return (
    <Card
      margin={{ horizontal: 'small' }}
      height={height}
      basis={size === 'small' ? 'small' : basis}
      background="#fff"
      pad="medium"
      align="center"
    >
      <CardHeader justify="center">
        <Cubes size="xlarge" color="brand" />
      </CardHeader>
      <CardBody>Body</CardBody>
      <CardFooter>Footer</CardFooter>
    </Card>
  );
}
