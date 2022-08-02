import { useNavigate } from 'react-router-dom';

import AvatarCredits from '@components/Avatar/AvatarCredits';
import AvatarIcon from '@components/Avatar/AvatarIcon';
import AvatarUsername from '@components/Avatar/AvatarUsername';
import PageSection from '@components/PageSection';
import View from '@components/View';
import { Button, Paragraph } from '@reactoso-ui';

export default function Profile(): JSX.Element {
  const navigate = useNavigate();
  const onRedirect = (): void => navigate('/account/update');

  return (
    <View>
      <PageSection>Your account</PageSection>
      {/* <div className="profile-layout"> */}
      <View>
        <div className="profile-avatar">
          <AvatarIcon gender="f" avatar="12" />
          <AvatarUsername value="Alexa" isVerified={true} />
          <Paragraph>alexa@gmail.com</Paragraph>
          <AvatarCredits value="1,200,000.00" />
        </div>
        <Button className="link" onClick={onRedirect}>
          Update your account
        </Button>
      </View>
      {/* </div> */}
    </View>
  );
}
