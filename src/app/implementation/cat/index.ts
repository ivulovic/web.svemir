import { useRepository } from '@repository';
import { useService } from '@service';

import repository from './repository';
import * as selectors from './selectors';
import { service, actions } from './service';
import { CATCONTROLLER_SCOPE } from './settings';
import { ICatImplementation } from './types';

const useCatImplementation = (): ICatImplementation => {
  useService({ key: CATCONTROLLER_SCOPE, service });
  useRepository({ key: CATCONTROLLER_SCOPE, repository });

  // or create a new hook that will fetch settings from server and put them in the service
  // ...

  return { actions, selectors };
};

export * from './selectors';
export default useCatImplementation;
