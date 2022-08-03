import AvatarCurrency from '../AvatarCurrency';
import './style.scss';

export default function AvatarCredits({ value }): JSX.Element {
  return (
    <div className={`avatar-credits`}>
      {value.toFixed(2)}
      <AvatarCurrency />
    </div>
  );
}
