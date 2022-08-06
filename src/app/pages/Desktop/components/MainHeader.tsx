import { Link } from 'react-router-dom';

import AvatarIcon from '@components/Avatar/AvatarIcon';
import { useAuthControllerScope } from '@controllers/auth';
import { IAuthenticatedUser } from '@implementation/auth/types';
import { useSelector } from '@service';

import LogoutIcon from '../icons/LogoutIcon';
import { UserStatusEnum } from '../types';

import Info from './Info';
import UserStatusButton from './UserStatusButton';

export default function MainHeader(): JSX.Element {
  const {
    implementation: {
      auth: { selectors },
    },
  } = useAuthControllerScope();

  const user: IAuthenticatedUser = useSelector(selectors.selectAuthUser);
  const isLoggedIn: boolean = useSelector(selectors.selectIsLoggedIn);

  return (
    <div id="desktop-main-content-header">
      <div className="desktop-main-content-header-section">
        <Info id="desktop-main-info" />
      </div>
      <div className="desktop-main-content-header-section">
        {isLoggedIn && (
          <Link to="/account" className="avatar">
            <AvatarIcon gender={user.gender} avatar={user.avatar} />
          </Link>
        )}
        <UserStatusButton icon={LogoutIcon} id="sign-out-button" userStatus={UserStatusEnum.LoggedOut} />
      </div>
    </div>
  );
}
