import { Link } from 'react-router-dom';

import ScrollableComponent from './ScrollableComponent';

const QuickNav: React.FC = () => {
  const getItems = (): JSX.Element[] => {
    return [
      {
        id: 1,
        label: 'Discover',
        path: '/',
      },
      {
        id: 2,
        label: 'Apps',
        path: '/apps',
      },
      {
        id: 3,
        label: 'Games',
        path: '/games',
      },
    ].map((item: any) => {
      return (
        <div key={item.id} className="quick-nav-item clear-button">
          <Link to={item.path} className="quick-nav-item-label">
            {item.label}
          </Link>
        </div>
      );
    });
  };

  return <ScrollableComponent id="quick-nav">{getItems()}</ScrollableComponent>;
};

export default QuickNav;
