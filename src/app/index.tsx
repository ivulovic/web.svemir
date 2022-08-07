import { Suspense } from 'react';

import { useAuthControllerScope } from '@controllers/auth';
import { AppStatusEnum } from '@implementation/auth/types';
import Desktop from '@pages/Desktop';
import { Loading } from '@reactoso-ui';
import { useSelector } from '@service';
import './style.scss';

const App = (): JSX.Element => {
  const authController = useAuthControllerScope();
  const appStatus = useSelector(authController.implementation.auth.selectors.selectAppStatus);
  if (appStatus === AppStatusEnum.NotReady) {
    return <Loading />;
  }
  return (
    <Suspense fallback={<Loading />}>
      <Desktop />
    </Suspense>
  );
};
export default App;
