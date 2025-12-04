import { QueryClient } from "@tanstack/react-query";
// 로그아웃시 react 쿼리에 남아있는 캐시 삭제 
export const queryClient = new QueryClient();