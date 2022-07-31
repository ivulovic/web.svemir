import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

// import Header from '@components/Header';
import Container from '@components/Container';
import MainContainer from '@components/MainContainer';
import Sidebar from '@components/Sidebar';
import AboutPage from '@pages/About';
import HomePage from '@pages/Home';

import './style.scss';
import Header from '@components/Header';
import DiscoverPage from '@pages/Discover';
import StreamPage from '@pages/Stream';

const Loading = (): JSX.Element => <span>Loading...</span>;

const App = (): JSX.Element => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Container>
          <Sidebar />
          <div className="layout-wrapper">
            <Header />
            <div className="route-wrapper">
              <Routes>
                <Route path="/streaming" element={<StreamPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/discover" element={<DiscoverPage />} />
                <Route path="/" element={<HomePage />} />
              </Routes>
            </div>
          </div>
        </Container>
      </Suspense>
    </>
  );
};
export default App;
