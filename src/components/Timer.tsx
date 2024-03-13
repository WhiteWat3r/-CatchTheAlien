import timer from '../assets/images/other/timer.svg';
import { useEffect } from 'react';
import classNames from 'classnames';

export interface ITimerProps {
  time: number;
  setTime: (prevTime: (prevTime: number) => number) => void;
}

export const Timer = ({ time, setTime }: ITimerProps) => {

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }; // редактирование вывода таймера в формате "минуты:секунды".

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime: number) => {
        if (prevTime > 0) {
          return prevTime - 1;
        } else {
          clearInterval(timer);
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []); // логика обратного отсчета, уменьшение значения timer каждую секунду

  return (
    <div
      className={classNames(
        'w-[147px] h-[47px] bg-aquamarine rounded-2xl border-black-default border-4 box-border flex items-center gap-[10px] z-2 justify-center',
        time < 10
          ? 'text-red-default border-red-default'
          : 'text-black-default border-black-default',
      )}>
      <img src={timer} alt="Таймер" />
      <span>{formatTime(time)}</span>
    </div>
  );
};
