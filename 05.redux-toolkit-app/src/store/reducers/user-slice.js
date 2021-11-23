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
  console.log(user);
  return user;
});

/** reducer **********/
export const counterSlice = createSlice({
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
      });
  },
});

/** custom methods **********/
export const getUser = (state) => state;
export const getUserData = (state) => state.data;
// export const getUserName = (state) => state.data.username;
export const getAddress = (state) => {
  const { zipcode, street, suite, city } = state.data.address;
  return `[${zipcode}] ${city} ${street} ${suite}`;
};

export const { logOut } = counterSlice.actions;
export default counterSlice.reducer;
