import { useState } from 'react';
import classNames from 'classnames';

import { Button } from '../components/Button';

import alienImg1 from '../assets/images/aliens/alien1.svg';
import alienImg2 from '../assets/images/aliens/alien2.svg';
import { useAppDispatch } from '../store/store';
import { setCurrentScreen } from '../store/gameSlice';
import { SCREENS } from '../types/screens';

export const OnBoarding = () => {
  const dispatch = useAppDispatch();

  const [step, setStep] = useState(1);
  const [renderKey, setRenderKey] = useState(0);

  const handleClick = () => {
    handleUpdate();
    step === 1 ? setStep(2) : dispatch(setCurrentScreen(SCREENS.THE_GAME));
  }; // Смена шага/навигация, обновление key для перерисовки hand

  const handleUpdate = () => {
    setRenderKey(renderKey + 1);
  }; // обновление key для перерисовки hand

  return (
    <div className="h-full pl-[22px] pt-[39px] pr-[19px] pb-[46px] box-border">
      <div className="bg-bg-2 flex  h-full box-border flex-col items-center pt-[29px] pb-[40px]">
        {step === 1 ? (
          <div
            className={classNames(
              'relative w-[150px] h-[150px] flex justify-center items-center',
              'before:content="" before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-bubble2 before:animate-bubbleAppearance before:bg-bubble before:z-10',
            )}>
            <img className="w-[100px] h-[100px] absolute" src={alienImg1} alt="Пришелец" />
          </div>
        ) : (
          <div
            className={classNames(
              'relative w-[150px] h-[150px] flex justify-center items-center',
              'before:content="" before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-bubble2 before:animate-faultBubbleAppearance before:bg-faultBubble before:z-10',
            )}>
            <img className="w-[100px] h-[100px] absolute" src={alienImg2} alt="Пришелец" />
          </div>
        )}

        <div
          key={renderKey}
          className="bg-hand w-[130px] h-[150px] bg-center transform translate-y-[-30px] animate-handAnimations z-20"
        />

        <p className="text-white-default text-center max-w-[280px] text-[12px] leading-[20px] uppercase">
          {step === 1
            ? 'Нажимай на НЛО и отравляй их В ДАЛЕКИЙ КОСМОС!'
            : 'НО НЕ ВСЕ ИНОПЛАНЕТЯНЕ ЗЛЫЕ. КТО-то ПРОСТО УСТАЛ ИЛИ ЗАБОЛЕЛ. ДАЙ ИМ ПРОСТО УЛЕТЕТЬ И ВСЁ БУДЕТ ХОРОШО!'}
        </p>
        <Button onClick={handleClick}>{step === 1 ? 'Ясно' : 'Погнали'}</Button>
      </div>
    </div>
  );
};
