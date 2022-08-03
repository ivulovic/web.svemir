import { useNavigate } from 'react-router-dom';

import AvatarCredits from '@components/Avatar/AvatarCredits';
import AvatarIcon from '@components/Avatar/AvatarIcon';
import AvatarUsername from '@components/Avatar/AvatarUsername';
import PageSection from '@components/PageSection';
import View from '@components/View';
import { useAuthControllerScope } from '@controllers/auth';
import { IAuthenticatedUser } from '@implementation/auth/types';
import { Button, Paragraph } from '@reactoso-ui';
import { useSelector } from '@service';

export default function Profile(): JSX.Element {
  const navigate = useNavigate();
  const onRedirect = (): void => navigate('/account/update');
  const {
    implementation: {
      auth: { selectors },
    },
  } = useAuthControllerScope();
  const user: IAuthenticatedUser = useSelector(selectors.selectAuthUser);
  return (
    <View>
      <PageSection>Your account</PageSection>
      {/* <div className="profile-layout"> */}
      <View>
        <div className="profile-avatar">
          <AvatarIcon gender={user.gender} avatar={user.avatar} />
          <AvatarUsername value={user.username} isVerified={true} />
          {user.email ? <Paragraph>{user.email}</Paragraph> : <></>}
          <AvatarCredits value={user.coins} />
        </div>
        <Button className="link" onClick={onRedirect}>
          Update your account
        </Button>
      </View>
      {/* </div> */}
    </View>
  );
}
