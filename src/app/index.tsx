import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

// import Header from '@components/Header';
import Container from '@components/Container';
import AboutPage from '@pages/About';
import HomePage from '@pages/Home';

import './style.scss';
import Sidebar from '@components/Sidebar';
import MainContainer from '@components/MainContainer';

const Loading = (): JSX.Element => <span>Loading...</span>;

const App = (): JSX.Element => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Container>
          <Sidebar />
          {/* <Header /> */}
          <MainContainer>
            <Routes>
              <Route path="/about" element={<AboutPage />} />
              <Route path="/" element={<HomePage />} />
            </Routes>
          </MainContainer>
        </Container>
      </Suspense>
    </>
  );
};
export default App;
