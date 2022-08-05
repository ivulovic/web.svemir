import DesktopContext from '../context';
import { UserStatusEnum } from '../types';

interface IUserStatusButton {
  icon: string;
  id: string;
  userStatus: UserStatusEnum;
}

const UserStatusButton: React.FC<IUserStatusButton> = (props: IUserStatusButton) => {
  const { userStatus, setUserStatusTo } = React.useContext(DesktopContext);
  const { icon: Icon = React.Fragment } = props;
  const handleOnClick = (): void => {
    setUserStatusTo(props.userStatus);
  };

  return (
    <button
      id={props.id}
      className="user-status-button clear-button"
      disabled={userStatus === props.userStatus}
      type="button"
      onClick={handleOnClick}
    >
      <Icon />
    </button>
  );
};

export default UserStatusButton;
