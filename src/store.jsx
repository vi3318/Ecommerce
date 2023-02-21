import { configureStore, createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: { currentUser: null },
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    }
  }
});

export const { setCurrentUser } = userSlice.actions;

const store = configureStore({
  reducer: {
    user: userSlice.reducer
  }
});

export default store;
