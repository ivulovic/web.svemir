import DesktopContext from '../../context';
import { UserStatusEnum } from '../../types';
import './style.scss';

const Background: React.FC = () => {
  const { userStatus } = React.useContext(DesktopContext);
  const className = [
    UserStatusEnum.LoggingIn,
    UserStatusEnum.LogInError,
    UserStatusEnum.Registering,
    UserStatusEnum.RegisterError,
    UserStatusEnum.VerifyingLogIn,
  ].includes(userStatus)
    ? 'zoom'
    : '';
  return (
    <div className="desktop-background">
      <div className="stars"></div>
      <div className="stars2"></div>
      <div className="stars3"></div>
      <div className={`desktop-background-image background-image  ${className}`} />
    </div>
  );
};

export default Background;
