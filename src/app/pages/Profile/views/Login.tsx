import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import PageSection from '@components/PageSection';
import { Button, Input } from '@reactoso-ui';

export default function Login(): JSX.Element {
  const navigate = useNavigate();
  const [recoveryCode, setRecoveryCode] = useState('');
  const onSubmit = (): void => {};
  const onRedirect = (): void => navigate('/profile/register');
  return (
    <div className="view anim">
      <PageSection>Login into your account</PageSection>
      <div className="form-group">
        <p>Recovery Code:</p>
        <Input
          onChange={(e: any): void => setRecoveryCode(e.target.value)}
          placeholder="Type in your recovery code"
          type="password"
        />
      </div>
      <div className="footer-group">
        <Button className={recoveryCode?.trim().length >= 10 ? 'active' : ''} onClick={onSubmit}>
          Create Account
        </Button>
        <Button className="link" onClick={onRedirect}>
          Not having an account? Lets create it.
        </Button>
      </div>
    </div>
  );
}
