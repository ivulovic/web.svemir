import { useNavigate } from 'react-router-dom';

import useAuthController from '@controllers/auth';
import { useSelector } from '@service';

import DesktopContext from '../../context';
import { UserStatusEnum } from '../../types';

import PinDigit from './PinDigit';
import './style.scss';

const Pin: React.FC = () => {
  const authController = useAuthController();
  const error = useSelector(authController.implementation.auth.selectors.selectAuthError);
  const isLoggedIn = useSelector(authController.implementation.auth.selectors.selectIsLoggedIn);

  const { userStatus, setUserStatusTo } = React.useContext(DesktopContext);

  const [pin, setPinTo] = React.useState<string>('');
  const navigate = useNavigate();

  const ref: React.MutableRefObject<HTMLInputElement> = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (userStatus === UserStatusEnum.LoggingIn || userStatus === UserStatusEnum.LogInError) {
      ref.current.focus();
    } else {
      setPinTo('');
    }
  }, [userStatus]);

  React.useEffect(() => {
    if (pin.length === 10) {
      setUserStatusTo(UserStatusEnum.VerifyingLogIn);
      authController.methods.onLogin({ recoveryCode: pin });
    }

    if (userStatus === UserStatusEnum.LogInError) {
      setUserStatusTo(UserStatusEnum.LoggingIn);
    }
  }, [pin]);

  React.useEffect(() => {
    if (error) {
      console.error('Error occured', error);
      setUserStatusTo(UserStatusEnum.LogInError);
    }
  }, [error]);

  React.useEffect(() => {
    if (isLoggedIn && error === null) {
      setUserStatusTo(UserStatusEnum.LoggedIn);
    }
  }, [isLoggedIn]);

  const handleOnClick = (): void => {
    ref.current.focus();
  };

  const handleOnCancel = (): void => {
    navigate('/');
    setUserStatusTo(UserStatusEnum.LoggedOut);
  };

  const handleOnChange = (e: any): void => {
    if (e.target.value.length <= 10) {
      setPinTo(e.target.value.toString());
    }
  };

  const getCancelText = (): JSX.Element => {
    return (
      <span className="desktop-pin-cancel-text" onClick={handleOnCancel}>
        Cancel
      </span>
    );
  };

  const getErrorText = (): JSX.Element => {
    if (userStatus === UserStatusEnum.LogInError) {
      return <span className="desktop-pin-error-text">Invalid</span>;
    }
  };

  return (
    <div className="desktop-pin-wrapper">
      <input
        disabled={userStatus !== UserStatusEnum.LoggingIn && userStatus !== UserStatusEnum.LogInError}
        className="desktop-pin-hidden-input"
        ref={ref}
        value={pin}
        onChange={handleOnChange}
      />
      <div className="desktop-pin" onClick={handleOnClick}>
        <PinDigit focused={pin.length === 0} value={pin[0]} />
        <PinDigit focused={pin.length === 1} value={pin[1]} />
        <PinDigit focused={pin.length === 2} value={pin[2]} />
        <PinDigit focused={pin.length === 3} value={pin[3]} />
        <PinDigit focused={pin.length === 4} value={pin[4]} />
        <PinDigit focused={pin.length === 5} value={pin[5]} />
        <PinDigit focused={pin.length === 6} value={pin[6]} />
        <PinDigit focused={pin.length === 7} value={pin[7]} />
        <PinDigit focused={pin.length === 8} value={pin[8]} />
        <PinDigit focused={pin.length === 9} value={pin[9]} />
      </div>
      <h3 className="desktop-pin-label">
        Enter Recovery Code {getErrorText()} {getCancelText()}
      </h3>
    </div>
  );
};

export default Pin;
