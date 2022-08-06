import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { useAuthControllerScope } from '@controllers/auth';
import AccountPage from '@pages/Account';
import AccountRegister from '@pages/Account/views/Register';
import { useSelector } from '@service';

import DesktopContext from '../context';
import { UserStatusEnum } from '../types';

const NonAuthMain: React.FC = () => {
  const authController = useAuthControllerScope();
  const { setUserStatusTo } = React.useContext(DesktopContext);
  const isLoggedIn = useSelector(authController.implementation.auth.selectors.selectIsLoggedIn);
  const error = useSelector(authController.implementation.auth.selectors.selectAuthError);
  useEffect(() => {
    if (isLoggedIn && !error) {
      setUserStatusTo(UserStatusEnum.LoggedIn);
    }
  }, [isLoggedIn]);
  useEffect(() => {
    if (error) {
      alert('Username is already taken.');
    }
  }, [error]);
  return (
    <div id="desktop-main">
      <div id="desktop-main-content-wrapper">
        <div id="desktop-main-content">
          <Routes>
            <Route path="/" element={<AccountPage />}>
              <Route path="" element={isLoggedIn ? <Navigate to="/" /> : <AccountRegister />} />
            </Route>
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default NonAuthMain;
