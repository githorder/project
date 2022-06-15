import Navigation from '../../Layout/Header/Header.nav';
import Hero from '../../Layout/Header/Header.hero';
import TagCloud from './TagCloud';
import RecentCollection from './RecentCollection';
import LargestCollection from './LargestCollection';

export default function Main() {
  return (
    <>
      <Navigation />
      <Hero />
      <LargestCollection />
      <RecentCollection />
      <TagCloud />
    </>
  );
}
