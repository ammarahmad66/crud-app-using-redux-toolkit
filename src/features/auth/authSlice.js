import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUser: null,
  isAuthenticated: false,
  user_array: []
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginUser(state, action) {
      const { email, password } = action.payload
      const user_array = [...state.user_array]
      const existingUser = user_array.find(user => user.email === email && user.password === password)
      if (existingUser) {
        return {
          ...state,
          currentUser: action.payload,
          isAuthenticated: true
        }
      } else {
        return {
          ...state,
          currentUser: null,
          isAuthenticated: false
        }
      }
    },
    signUpUser(state, action) {
      return {
        ...state,
        user_array: [...state.user_array, action.payload],
        currentUser: action.payload,
        isAuthenticated: true
      }
    },
    logout(state) {
      return {
        ...state,
        currentUser: null,
        isAuthenticated: false
      }
    },
  },
});

export const { loginUser, logout, signUpUser } = authSlice.actions;
export default authSlice.reducer;
