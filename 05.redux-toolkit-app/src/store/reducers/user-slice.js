import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { logInAsync } from '../apis/user-api';

/** state **********/
const initialState = {
  isLogging: false,
  isLogOn: false,
  data: {},
};

/** async action **********/
export const logIn = createAsyncThunk('user/logIn', async (username) => {
  const user = await logInAsync(username);
  return user;
});

/** reducer **********/
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // sync reducer
    logOut: (state) => {
      state.isLogOn = false;
      state.data = {};
    },
  },
  extraReducers: (builder) => {
    // async reducer
    builder
      .addCase(logIn.pending, (state) => {
        // axios start
        state.isLogging = true;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        // axios success
        state.isLogging = false;
        state.isLogOn = true;
        state.data = action.payload;
      })
      .addCase(logIn.rejected, (state, action) => {
        // axios error
        state.isLogging = false;
        state.data = {};
      });
  },
});

/** custom methods **********/
export const getUser = (state) => state.user;
export const getUserData = (state) => state.user.data;
export const getAddress = (state) => {
  if (state.user.isLogOn) {
    const { zipcode, street, suite, city } = state.user.data.address;
    return `[${zipcode}] ${city} ${street} ${suite}`;
  } else return '';
};

export const { logOut } = userSlice.actions;
export default userSlice.reducer;
