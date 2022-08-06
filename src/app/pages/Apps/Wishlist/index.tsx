import { useWishlistControllerScope } from '@controllers/app';
import { useEffect } from 'react';

import Form from './components/Form';
import List from './components/List';
import './style.scss';

export default function WishlistApp(): JSX.Element {
  const scope = useWishlistControllerScope();
  console.log('scope', scope);
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
