import DesktopContext from '../context';
import { UserStatusEnum } from '../types';

const Background: React.FC = () => {
  const { userStatus, setUserStatusTo } = React.useContext(DesktopContext);

  const handleOnClick = (): void => {
    if (userStatus === UserStatusEnum.LoggedOut) {
      setUserStatusTo(UserStatusEnum.LoggingIn);
    }
  };

  return (
    <div id="desktop-background" onClick={handleOnClick}>
      <div id="desktop-background-image" className="background-image" />
    </div>
  );
};

export default Background;
