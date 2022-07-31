import { Outlet } from 'react-router-dom';

import PageHeader from '@components/PageHeader';

import './style.scss';

export default function Page(): JSX.Element {
  return (
    <div className="profile-page-container">
      <PageHeader>Profile</PageHeader>
      <Outlet />
    </div>
  );
}
