import { Navigate, Route, Routes } from 'react-router-dom';

import { useAuthControllerScope } from '@controllers/auth';
import AccountPage from '@pages/Account';
import AccountLogin from '@pages/Account/views/Login';
import AccountProfile from '@pages/Account/views/Profile';
import AccountUpdate from '@pages/Account/views/Update';
import AppsPage from '@pages/Apps';
import AppsOverview from '@pages/Apps/views/Overview';
import { useSelector } from '@service';

import MainHeader from './MainHeader';
import QuickNav from './QuickNav';

const Main: React.FC = () => {
  const authController = useAuthControllerScope();
  const isLoggedIn = useSelector(authController.implementation.auth.selectors.selectIsLoggedIn);

  return (
    <div id="desktop-main">
      <div id="desktop-main-content-wrapper">
        <div id="desktop-main-content">
          <MainHeader />
          <QuickNav />
          <Routes>
            <Route path="/account" element={<AccountPage />}>
              <Route path="" element={isLoggedIn ? <AccountProfile /> : <AccountLogin />} />
              <Route path="update" element={!isLoggedIn ? <Navigate to="/account" /> : <AccountUpdate />} />
              <Route path="*" element={<Navigate to="/account" />} />
            </Route>
            <Route path="/apps" element={<AppsPage />}>
              <Route path="" element={<AppsOverview />} />
            </Route>
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Main;
