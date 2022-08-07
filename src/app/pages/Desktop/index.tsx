import { useAuthControllerScope } from '@controllers/auth';
import { useSelector } from '@service';

import DesktopContext from './context';
import { UserStatusEnum } from './types';
import PrivateDesktop from './views/Private';
import PublicDesktop from './views/Public';

const Desktop: React.FC = () => {
  const authController = useAuthControllerScope();
  const isLoggedIn = useSelector(authController.implementation.auth.selectors.selectIsLoggedIn);
  const [userStatus, setUserStatusTo] = React.useState<UserStatusEnum>(
    isLoggedIn ? UserStatusEnum.LoggedIn : UserStatusEnum.LoggedOut,
  );

  const getStatusClass = (): string => {
    return userStatus.replace(/\s+/g, '-').toLowerCase();
  };

  const getVisibilityClass = (): string => {
    return isLoggedIn ? 'private' : 'public';
  };

  return (
    <DesktopContext.Provider value={{ userStatus, setUserStatusTo }}>
      <div className={`desktop ${getStatusClass()} ${getVisibilityClass()}`}>
        {isLoggedIn ? <PrivateDesktop /> : <PublicDesktop />}
      </div>
    </DesktopContext.Provider>
  );
};

export default Desktop;
