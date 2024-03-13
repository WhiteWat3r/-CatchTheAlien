import counerAlien from '../assets/images/aliens/miniAlien.svg';

interface ICounterProps {
  counter: number;
}

export const Counter = ({ counter }: ICounterProps) => {
  return (
    <div className="w-[140px] h-[47px] bg-aquamarine rounded-2xl border-black-default border-4 box-border flex items-center gap-[10px] z-2 justify-center">
      <img src={counerAlien} alt="Счетчик" />
      <span>{String(counter).padStart(2, '0')}/10</span>
    </div>
  );
};
