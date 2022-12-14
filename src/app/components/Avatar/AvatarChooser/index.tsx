import { useEffect, useState } from 'react';

import { Button } from '@reactoso-ui';

import AvatarIcon from '../AvatarIcon';
import './style.scss';

export default function AvatarChooser({ onChange, defaultGender = null, defaultAvatar = null }): JSX.Element {
  const maxAvatars = 22;
  const minAvatars = 1;

  const getRandomNumber = (min: number, max: number): number => Math.floor(Math.random() * (max - min + 1) + min);

  const [avatarNumber, setAvatarNumber] = useState(
    parseInt(defaultAvatar, 10) || getRandomNumber(minAvatars, maxAvatars),
  );
  const [avatarGender, setAvatarGender] = useState(defaultGender || getRandomNumber(0, 1) ? 'm' : 'f');

  const onAvatarChange = (direction: number): void => {
    if (direction > 0) {
      if (avatarNumber < maxAvatars) {
        setAvatarNumber(avatarNumber + 1);
      }
    }
    if (direction < 0) {
      if (minAvatars < avatarNumber) {
        setAvatarNumber(avatarNumber - 1);
      }
    }
  };
  const onGenderChange = (gender: 'm' | 'f'): void => {
    if (gender !== avatarGender) {
      setAvatarGender(gender);
      setAvatarNumber(1);
    }
  };

  useEffect(() => {
    onChange({
      gender: avatarGender,
      avatar: avatarNumber.toString(),
    });
  }, [avatarNumber, avatarGender]);

  return (
    <div className="avatar-chooser">
      <div className="double-group">
        <div className="form-group">
          <p>Avatar:</p>
          <AvatarIcon gender={avatarGender} avatar={avatarNumber} />
          <p>Gender:</p>
          <div className="button-group">
            <Button className={avatarGender === 'm' ? 'active' : ''} onClick={(): void => onGenderChange('m')}>
              Male
            </Button>
            <Button className={avatarGender === 'f' ? 'active' : ''} onClick={(): void => onGenderChange('f')}>
              Female
            </Button>
          </div>
        </div>
        <div className="form-group">
          <p className="ta-right">
            {avatarNumber} / {maxAvatars}
          </p>
          <div className="button-group">
            <Button className={avatarNumber !== minAvatars ? 'active' : ''} onClick={(): void => onAvatarChange(-1)}>
              &larr;
            </Button>
            <Button className={avatarNumber !== maxAvatars ? 'active' : ''} onClick={(): void => onAvatarChange(1)}>
              &rarr;
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
