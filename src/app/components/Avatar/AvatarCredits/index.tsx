import AvatarCurrency from '../AvatarCurrency';
import './style.scss';

export default function AvatarCredits({ value }): JSX.Element {
  return (
    <div className={`avatar-credits`}>
      {value}
      <AvatarCurrency />
    </div>
  );
}
