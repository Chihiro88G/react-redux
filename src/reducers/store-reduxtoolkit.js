import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0
}

const countSlice = createSlice({
  name: 'count',
  initialState: initialState,
  reducers: {
    increment: (state, action) => {
      console.log('type: ' + action.type + ', payload: ' + action.payload);
      state.value += 1;
    },
    decrement: (state, action) => {
      console.log('type: ' + action.type + ', payload: ' + action.payload);
      state.value -= 1;
    }
  }
});

const store = configureStore({
  reducer: {
    count: countSlice.reducer
  }
});

export const { increment, decrement } = countSlice.actions;
export default store;