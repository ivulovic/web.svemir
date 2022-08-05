import LogoutIcon from '../icons/LogoutIcon';
import { UserStatusEnum } from '../types';

import Info from './Info';
import QuickNav from './QuickNav';
import UserStatusButton from './UserStatusButton';

const Main: React.FC = () => {
  return (
    <div id="desktop-main">
      <div id="desktop-main-content-wrapper">
        <div id="desktop-main-content">
          <div id="desktop-main-content-header">
            <div className="desktop-main-content-header-section">
              <Info id="desktop-main-info" />
            </div>
            <div className="desktop-main-content-header-section">
              <UserStatusButton icon={LogoutIcon} id="sign-out-button" userStatus={UserStatusEnum.LoggedOut} />
            </div>
          </div>
          <QuickNav />
          {/* <QuickNav />
          <QuickNav />
          <QuickNav />
          <QuickNav />
          <QuickNav />
          <QuickNav />
          <QuickNav />
          <QuickNav />
          <QuickNav />
          <QuickNav />
          <QuickNav />
          <QuickNav />
          <QuickNav />
          <QuickNav />
          <QuickNav />
          <QuickNav />
          <QuickNav />
          <QuickNav />
          <QuickNav />
          <QuickNav />
          <QuickNav />
          <QuickNav /> */}
        </div>
      </div>
    </div>
  );
};

export default Main;
