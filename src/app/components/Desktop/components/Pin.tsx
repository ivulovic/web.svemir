import DesktopContext from '../context';
import { UserStatusEnum } from '../types';
import LogInUtility from '../utils/login';

import PinDigit from './PinDigit';

const Pin: React.FC = () => {
  const { userStatus, setUserStatusTo } = React.useContext(DesktopContext);

  const [pin, setPinTo] = React.useState<string>('');

  const ref: React.MutableRefObject<HTMLInputElement> = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (userStatus === UserStatusEnum.LoggingIn || userStatus === UserStatusEnum.LogInError) {
      ref.current.focus();
    } else {
      setPinTo('');
    }
  }, [userStatus]);

  React.useEffect(() => {
    if (pin.length === 4) {
      const verify = async (): Promise<void> => {
        try {
          setUserStatusTo(UserStatusEnum.VerifyingLogIn);

          if (await LogInUtility.verify(pin)) {
            setUserStatusTo(UserStatusEnum.LoggedIn);
          }
        } catch (err) {
          console.error(err);

          setUserStatusTo(UserStatusEnum.LogInError);
        }
      };

      verify();
    }

    if (userStatus === UserStatusEnum.LogInError) {
      setUserStatusTo(UserStatusEnum.LoggingIn);
    }
  }, [pin]);

  const handleOnClick = (): void => {
    ref.current.focus();
  };

  const handleOnCancel = (): void => {
    setUserStatusTo(UserStatusEnum.LoggedOut);
  };

  const handleOnChange = (e: any): void => {
    if (e.target.value.length <= 4) {
      setPinTo(e.target.value.toString());
    }
  };

  const getCancelText = (): JSX.Element => {
    return (
      <span id="desktop-pin-cancel-text" onClick={handleOnCancel}>
        Cancel
      </span>
    );
  };

  const getErrorText = (): JSX.Element => {
    if (userStatus === UserStatusEnum.LogInError) {
      return <span id="desktop-pin-error-text">Invalid</span>;
    }
  };

  return (
    <div id="desktop-pin-wrapper">
      <input
        disabled={userStatus !== UserStatusEnum.LoggingIn && userStatus !== UserStatusEnum.LogInError}
        id="desktop-pin-hidden-input"
        ref={ref}
        // maxLength={4}
        // type="number"
        value={pin}
        onChange={handleOnChange}
      />
      <div id="desktop-pin" onClick={handleOnClick}>
        <PinDigit focused={pin.length === 0} value={pin[0]} />
        <PinDigit focused={pin.length === 1} value={pin[1]} />
        <PinDigit focused={pin.length === 2} value={pin[2]} />
        <PinDigit focused={pin.length === 3} value={pin[3]} />
      </div>
      <h3 id="desktop-pin-label">
        Enter PIN (1234) {getErrorText()} {getCancelText()}
      </h3>
    </div>
  );
};

export default Pin;
