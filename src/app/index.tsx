import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from '@components/Header';
import Sidebar from '@components/Sidebar';
import AboutPage from '@pages/About';
import DiscoverPage from '@pages/Discover';
import GamesPage from '@pages/Games';
import GameDetails from '@pages/Games/views/Details';
import GameOverview from '@pages/Games/views/Overview';
import ProfilePage from '@pages/Profile';
// import HomePage from '@pages/Home';
import Login from '@pages/Profile/views/Login';
import Register from '@pages/Profile/views/Register';
import StreamPage from '@pages/Stream';
import './style.scss';

const Loading = (): JSX.Element => <span>Loading...</span>;

const App = (): JSX.Element => {
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
                <Route path="/profile" element={<ProfilePage />}>
                  <Route path="" element={<Login />} />
                  <Route path="register" element={<Register />} />
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
