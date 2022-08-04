import { Outlet } from 'react-router-dom';

import PageHeader from '@components/PageHeader';

import './style.scss';

export default function Page(): JSX.Element {
  return (
    <div className="games-page-container">
      <PageHeader>Discover</PageHeader>
      <Outlet />
    </div>
  );
}
