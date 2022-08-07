import { Link } from 'react-router-dom';

import AvatarIcon from '@components/Avatar/AvatarIcon';
import { useAuthControllerScope } from '@controllers/auth';
import { IAuthenticatedUser } from '@implementation/auth/types';
import LoginIcon from '@pages/Desktop/icons/LoginIcon';
import LogoutIcon from '@pages/Desktop/icons/LogoutIcon';
import RegisterIcon from '@pages/Desktop/icons/RegisterIcon';
import { UserStatusEnum } from '@pages/Desktop/types';
import { useSelector } from '@service';

import Info from '../Info';
import QuickNav from '../QuickNav';
import UserStatusButton from '../UserStatusButton';
import './style.scss';

export default function DesktopShell({ children }): JSX.Element {
  const {
    implementation: {
      auth: { selectors },
    },
  } = useAuthControllerScope();
  const user: IAuthenticatedUser = useSelector(selectors.selectAuthUser);
  const isLoggedIn = useSelector(selectors.selectIsLoggedIn);
  return (
    <div className="desktop-shell">
      <div className="desktop-main">
        <div className="desktop-main-content-wrapper">
          <div className="desktop-main-content">
            {isLoggedIn && (
              <div className="desktop-main-content-header">
                <div className="desktop-main-content-header-section">
                  <Info className="desktop-main-info" />
                </div>
                <div className="desktop-main-content-header-section">
                  {isLoggedIn && (
                    <Link to="/account" className="avatar">
                      <AvatarIcon gender={user.gender} avatar={user.avatar} />
                    </Link>
                  )}
                  {!isLoggedIn && (
                    <>
                      <UserStatusButton icon={RegisterIcon} userStatus={UserStatusEnum.Registering} />
                      &nbsp; &nbsp;
                    </>
                  )}
                  <UserStatusButton
                    icon={isLoggedIn ? LogoutIcon : LoginIcon}
                    className="sign-out-button"
                    userStatus={isLoggedIn ? UserStatusEnum.LoggedOut : UserStatusEnum.LoggingIn}
                  />
                </div>
              </div>
            )}
            {isLoggedIn && <QuickNav />}
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
