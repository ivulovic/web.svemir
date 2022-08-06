import { useState } from 'react';

import { useWishlistControllerScope } from '@controllers/app';
import { AppsScope } from '@controllers/app/settings';
import { Input, Loading } from '@reactoso-ui';
import { useSelector } from '@service';

export default function Form(): JSX.Element {
  const controller = useWishlistControllerScope();
  const isLoading = useSelector((s) => controller.implementation.app.selectors.selectLoading(s, AppsScope.Wishlist));
  const [url, setUrl] = useState('');
  const onSubmit = (e): void => {
    e.preventDefault();
    if (url) {
      controller.methods.onFetch({ url });
      setUrl('');
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <Input
          disabled={isLoading}
          pattern="https://.*"
          placeholder="Enter valid URL of a product"
          required
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
      </form>
    </div>
  );
}
