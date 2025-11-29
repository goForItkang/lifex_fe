// src/app/store.js

import { configureStore } from '@reduxjs/toolkit';
// authSlice에서 내보낸 기본 리듀서를 가져옵니다.
import authReducer from './slices/authSlice'; 

export const store = configureStore({
  // 1. Root Reducer 정의
  // reducer 객체에 모든 Slice의 리듀서를 등록합니다.
  reducer: {
    // 'auth'라는 키 이름으로 authSlice의 상태를 관리합니다.
    auth: authReducer, 
    
    // 이후 다른 기능(예: posts, cart 등)을 추가할 때 여기에 등록합니다.
    // posts: postsReducer,
  },

  // 2. 개발 도구 설정 (기본값)
  // devTools를 true로 설정하여 Redux DevTools 확장 프로그램을 사용할 수 있게 합니다.
  // configureStore가 기본적으로 활성화하지만 명시적으로 남겨둘 수 있습니다.
  devTools: process.env.NODE_ENV !== 'production',
});

// TypeScript 환경이 아닐 경우 다음 코드는 선택 사항입니다.
// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

// 이 store 객체를 src/index.js에서 Provider에 전달합니다.