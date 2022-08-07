import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import AvatarChooser from '@components/Avatar/AvatarChooser';
import PageSection from '@components/PageSection';
import View from '@components/View';
import { useAuthControllerScope } from '@controllers/auth';
import DesktopContext from '@pages/Desktop/context';
import { UserStatusEnum } from '@pages/Desktop/types';
import { Button, Input } from '@reactoso-ui';
import { useSelector } from '@service';

export default function Register(): JSX.Element {
  const navigate = useNavigate();

  const { userStatus, setUserStatusTo } = React.useContext(DesktopContext);
  const [avatarUsername, setAvatarUsername] = useState('');
  const [avatarData, setAvatarData] = useState({
    gender: '',
    avatar: '',
  });
  const authController = useAuthControllerScope();
  const error = useSelector(authController.implementation.auth.selectors.selectAuthError);
  const onSubmit = (): void => {
    if ((avatarUsername?.trim() && avatarData.avatar, avatarData.gender)) {
      authController.methods.onRegister({
        ...avatarData,
        username: avatarUsername.trim(),
      });
    }
    setUserStatusTo(UserStatusEnum.Registering);
  };
  const onRedirect = (): void => {
    navigate('/');
    setUserStatusTo(UserStatusEnum.LoggingIn);
  };

  React.useEffect(() => {
    if (error && error.source === 'register') {
      alert('That username is already taken');
      setUserStatusTo(UserStatusEnum.RegisterError);
    }
  }, [error]);

  return (
    <View className="register">
      <PageSection>Create an account</PageSection>

      <div className={`form-group`}>
        <p>Username:</p>
        <Input onChange={(e: any): void => setAvatarUsername(e.target.value)} placeholder="Enter username" />
      </div>

      <AvatarChooser onChange={setAvatarData} />

      <div className="footer-group">
        <Button className={avatarUsername?.trim().length > 0 ? 'active' : ''} onClick={onSubmit}>
          Enter
        </Button>
        <Button className="link" onClick={onRedirect}>
          Already have an account?
        </Button>
      </div>
    </View>
  );
}
