import React from 'react';
import { Box, Text, ResponsiveContext, Carousel } from 'grommet';

import CustomCard from '../../Layout/Card/Card';

export default function LargestCollection() {
  const size = React.useContext(ResponsiveContext);

  return (
    <>
      <Box fill pad="medium" align="center">
        <Box pad={{ vertical: 'medium' }}>
          <Text color="dark-1" size="large" textAlign="center">
            Largest Collection
          </Text>
        </Box>
        <Box
          gap="small"
          fill
          direction={size === 'small' ? 'column' : 'row'}
          pad={size === 'small' ? 'large' : 'small'}
        >
          {size === 'small' ? (
            <Carousel controls={false} play={3000}>
              {Array.from({ length: 5 }, (_, id) => (
                <CustomCard height="small" basis="1/3" key={id} />
              ))}
            </Carousel>
          ) : (
            Array.from({ length: 5 }, (_, id) => (
              <CustomCard key={id} height="small" basis="1/3" />
            ))
          )}
        </Box>
      </Box>
    </>
  );
}
