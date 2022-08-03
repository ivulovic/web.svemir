import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import AvatarChooser from '@components/Avatar/AvatarChooser';
import PageSection from '@components/PageSection';
import View from '@components/View';
import { useAuthControllerScope } from '@controllers/auth';
import { Button, Input } from '@reactoso-ui';

export default function Update(): JSX.Element {
  const navigate = useNavigate();
  const authController = useAuthControllerScope();
  const [avatarData, setAvatarData] = useState({
    gender: '',
    avatar: '',
  });
  const [avatarUsername, setAvatarUsername] = useState('');
  const [avatarEmail, setAvatarEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const onRedirect = (): void => navigate('/account');
  const onSubmit = (): void => {
    if (avatarUsername) {
      // authController.methods.onUpdate({ 
      //  });
    }
  };

  return (
    <View>
      <PageSection>Update Your account</PageSection>

      <div className="form-group">
        <p>Username:</p>
        <Input
          value={avatarUsername}
          onChange={(e: any): void => setAvatarUsername(e.target.value)}
          placeholder="Enter username"
        />
      </div>

      <div className="form-group">
        <p>E-mail:</p>
        <Input
          value={avatarEmail}
          onChange={(e: any): void => setAvatarEmail(e.target.value)}
          placeholder="Enter your e-mail address"
        />
      </div>

      <div className="form-group">
        <p>First name:</p>
        <Input
          value={firstName}
          onChange={(e: any): void => setFirstName(e.target.value)}
          placeholder="Enter first name"
        />
      </div>

      <div className="form-group">
        <p>Last name:</p>
        <Input
          value={lastName}
          onChange={(e: any): void => setLastName(e.target.value)}
          placeholder="Enter last name"
        />
      </div>

      <AvatarChooser onChange={setAvatarData} />

      <div className="footer-group">
        <Button className={avatarUsername?.trim().length > 0 ? 'active' : ''} onClick={onSubmit}>
          Save Changes
        </Button>
        <Button className="link" onClick={onRedirect}>
          Cancel
        </Button>
      </div>
    </View>
  );
}
