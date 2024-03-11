import { createSlice } from '@reduxjs/toolkit';
import { SCREENS } from '../types/screens';

interface IGameState {
  currentScreen: SCREENS;
  gameResult: number;
  alienCount: number;
}

const gameState: IGameState = {
  currentScreen: SCREENS.THE_START,
  gameResult: 0,
  alienCount: 0
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
  },
});

export const { setCurrentScreen, setGameResult, setAlienCount} = gameSlice.actions;
