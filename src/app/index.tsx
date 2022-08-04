import { Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import Header from '@components/Header';
import Sidebar from '@components/Sidebar';
import { useAuthControllerScope } from '@controllers/auth';
import { AppStatusEnum } from '@implementation/auth/types';
import AboutPage from '@pages/About';
import AccountPage from '@pages/Account';
import AccountLogin from '@pages/Account/views/Login';
import AccountProfile from '@pages/Account/views/Profile';
import AccountRegister from '@pages/Account/views/Register';
import AccountUpdate from '@pages/Account/views/Update';
import GamesPage from '@pages/Games';
import GameDetails from '@pages/Games/views/Details';
import GameOverview from '@pages/Games/views/Overview';
// import HomePage from '@pages/Home';
import StreamPage from '@pages/Stream';
import './style.scss';
import { Loading } from '@reactoso-ui';
import { useSelector } from '@service';

const App = (): JSX.Element => {
  const authController = useAuthControllerScope();
  // const user = useSelector(authController.implementation.auth.selectors.selectAuthUser);
  // const isLoading = useSelector(authController.implementation.auth.selectors.selectAuthLoading);
  const isLoggedIn = useSelector(authController.implementation.auth.selectors.selectIsLoggedIn);
  const appStatus = useSelector(authController.implementation.auth.selectors.selectAppStatus);
  if (appStatus === AppStatusEnum.NotReady) {
    return <Loading />;
  }
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
                <Route path="/account" element={<AccountPage />}>
                  <Route path="" element={isLoggedIn ? <AccountProfile /> : <AccountLogin />} />
                  <Route path="register" element={isLoggedIn ? <Navigate to="/account" /> : <AccountRegister />} />
                  <Route path="update" element={!isLoggedIn ? <Navigate to="/account" /> : <AccountUpdate />} />
                </Route>
                {/* <Route path="/discover" element={<GamesPage />}>
                  <Route path="" element={<GameOverview />} />
                  <Route path=":id" element={<GameDetails />} />
                </Route> */}
                <Route path="/" element={<GamesPage />}>
                  <Route path="" element={<GameOverview />} />
                  <Route path=":id" element={<GameDetails />} />
                </Route>
              </Routes>
            </div>
          </div>
        </div>
      </Suspense>
    </>
  );
};
export default App;
