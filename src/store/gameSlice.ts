import { createSlice } from '@reduxjs/toolkit';
import { SCREENS } from '../types/screens';

interface IGameState {
  currentScreen: SCREENS;
  gameResult: number;
  alienCount: number;
  isSoundOn: boolean;
}

const gameState: IGameState = {
  currentScreen: SCREENS.THE_START,
  gameResult: 0,
  alienCount: 0,
  isSoundOn: false
};

export const gameSlice = createSlice({
  name: 'game',
  initialState: gameState,
  reducers: {
    setCurrentScreen: (state, action) => {
      state.currentScreen = action.payload;
    },
    setGameResult: (state, action) => {
      state.gameResult = action.payload;
    },
    setAlienCount: (state, action) => {
        state.alienCount = action.payload;
      },
      setIsSoundOn: (state) => {
        state.isSoundOn = !state.isSoundOn;
      },
  },
});

export const { setCurrentScreen, setGameResult, setAlienCount, setIsSoundOn} = gameSlice.actions;
