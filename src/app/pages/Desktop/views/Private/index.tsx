import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { useAuthControllerScope } from '@controllers/auth';
import AccountPage from '@pages/Account';
import AccountProfile from '@pages/Account/views/Profile';
import AccountUpdate from '@pages/Account/views/Update';
import AppsPage from '@pages/Apps';
import AppEntry from '@pages/Apps/views/Entry';
import AppsOverview from '@pages/Apps/views/Overview';
import AppShare from '@pages/Apps/views/Share';
import Background from '@pages/Desktop/components/Background';
import DesktopShell from '@pages/Desktop/components/DesktopShell';
import DesktopContext from '@pages/Desktop/context';
import { useSelector } from '@service';
import './style.scss';

export default function PrivateDesktop(): JSX.Element {
  const { userStatus } = React.useContext(DesktopContext);

  const getStatusClass = (): string => {
    return userStatus.replace(/\s+/g, '-').toLowerCase();
  };

  const {
    implementation: {
      auth: { selectors },
    },
  } = useAuthControllerScope();
  const isLoggedIn = useSelector(selectors.selectIsLoggedIn);

  return (
    <div className={`private-desktop ${getStatusClass()}`}>
      <Background />
      <DesktopShell>
        <Routes>
          <Route path="/account" element={<AccountPage />}>
            <Route path="" element={<AccountProfile />} />
            <Route path="update" element={<AccountUpdate />} />
            <Route path="*" element={<Navigate to="/account" />} />
          </Route>
          <Route path="/apps" element={<AppsPage />}>
            <Route path="" element={<AppsOverview />} />
            <Route path=":id" element={<AppEntry />} />
          </Route>
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
