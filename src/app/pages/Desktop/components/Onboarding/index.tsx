import DesktopContext from '@pages/Desktop/context';
import { UserStatusEnum } from '@pages/Desktop/types';

import BackgroundSpaceman from '../BackgroundSpaceman';
import './style.scss';

export default function Onboarding(): JSX.Element {
  const { userStatus, setUserStatusTo } = React.useContext(DesktopContext);

  const handleOnClick = (): void => {
    if (userStatus === UserStatusEnum.LoggedOut) {
      setUserStatusTo(UserStatusEnum.LoggingIn);
    }
  };
  return (
    <div className="onboarding" onClick={handleOnClick}>
      <BackgroundSpaceman>
        <h1>
          <span>Space</span> <span>for</span> <span>everyone</span>
          <h2>Travel between realms and worlds. Let your Avatar explore new {'"Me"'} through this app.</h2>
        </h1>
      </BackgroundSpaceman>
    </div>
  );
}
