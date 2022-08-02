import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import AvatarChooser from '@components/Avatar/AvatarChooser';
import PageSection from '@components/PageSection';
import View from '@components/View';
import { Button, Input } from '@reactoso-ui';

export default function Update(): JSX.Element {
  const navigate = useNavigate();
  const [avatarUsername, setAvatarUsername] = useState('');
  const [avatarEmail, setAvatarEmail] = useState('');
  const onSubmit = (): void => {};
  const onRedirect = (): void => navigate('/account');
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

      <AvatarChooser />

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
