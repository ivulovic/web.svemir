import { useNavigate } from 'react-router-dom';

import { useAuthControllerScope } from '@controllers/auth';

import DesktopContext from '../../context';
import { UserStatusEnum } from '../../types';
import './style.scss';

interface IUserStatusButton {
  icon: string;
  className: string;
  userStatus: UserStatusEnum;
}

const UserStatusButton: React.FC<IUserStatusButton> = (props: IUserStatusButton) => {
  const authController = useAuthControllerScope();
  const navigate = useNavigate();
  const { userStatus, setUserStatusTo } = React.useContext(DesktopContext);
  const { icon: Icon = React.Fragment } = props;
  const handleOnClick = (): void => {
    setUserStatusTo(props.userStatus);
    if (props.userStatus === UserStatusEnum.LoggedOut) {
      navigate('/');
      authController.methods.onLogout();
    }
    if (props.userStatus === UserStatusEnum.Registering) {
      navigate('/account');
    }
  };

  return (
    <button
      className={`${props.className} user-status-button clear-button`}
      disabled={userStatus === props.userStatus}
      type="button"
      onClick={handleOnClick}
    >
      <Icon />
    </button>
  );
};

export default UserStatusButton;
