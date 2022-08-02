import './style.scss';

export default function AvatarUsername({ value, isVerified }): JSX.Element {
  return <div className={`avatar-username ${isVerified ? 'verified' : 'not-verified'}`}>{value}</div>;
}
