import { useEffect } from 'react';

import { useWishlistControllerScope } from '@controllers/app';

import Form from './components/Form';
import List from './components/List';
import './style.scss';

export default function WishlistApp(): JSX.Element {
  const scope = useWishlistControllerScope();
  useEffect(() => {
    scope.methods.onLoadAll();
  }, []);
  return (
    <div className="wishlist">
      <Form />
      <List />
    </div>
  );
}
