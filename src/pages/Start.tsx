import { Button } from '../components/Button';

import alienImg from '../assets/images/aliens/alien1.svg';
import { setCurrentScreen } from '../store/gameSlice';
import { SCREENS } from '../types/screens';
import { useAppDispatch } from '../store/store';

export const Start = () => {
  const dispatch = useAppDispatch();
  const handleNavigate = () => {
    dispatch(setCurrentScreen(SCREENS.THE_LOADING));
  };

  return (
    <div className="flex flex-col h-full box-border pt-[57px] pb-[55px] items-center gap-10 bg-black bg-opacity-50">
      <div className="bg-bubble w-[150px] h-[150px] animate-randomMove flex justify-center items-center">
        <img className="w-[100px] h-[100px]" src={alienImg} alt="Пришелец" />
      </div>
      <h1 className="text-4xl text-orange-default text-center max-w-[320px] font-normal">
        ПОЙМАЙ ПРИШЕЛЬЦА!
      </h1>
      <Button onClick={handleNavigate}>Начать</Button>
    </div>
  );
};
