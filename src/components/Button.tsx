import { useAppSelector } from '../store/store';
import clickSound from '/music/click.mp3';

interface IButtonProps {
  children: string;
  onClick: () => void;
}
export const Button = ({ children, onClick }: IButtonProps) => {
  const isSoundOn = useAppSelector((store) => store.game.isSoundOn);

  const handleClick = () => {
    const audio = new Audio(clickSound);
    isSoundOn && audio.play(); // звук клика звучит только в случае включенного звука
    onClick();
  }; // обработчик клика по кнопке

  return (
    <button
      className='text-white-default pb-2 w-[208px] h-[66px] text-[34px] bg-red-default font-sans uppercase mt-auto cursor-pointer relative box-border rounded-br-[4px] rounded-bl-[4px] p-0 whitespace-nowrap
            before:content-"" before:absolute before:w-full before:box-border before:top-[-12%] before:border-[4px] before:border-red-default before:border-transparent before:border-b-red-default before:left-0'
      onClick={handleClick}>
      {children}
    </button>
  );
};
