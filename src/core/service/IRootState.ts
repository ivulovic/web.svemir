import { APP_SCOPE } from '@implementation/app/settings';
import { IAppState } from '@implementation/app/types';
import { AUTH_SCOPE } from '@implementation/auth/settings';
import { IAuthState } from '@implementation/auth/types';
import { WISHLIST_APP_SCOPE } from '@implementation/wishlist/settings';
import { IWishlistState } from '@implementation/wishlist/types';

export interface IRootState {
  [APP_SCOPE]: IAppState;

  [AUTH_SCOPE]: IAuthState;
  [WISHLIST_APP_SCOPE]: IWishlistState;
}
