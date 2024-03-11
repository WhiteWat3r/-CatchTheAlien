import classNames from 'classnames';
import { memo } from 'react';

interface ICitizenProps {
  citizen: string;
  direction: string;
}

export const Citizen = memo(({ citizen, direction }: ICitizenProps) => {
  const styleParameter = Math.floor(Math.random() * 60);

  return (
    <img
      className={classNames(
        'w-[40px] h-[120px] absolute',
        direction === 'right'
          ? 'scale-x-[-1] animate-citizenRightAnimation'
          : 'animate-citizenLeftAnimation',
      )}
      style={{ top: styleParameter + '%', zIndex: styleParameter }}
      src={citizen}
    />
  );
});
