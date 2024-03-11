import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Citizens } from '../components/Citizens';
import { Counter } from '../components/Counter';
import { Timer } from '../components/Timer';
import { Alien } from '../components/Alien';

import { alienImgs, evilPhrases, kindPhrases } from '../utils/constants';
import { IAlien } from '../types/alien';
import { useAppDispatch } from '../store/store';
import { setAlienCount, setCurrentScreen, setGameResult } from '../store/gameSlice';
import { SCREENS } from '../types/screens';

export const Game = () => {
  const dispatch = useAppDispatch();

  const [bubleAlienCounter, setBubleAlienCounter] = useState(0);
  const [time, setTime] = useState(30);
  const [aliens, setAliens] = useState<IAlien[]>([]);
  const [gameIsFinished, setGameIsFinished] = useState(false);

  useEffect(() => {
    if (time === 0 || bubleAlienCounter === 10) {
      setGameIsFinished(true);
      setAliens([]);
    }
  }, [time, bubleAlienCounter]);

  useEffect(() => {
    setTimeout(() => {
      if (gameIsFinished) {
        dispatch(setGameResult(bubleAlienCounter < 5 ? 0 : bubleAlienCounter < 9 ? 1 : 2));
        dispatch(setCurrentScreen(SCREENS.THE_RESULT));
        dispatch(setAlienCount(bubleAlienCounter))
      }
    }, 2000);
  }, [gameIsFinished]);

  const createAlien = (): void => {
    const newAlienType = Math.random() < 0.4 ? 'kind' : 'evil'; // плохие пришельцы появляются чаще, чтобы не добавлять чаще разных
    const randomIndex = Math.floor(Math.random() * kindPhrases.length);

    const newAlien: IAlien = {
      type: newAlienType,
      id: uuidv4(),
      topPosition: Math.floor(Math.random() * 60),
      leftPosition: Math.floor(Math.random() * 80),
      img: alienImgs[Math.floor(Math.random() * alienImgs.length)],
      phrase: newAlienType === 'kind' ? kindPhrases[randomIndex] : evilPhrases[randomIndex],
    };

    const tooClose = aliens.some(
      (alien) =>
        Math.abs(newAlien.topPosition - alien.topPosition) < 20 &&
        Math.abs(newAlien.leftPosition - alien.leftPosition) < 20,
    );

    if (tooClose) {
      // console.log('рядом');
      return createAlien();
    }

    setAliens([...aliens, newAlien]);
    setTimeout(() => {
      setAliens((prevAliens) => prevAliens.filter((a) => a.id !== newAlien.id));
    }, 5000);
  };

  useEffect(() => {
    aliens.length === 0 && createAlien();
  }, [aliens]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (aliens.length < 3) {
        createAlien();
      }
    }, 1000);
    return () => clearInterval(intervalId);
  }, [aliens]);

  useEffect(() => {
    createAlien();
  }, []);

  const handleAlienClick = (id: string) => {
    setTimeout(() => {
      setAliens((prevAliens) => prevAliens.filter((a) => a.id !== id));
    }, 2000);
  };

  return (
    <div className='flex flex-col justify-center h-full relative overflow-hidden'>
      <div className='p-[10px] flex justify-between'>
        <Counter counter={bubleAlienCounter} />
        <Timer time={time} setTime={setTime} />
      </div>






      {gameIsFinished ? (


<div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 flex flex-col justify-center items-center text-white-default'>
<h1 className='uppercase text-[48px] mb-[100px]'>Конец!</h1>
<p className='text-[18px] text-center line leading-[32px] '>ПОРА УЗНАТЬ РЕЗУЛЬТАТ...</p>
</div>


      ) : (
        <>
          <div className='relative h-[400px] w-full'>
            {aliens.map((alien) => (
              <Alien
                type={alien.type}
                key={alien.id}
                leftPosition={alien.leftPosition}
                topPosition={alien.topPosition}
                setBubleAlienCounter={setBubleAlienCounter}
                img={alien.img}
                onClick={() => handleAlienClick(alien.id)}
                phrase={alien.phrase}
              />
            ))}
          </div>

          <Citizens />
        </>
      )}

      
    </div>
  );
};
