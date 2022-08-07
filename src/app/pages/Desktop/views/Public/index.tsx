import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// import { useAuthControllerScope } from '@controllers/auth';
import AccountPage from '@pages/Account';
import AccountRegister from '@pages/Account/views/Register';
import AppsPage from '@pages/Apps';
import AppShare from '@pages/Apps/views/Share';
import Background from '@pages/Desktop/components/Background';
import DesktopShell from '@pages/Desktop/components/DesktopShell';
import Onboarding from '@pages/Desktop/components/Onboarding';
import Pin from '@pages/Desktop/components/Pin';
import DesktopContext from '@pages/Desktop/context';
// import { useSelector } from '@service';
import './style.scss';
import { UserStatusEnum } from '@pages/Desktop/types';

export default function PublicDesktop(): JSX.Element {
  const { userStatus } = React.useContext(DesktopContext);

  const getStatusClass = (): string => {
    return userStatus.replace(/\s+/g, '-').toLowerCase();
  };

  // const {
  //   implementation: {
  //     auth: { selectors },
  //   },
  // } = useAuthControllerScope();
  // const isLoggedIn = useSelector(selectors.selectIsLoggedIn);

  const isRegisteringInProcess = [UserStatusEnum.Registering, UserStatusEnum.RegisterError].includes(userStatus);
  return (
    <div className={`public-desktop ${getStatusClass()}`}>
      <Background />
      <Pin />
      <DesktopShell>
        <Routes>
          {isRegisteringInProcess && (
            <Route path="/" element={<AccountPage />}>
              <Route path="" element={<AccountRegister />} />
            </Route>
          )}
          <Route path="/" element={<Onboarding />} />
          <Route path="/share" element={<AppsPage />}>
            <Route path="" element={<Navigate to="/" />} />
            <Route path=":id" element={<Navigate to="/" />} />
            <Route path=":id/:username" element={<AppShare />} />
          </Route>
        </Routes>
      </DesktopShell>
    </div>
  );
}
