import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from '@components/Header';
import Sidebar from '@components/Sidebar';
import AboutPage from '@pages/About';
import AccountPage from '@pages/Account';
import AccountLogin from '@pages/Account/views/Login';
import AccountProfile from '@pages/Account/views/Profile';
import AccountRegister from '@pages/Account/views/Register';
import AccountUpdate from '@pages/Account/views/Update';
import DiscoverPage from '@pages/Discover';
import GamesPage from '@pages/Games';
import GameDetails from '@pages/Games/views/Details';
import GameOverview from '@pages/Games/views/Overview';
// import HomePage from '@pages/Home';
import StreamPage from '@pages/Stream';
import './style.scss';

const Loading = (): JSX.Element => <span>Loading...</span>;

const App = (): JSX.Element => {
  const isLoggedIn = true;
  return (
    <>
      <Suspense fallback={<Loading />}>
        <div className="app-wrapper">
          <Sidebar />
          <div className="layout-wrapper">
            <Header />
            <div className="route-wrapper">
              <Routes>
                <Route path="/streaming" element={<StreamPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/discover" element={<DiscoverPage />} />
                <Route path="/account" element={<AccountPage />}>
                  <Route path="" element={isLoggedIn ? <AccountProfile /> : <AccountLogin />} />
                  <Route path="register" element={<AccountRegister />} />
                  <Route path="update" element={<AccountUpdate />} />
                </Route>
                <Route path="/games" element={<GamesPage />}>
                  <Route path="" element={<GameOverview />} />
                  <Route path=":id" element={<GameDetails />} />
                </Route>
                <Route path="/" element={<DiscoverPage />} />
              </Routes>
            </div>
          </div>
        </div>
      </Suspense>
    </>
  );
};
export default App;
