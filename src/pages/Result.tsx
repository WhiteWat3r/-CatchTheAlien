import starImg from '../assets/images/other/star.svg';
import { Button } from '../components/Button';
import vkImg from '../assets/images/shareIcons/vk.svg';
import okImg from '../assets/images/shareIcons/odnoklassniki.svg';
import thImg from '../assets/images/shareIcons/telegram.svg';
import { OKShareButton, TelegramShareButton, VKShareButton } from 'react-share';
import { baseUrl, resultTexts } from '../utils/constants';
import { useAppDispatch, useAppSelector } from '../store/store';
import { setCurrentScreen } from '../store/gameSlice';
import { SCREENS } from '../types/screens';
import { useEffect } from 'react';

export const Result = () => {
  const dispatch = useAppDispatch();
  const isSoundOn = useAppSelector((store) => store.game.isSoundOn);
  const { gameResult, alienCount } = useAppSelector((store) => store.game);
  const resultText = resultTexts[gameResult];
  const shareResult = gameResult === 0 ? 'bad' : gameResult === 1 ? 'good' : 'excellent';

  const handleNavigate = () => {
    dispatch(setCurrentScreen(SCREENS.THE_GAME));
  }; // Навигация к игре

  useEffect(() => {
    if (isSoundOn) {
      const audio = new Audio('/music/finish.mp3');
      audio.play();
    }
  }, []); // звук финиша при попадании на страницу с результатом

  return (
    <div className="flex h-full bg-bg-3 bg-cover bg-center text-center pt-[39px] pl-[22px] pb-[46px] pr-[19px] text-white-default ">
      <div className="bg-bg-2 bg-cover bg-center flex flex-col items-center h-full pt-[39px] p-[20px] pb-[36px] box-border justify-between">
        <img className="w-16 h-16" src={starImg} alt="Результат" />
        <h1 className="uppercase text-[18px] font-light mt-14">Поймано {alienCount}/10!</h1>
        <p className="uppercase text-[11px] mt-6">{resultText}</p>
        <Button onClick={handleNavigate}>Еще раз!</Button>
        <span className="uppercase text-xs mt-8">Поделиться</span>
        <ul className="flex gap-4 mt-4">
          <li>
            <TelegramShareButton url={`${baseUrl}/results/${shareResult}.html`}>
              <img src={thImg} alt="Телеграмм" className="w-16 h-16 hover:opacity-70" />
            </TelegramShareButton>
          </li>
          <li>
            <OKShareButton url={`${baseUrl}/results/${shareResult}.html`}>
              <img src={okImg} alt="Одноклассники" className="w-16 h-16 hover:opacity-70" />
            </OKShareButton>
          </li>
          <li>
            <VKShareButton url={`${baseUrl}/results/${shareResult}.html`}>
              <img src={vkImg} alt="Вконтактe" className="w-16 h-16 hover:opacity-70" />
            </VKShareButton>
          </li>
        </ul>
      </div>
    </div>
  );
};
