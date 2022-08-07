import { NavLink as Link } from 'react-router-dom';

import { Scrollable } from '@reactoso-ui';
import './style.scss';

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
        <div key={item.id} className="quick-nav-item">
          <Link to={item.path} className="quick-nav-item-label">
            {item.label}
          </Link>
        </div>
      );
    });
  };

  return <Scrollable className="quick-nav">{getItems()}</Scrollable>;
};

export default QuickNav;
