import { useEffect, useRef, useState } from 'react';
import soundOn from '../assets/images/other/soundOn.svg';
import soundOff from '../assets/images/other/soundOff.svg';
import { useAppDispatch, useAppSelector } from '../store/store';
import { setIsSoundOn } from '../store/gameSlice';

const Sound = () => {
  const dispatch = useAppDispatch();
  const isSoundOn = useAppSelector((store) => store.game.isSoundOn);
  const [currentMusic, setCurrentMusic] = useState('/music/defaultMusic.mp3');
  const audioRef = useRef<HTMLAudioElement>(null);
  const currentRoute = useAppSelector((store) => store.game.currentScreen);

  const toggleSound = () => {
    dispatch(setIsSoundOn());
  }; // включение/выключение фоновой музыки

  useEffect(() => {
    if (isSoundOn) {
      setCurrentMusic(
        currentRoute === 'THE_GAME' ? '/music/gameMusic.mp3' : '/music/defaultMusic.mp3',
      );
    }
  }, [currentRoute, isSoundOn]); // обновление музыки только при изменении роута или состояния звука

  useEffect(() => {
    if (audioRef.current) {
      if (!isSoundOn) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
    }
  }, [currentMusic, isSoundOn]); // обновление воспроизведения при изменении музыки или состояния звука



  return (
    <>
      <div className="absolute top-[10px] left-[10px] cursor-pointer z-10" onClick={toggleSound}>
        <img src={isSoundOn ? soundOn : soundOff} alt="Звуки" />
      </div>
      <audio ref={audioRef} loop key={currentMusic}>
        <source src={currentMusic} type="audio/mpeg" />
      </audio>
    </>
  );
};

export default Sound;
