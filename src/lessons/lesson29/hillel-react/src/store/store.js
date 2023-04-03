// import { createStore } from 'redux';


// const initialState = []

// export const ADD = 'add';
// const addAction = (payload) => {
//   type: ADD,
//   payload,
// }

// const storeReducer = (state, action) => {
//   switch(action.type) {
//     case ADD:
//       return [
//         ...state,
//         action.payload,
//       ];
//     case 'remove':
//       return state.filter((item) => item.title !== action.payload.title)
    
//   }
// }

// const store = createStore(initialState, storeReducer)

import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './cartSlice';
import loginSlice from './loginSlice';

export default configureStore({
  reducer: {
    cart: cartSlice,
    login: loginSlice,
  },
})

// store

// action

// dispatcher

// reducer

// selector