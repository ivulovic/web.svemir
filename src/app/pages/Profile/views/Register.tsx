import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import PageSection from '@components/PageSection';
import { Button, Input } from '@reactoso-ui';

import AvatarChooser from '../components/AvatarChooser';

export default function Register(): JSX.Element {
  const navigate = useNavigate();
  const [avatarUsername, setAvatarUsername] = useState('');
  const onSubmit = (): void => {};
  const onRedirect = (): void => navigate('/profile');
  return (
    <div className="view anim">
      <PageSection>Create an account</PageSection>

      <div className="form-group">
        <p>Username:</p>
        <Input onChange={(e: any): void => setAvatarUsername(e.target.value)} placeholder="Type in your username" />
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
    </div>
  );
}
