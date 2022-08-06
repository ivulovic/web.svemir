import { Link } from 'react-router-dom';

import GiftIcon from '../../icons/GiftIcon';
import './style.scss';

export default function DesktopCard(): JSX.Element {
  return (
    <Link to="/" className="desktop-card">
      <div className="desktop-card-content">
        <GiftIcon className="desktop-card-icon" />
        <span className="desktop-card-text">Wishlist</span>
      </div>
    </Link>
  );
}
