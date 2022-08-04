import { Link } from 'react-router-dom';

import AvatarIcon from '@components/Avatar/AvatarIcon';
import { useAuthControllerScope } from '@controllers/auth';
import { IAuthenticatedUser } from '@implementation/auth/types';
import { Input } from '@reactoso-ui';
import { useSelector } from '@service';
import './style.scss';

export default function Header(): JSX.Element {
  const {
    implementation: {
      auth: { selectors },
    },
  } = useAuthControllerScope();
  const user: IAuthenticatedUser = useSelector(selectors.selectAuthUser);
  const isLoggedIn = useSelector(selectors.selectIsLoggedIn);
  return (
    <div className="header">
      <Input placeholder="Search" />
      {isLoggedIn && (
        <Link to="/account" className="avatar">
          <AvatarIcon gender={user.gender} avatar={user.avatar} />
        </Link>
      )}
    </div>
  );
}
