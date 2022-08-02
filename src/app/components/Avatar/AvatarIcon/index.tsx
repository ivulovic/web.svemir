import './style.scss';

export default function AvatarIcon({ gender, avatar }): JSX.Element {
  return (
    <div className="avatar-icon">
      <div className="avatar-image" style={{ backgroundImage: `url(/images/avatars/${gender}${avatar}.svg)` }}></div>
    </div>
  );
}
