import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import AvatarChooser from '@components/Avatar/AvatarChooser';
import PageSection from '@components/PageSection';
import View from '@components/View';
import { Button, Input } from '@reactoso-ui';

export default function Register(): JSX.Element {
  const navigate = useNavigate();
  const [avatarUsername, setAvatarUsername] = useState('');
  const onSubmit = (): void => {};
  const onRedirect = (): void => navigate('/account');
  return (
    <View>
      <PageSection>Create an account</PageSection>

      <div className="form-group">
        <p>Username:</p>
        <Input onChange={(e: any): void => setAvatarUsername(e.target.value)} placeholder="Enter username" />
      </div>

      <AvatarChooser />

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
