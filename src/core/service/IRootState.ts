import { AUTH_SCOPE } from '@implementation/auth/settings';
import { IAuthState } from '@implementation/auth/types';

export interface IRootState {
  [AUTH_SCOPE]: IAuthState;
}
