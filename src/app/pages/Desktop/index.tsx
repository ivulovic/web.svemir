import { useAuthControllerScope } from '@controllers/auth';
import { useSelector } from '@service';

import Background from './components/Background';
import DesktopLoading from './components/DesktopLoading';
import Info from './components/Info';
import Main from './components/Main';
import NonAuthMain from './components/NonAuthMain';
import Pin from './components/Pin';
import UserStatusButton from './components/UserStatusButton';
import DesktopContext from './context';
import LoginIcon from './icons/LoginIcon';
import RegisterIcon from './icons/RegisterIcon';
import { UserStatusEnum } from './types';

import './style.scss';

const Desktop: React.FC = () => {
  const authController = useAuthControllerScope();
  const isLoggedIn = useSelector(authController.implementation.auth.selectors.selectIsLoggedIn);
  const [userStatus, setUserStatusTo] = React.useState<UserStatusEnum>(
    isLoggedIn ? UserStatusEnum.LoggedIn : UserStatusEnum.LoggedOut,
  );

  const getStatusClass = (): string => {
    return userStatus.replace(/\s+/g, '-').toLowerCase();
  };

  return (
    <DesktopContext.Provider value={{ userStatus, setUserStatusTo }}>
      <div id="desktop" className={getStatusClass()}>
        <Background />
        {[UserStatusEnum.LoggingIn, UserStatusEnum.LogInError, UserStatusEnum.VerifyingLogIn].includes(userStatus) && (
          <Pin />
        )}
        {userStatus === UserStatusEnum.LoggedIn && <Main />}
        {userStatus === UserStatusEnum.Registering && <NonAuthMain />}
        {userStatus === UserStatusEnum.LoggedOut && (
          <>
            <Info id="desktop-info" />
            <div id="sign-in-button-wrapper">
              <UserStatusButton icon={RegisterIcon} id="sign-in-button" userStatus={UserStatusEnum.Registering} />{' '}
              &nbsp;
              <UserStatusButton icon={LoginIcon} id="sign-in-button" userStatus={UserStatusEnum.LoggingIn} />
            </div>
          </>
        )}
        <DesktopLoading />
      </div>
    </DesktopContext.Provider>
  );
};

export default Desktop;
