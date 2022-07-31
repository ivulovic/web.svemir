import { CATCONTROLLER_SCOPE } from '@implementation/cat/settings';
import { ICatState } from '@implementation/cat/types';

export interface IRootState {
  // controllers
  [CATCONTROLLER_SCOPE]: ICatState;
}
