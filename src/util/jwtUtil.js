// JWT payload 파싱
import Cookies from "js-cookie";
export const parseJwt = (token) => {
    try {
        const base64Url = token.split(".")[1];
        const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
        const jsonPayload = decodeURIComponent(
            atob(base64)
                .split("")
                .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
                .join("")
        );
        return JSON.parse(jsonPayload);
    } catch (e) {
        return null;
    }
};

// 토큰 저장 쿠키 
export const setToken = (token) => {
    Cookies.set("Authorization", token, { expires: 1 });
};

// 토큰 가져오기
export const getToken = () => {
    return Cookies.get("Authorization");
};

// 토큰 삭제
export const removeToken = () => {
    Cookies.remove("Authorization");
};

// 토큰 만료 여부 체크
export const isExpired = (token) => {
    const decoded = parseJwt(token);
    if (!decoded || !decoded.exp) return true;

    const current = Math.floor(Date.now() / 1000);
    console.log("isExpired: decoded.exp:", decoded.exp);
    console.log("isExpired: current time:", current);
    console.log("isExpired: is token expired?", decoded.exp < current);
    return decoded.exp < current;
};
export const getInitialUserState = () => {
    const token = getToken();
    
    // 토큰이 없거나 만료되었으면 인증되지 않은 상태 반환
    if (!token || isExpired(token)) {
        return {
            user: null,
            isAuthenticated: false
        };
    }
    
    // 유효한 토큰이면 사용자 정보 반환
    const payload = parseJwt(token);
    return {
        user: payload, // user 객체에 JWT payload (id, name 등)가 들어갑니다.
        isAuthenticated: true
    };
};