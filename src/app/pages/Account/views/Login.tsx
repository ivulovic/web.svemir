import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import PageSection from '@components/PageSection';
import View from '@components/View';
import { Button, Input } from '@reactoso-ui';

export default function Login(): JSX.Element {
  const navigate = useNavigate();
  const [recoveryCode, setRecoveryCode] = useState('');
  const onSubmit = (): void => {};
  const onRedirect = (): void => navigate('/profile/register');
  return (
    <View>
      <PageSection>Access your account</PageSection>
      <div className="form-group">
        <p>Recovery Code:</p>
        <Input
          onChange={(e: any): void => setRecoveryCode(e.target.value)}
          placeholder="Enter your recovery code"
          type="password"
        />
      </div>
      <div className="footer-group">
        <Button className={recoveryCode?.trim().length >= 10 ? 'active' : ''} onClick={onSubmit}>
          Enter
        </Button>
        <Button className="link" onClick={onRedirect}>
          Not having an account?
        </Button>
      </div>
    </View>
  );
}
