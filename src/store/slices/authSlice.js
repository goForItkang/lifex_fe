
import { createSlice } from '@reduxjs/toolkit';

import { getInitialUserState, setToken, removeToken, parseJwt } from "../../util/jwtUtil"; 

// 1. 초기 상태 설정
// 앱 로드 시 쿠키를 확인하여 초기 사용자 정보를 가져옵니다.
const initialState = getInitialUserState();

export const authSlice = createSlice({
  name: 'auth', // Slice의 이름
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      const { token, userPayload } = action.payload;
      
      // 1. Redux 상태 업데이트
      state.user = userPayload; 
      state.isAuthenticated = true;

      
      setToken(token); 
    },

    logout: (state) => {
      // 1. Redux 상태 업데이트
      state.user = null;
      state.isAuthenticated = false;

      // 2. 외부 저장소 업데이트 (쿠키)
      removeToken(); // jwtUtil에서 가져온 removeToken 함수 사용
    },

    setUserFromToken: (state, action) => {
        
        const { userPayload } = action.payload;
        state.user = userPayload;
        state.isAuthenticated = true;
    }
  },
});

export const { loginSuccess, logout, setUserFromToken } = authSlice.actions;
export default authSlice.reducer;