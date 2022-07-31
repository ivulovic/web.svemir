// import useHomeController from '@controllers/home';

// import Context from './context';
import Page from './page';
import './style.scss';

export default function ProfilePage(): JSX.Element {
  // inject repositories, services and their settings once.
  // Put in context result and use context to access everything this controller provides you with
  // const controller = useHomeController();
  return (
    <>
      {/* // <Context.Provider value={controller}> */}
      <Page />
      {/* // </Context.Provider> */}
    </>
  );
}
