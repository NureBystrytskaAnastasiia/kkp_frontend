import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    // Тут будуть редьюсери
  },
});

export { store };