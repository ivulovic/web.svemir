import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import PageHeader from '@components/PageHeader';
import PageSection from '@components/PageSection';
import { useWishlistControllerScope } from '@controllers/app';

import List from '../components/List';
import '../style.scss';

export default function WishlistShare(): JSX.Element {
  const { id, username } = useParams();
  const scope = useWishlistControllerScope();
  console.log(id, username);
  useEffect(() => {
    if (username) {
      scope.methods.onLoadById({ id: username });
    }
  }, []);

  return (
    <div className="wishlist">
      <PageHeader>Wishlist</PageHeader>
      <PageSection>{`${username}'s`} wishlist</PageSection>
      <List source="share" />
    </div>
  );
}
