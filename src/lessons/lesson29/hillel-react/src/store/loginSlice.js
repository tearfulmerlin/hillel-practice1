import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'login',
  initialState: false,
  reducers: {
    signin: (state) => {
      state = true;
      // return {
      //   ...state,
      //   isLoggedIn: true
      // }
    },
    signout: (state, action) => {
      state.isLoggedIn = false
    },
  },
});

// store = {
//   cart: [],
// }

// Action creators are generated for each case reducer function
export const { signin, signout } = cartSlice.actions

export default cartSlice.reducer