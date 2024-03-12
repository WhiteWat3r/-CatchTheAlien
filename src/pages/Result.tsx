import starImg from '../assets/images/other/star.svg';
import { Button } from '../components/Button';
import vkImg from '../assets/images/shareIcons/vk.svg';
import okImg from '../assets/images/shareIcons/odnoklassniki.svg';
import thImg from '../assets/images/shareIcons/telegram.svg';
import { OKShareButton, TelegramShareButton, VKShareButton } from 'react-share';
import { resultTexts } from '../utils/constants';
import { useAppDispatch, useAppSelector } from '../store/store';
import { setCurrentScreen } from '../store/gameSlice';
import { SCREENS } from '../types/screens';

export const Result = () => {
  const dispatch = useAppDispatch();

  const { gameResult, alienCount } = useAppSelector((store) => store.game);
  const resultText = resultTexts[gameResult];

  const handleNavigate = () => {
    dispatch(setCurrentScreen(SCREENS.THE_GAME));
  }; // Навигация к игре



  return (
    <div className="flex h-full bg-bg-3 text-center pt-[39px] pl-[22px] pb-[46px] pr-[19px] text-white-default">
      <div className="bg-bg-2 bg-cover bg-left-33 bg-bottom flex flex-col items-center h-full pt-[39px] p-[20px] pb-[36px] box-border">
        <img className="w-16 h-16" src={starImg} alt="Результат" />
        <h1 className="uppercase text-2xl font-light mt-14">Поймано {alienCount}/10!</h1>
        <p className="uppercase text-[11px] mt-6">{resultText}</p>
        <Button onClick={handleNavigate}>Еще раз!</Button>
        <span className="uppercase text-xs mt-8">Поделиться</span>
        <ul className="flex gap-4 mt-4">
          <li>
            <TelegramShareButton url={'https://catch-the-alien.vercel.app/results/excellent.html'} htmlTitle='https://catch-the-alien.vercel.app/results/excellent.html' title={'https://catch-the-alien.vercel.app/results/excellent.html'}>
              <img src={thImg} alt="Телеграмм" className="w-16 h-16 hover:opacity-70" />
            </TelegramShareButton>
          </li>
          <li>
            <OKShareButton url={'https://catch-the-alien.vercel.app/results/excellent.html'} htmlTitle='https://catch-the-alien.vercel.app/results/excellent.html' title={'https://catch-the-alien.vercel.app/results/excellent.html'}>
              <img src={okImg} alt="Одноклассники" className="w-16 h-16 hover:opacity-70" />
            </OKShareButton>
          </li>
          <li>
            <VKShareButton url={'https://catch-the-alien.vercel.app/results/excellent.html'} htmlTitle='https://catch-the-alien.vercel.app/results/excellent.html' title={'https://catch-the-alien.vercel.app/results/excellent.html'}>
              <img src={vkImg} alt="Вконтактe" className="w-16 h-16 hover:opacity-70" />
            </VKShareButton>
          </li>
        </ul>
      </div>
    </div>
  );
};
