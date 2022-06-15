import React from 'react';
import { Box, Carousel, Text, ResponsiveContext } from 'grommet';

import CustomCard from '../../Layout/Card/Card';

export default function RecentCollection() {
  const size = React.useContext(ResponsiveContext);

  return (
    <>
      <Box fill pad="medium" align="center">
        <Box pad={{ vertical: 'medium' }}>
          <Text color="dark-1" size="large" textAlign="center">
            Recent Collection
          </Text>
        </Box>
        <Carousel fill controls={false} play={3000}>
          <Box
            pad={size === 'small' ? 'large' : 'small'}
            gap="medium"
            direction={size === 'small' ? 'column' : 'row'}
          >
            {size === 'small' ? (
              <Carousel controls={false} play={3000}>
                {Array.from({ length: 5 }, (_, id) => (
                  <CustomCard height="medium" basis="1/2" key={id} />
                ))}
              </Carousel>
            ) : (
              Array.from({ length: 2 }, (_, id) => (
                <CustomCard height="medium" basis="1/2" key={id} />
              ))
            )}
          </Box>
        </Carousel>
      </Box>
    </>
  );
}
