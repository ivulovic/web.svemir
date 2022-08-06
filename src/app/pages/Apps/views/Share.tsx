import { useParams } from 'react-router-dom';

import { useWishlistController } from '@controllers/app';
import AppContext from '@controllers/app/context';

import WishlistShare from '../Wishlist/views/Share';

export default function AppShare(): JSX.Element {
  const params = useParams();
  const controller = useWishlistController();
  const apps = {
    wishlist: WishlistShare,
  };
  const Component = apps[params.id] || React.Fragment;
  return (
    <AppContext.Provider value={controller}>
      <div className="page">
        <Component />
      </div>
    </AppContext.Provider>
  );
}
