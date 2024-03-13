import bubble from '../assets/images/bubbles/bubble.svg';
import redBubble from '../assets/images/bubbles/redBubble.svg';

import { memo, useState } from 'react';
import classNames from 'classnames';

interface IAlienProps {
  type?: 'kind' | 'evil';
  topPosition: number;
  leftPosition: number;
  setBubleAlienCounter: (prevCount: (prevCount: number) => number) => void;
  onClick: () => void;
  img?: string;
  phrase: string;
}

export const Alien = memo(
  ({
    type,
    leftPosition,
    topPosition,
    onClick,
    setBubleAlienCounter,
    img,
    phrase,
  }: IAlienProps) => {
    const [showBubble, setShowBubble] = useState(false);
    const [isOut, setIsOut] = useState(false);

    const handleAlienClick = () => {
      setIsOut(!isOut);
      onClick();
      if (type === 'kind') {
        setBubleAlienCounter((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
      } else {
        setBubleAlienCounter((prevCount) => prevCount + 1);
      }
      setShowBubble(true);
    }; // обработчик клика по пришелецу, при нажатии он исчезает и отображается бабл
    return (
      <div
        className={classNames(
          'animate-alienAnimation flex absolute w-[120px] h-[120px] justify-center items-center',
          isOut && 'animate-exitScreenAnimation pointer-events-none',
        )}
        style={{ top: topPosition + '%', left: leftPosition + '%' }}>
        {showBubble && (
          <img
            src={type === 'kind' ? redBubble : bubble}
            className="absolute top-[0] left-[0] z-3 w-[120px] h-[120px]"
          />
        )}
        <img
          src={img}
          alt="Пришелец"
          className="w-[80px] h-[80px] cursor-pointer z-4 "
          onClick={handleAlienClick}
        />

        <div
          className={classNames(
            'absolute bg-white-default top-[110px] flex justify-center items-center',
            type === 'kind'
              ? 'w-[220px] h-[90px] bg-phraseKind'
              : 'w-[165px] h-[130px] bg-phraseEvil',
            leftPosition < 40 ? 'left-[50px] z-30' : 'right-[50px] z-30 scale-x-[-1]',
            '!bg-transparent',
          )}>
          <div className={leftPosition < 40 ? '' : 'scale-x-[-1]'}>
            <p
              style={{ wordBreak: 'break-word' }}
              className="uppercase text-[12px] max-w-[180px] h-min-[36px] flex items-center text-wrap break-words text-center pt-4">
              {phrase}
            </p>
          </div>
        </div>
      </div>
    );
  },
);
