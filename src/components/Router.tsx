import { useMemo } from 'react';
import { SCREENS } from '../types/screens';

import { useAppSelector } from '../store/store';
import { Start } from '../pages/Start';
import Loading from './Loading';
import { OnBoarding } from '../pages/OnBoarding';
import { Game } from '../pages/Game';
import { Result } from '../pages/Result';

export const Router: React.FC = () => {
  const { currentScreen } = useAppSelector((state) => state.game);

  return useMemo(() => {
    switch (currentScreen) {
      case SCREENS.THE_START:
        return <Start />;
      case SCREENS.THE_LOADING:
        return <Loading />;
      case SCREENS.THE_ONBOARDING:
        return <OnBoarding />;
      case SCREENS.THE_GAME:
        return <Game />;
      case SCREENS.THE_RESULT:
        return <Result />;
      default:
        return <Start />;
    }
  }, [currentScreen]);
};
