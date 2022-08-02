import { Link } from 'react-router-dom';

import PageSection from '@components/PageSection';
import View from '@components/View';
import { HorizontalCard, BannerCard, MediaCard } from '@reactoso-ui';

export default function Overview(): JSX.Element {
  // const navigate = useNavigate();
  return (
    <View>
      <div className="banners-top">
        <Link to="mini-golf">
          <BannerCard title="Mini Golf" image={'https://www.boralavirint.rs/images/bg/mini-golf-bg.jpg'} />
        </Link>
        <BannerCard
          title="Exploding Kittens"
          image={'https://assets-prd.ignimgs.com/2022/04/18/kitty-1650294441041.png'}
        />
      </div>
      <div className="banners-middle">
        <BannerCard
          title="Game 0"
          // image="https://play-lh.googleusercontent.com/RNWKPePILHGZWUO6wLZpXaU1atiFGvrfNhKNDszrEb8znaXy29vr6NjqwKNOsgjhbiY"
        />
        <BannerCard
          title="Game 1"
          // image="https://play-lh.googleusercontent.com/RNWKPePILHGZWUO6wLZpXaU1atiFGvrfNhKNDszrEb8znaXy29vr6NjqwKNOsgjhbiY"
        />
        <BannerCard
          title="Game 2"
          // image="https://play-lh.googleusercontent.com/RNWKPePILHGZWUO6wLZpXaU1atiFGvrfNhKNDszrEb8znaXy29vr6NjqwKNOsgjhbiY"
        />
      </div>

      <PageSection>Popular</PageSection>

      <div className="banners-bottom">
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
      </div>
      <HorizontalCard />
      <HorizontalCard />
    </View>
  );
}
