import { Box } from 'grommet';

import TagCloud from './TagCloud';
import RecentCollection from './RecentCollection';
import LargestCollection from './LargestCollection';

export default function Main() {
  return (
    <>
      <Box>
        <RecentCollection />
        <LargestCollection />
        <TagCloud />
      </Box>
    </>
  );
}
