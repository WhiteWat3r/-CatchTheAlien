import { useEffect, useRef, useState } from 'react';

import alien1 from '../assets/images/aliens/alien1.svg';
import alien2 from '../assets/images/aliens/alien2.svg';
import alien3 from '../assets/images/aliens/alien3.svg';
import alien4 from '../assets/images/aliens/alien4.svg';
import alien5 from '../assets/images/aliens/alien5.svg';
import smallAlien from '../assets/images/aliens/miniAlien.svg';
import bgFirst from '../assets/images/backgrounds/bg-1.png';
import bgSecond from '../assets/images/backgrounds/bg-2.png';
import bgThird from '../assets/images/backgrounds/bg-3.png';
import timer from '../assets/images/other/timer.svg';
import hand from '../assets/images/hands/hand.svg';
import ClickedHand from '../assets/images/hands/hand2.svg';
import bubble from '../assets/images/bubbles/bubble.svg';
import redBubble from '../assets/images/bubbles/redBubble.svg';
import bubbleSecond from '../assets/images/bubbles//bubble2.svg';

import { useDispatch } from 'react-redux';
import { setCurrentScreen } from '../store/gameSlice';
import { SCREENS } from '../types/screens';

const images = [
  alien1,
  alien2,
  alien3,
  alien5,
  alien4,
  smallAlien,
  bgFirst,
  bgSecond,
  ClickedHand,
  bgThird,
  redBubble,
  bubble,
  hand,
  bubbleSecond,
  timer
];

const Loading = () => {
  const dispatch = useDispatch();
  const init = useRef(false);
  const [activeText, setActiveText] = useState(0);
  const texts = ['ДОБАВЛЯЕМ ПРИШЕЛЬЦЕВ', 'запускаем людей', 'запасаемся вкусняшками'];

  useEffect(() => {
    if (init.current) return;

    init.current = true;

    const imagePromises = images.map((src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
          resolve(true);
        };
        img.onerror = (
          // event, source, lineno, colno,
          error,
        ) => reject(error);
        img.src = src;
      });
    });

    Promise.all(imagePromises)
      .then(() => {
        dispatch(setCurrentScreen(SCREENS.THE_ONBOARDING));
      })
      .catch((e) => {
        dispatch(setCurrentScreen(SCREENS.THE_ONBOARDING));
        console.error('Ошибка загрузки изображений: ', e);
      });
  }, []);

  useEffect(() => {
    const interval = setInterval(
      () => setActiveText((x) => (x === texts.length - 1 ? 0 : x + 1)),
      2000,
    );
    return () => clearInterval(interval);
  });

  return (
    <div
      className={
        'w-full h-full flex flex-col items-center pt-[57px]  pb-[60px] bg-black bg-opacity-50 text-white-default justify-between'
      }>
      <div className="bg-bubble w-[150px] h-[150px] animate-randomMove flex justify-center items-center">
        <img className="w-[100px] h-[100px]" src={alien1} alt="Пришелец" />
      </div>

      <h1 className="text-[28px] text-center max-w-[320px] font-normal uppercase">Загрузка</h1>

      <div className=" text-[16px] text-shadow mt-[100px] uppercase text-center">
        {texts[activeText]}
      </div>
    </div>
  );
};

export default Loading;
