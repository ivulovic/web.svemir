import DesktopContext from '../../context';
import { UserStatusEnum } from '../../types';
import './style.scss';

const Background: React.FC = () => {
  const { userStatus, setUserStatusTo } = React.useContext(DesktopContext);

  const handleOnClick = (): void => {
    if (userStatus === UserStatusEnum.LoggedOut) {
      setUserStatusTo(UserStatusEnum.LoggingIn);
    }
  };
  const className = userStatus === UserStatusEnum.LoggingIn ? 'zoom' : '';
  return (
    <div className="desktop-background" onClick={handleOnClick}>
      <div className={`desktop-background-image background-image  ${className}`} />
    </div>
  );
};

export default Background;
