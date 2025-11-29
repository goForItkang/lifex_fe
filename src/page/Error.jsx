import React from 'react';

const Error = ({error_code}) => {
    const message = {
        404: "페이지를 찾을 수 없습니다.",
        403: "권한한이 필요합니다.",
        401: "로그인이 필요합니다",
        500: "서버에 에러가 났습니다 관리자에게 문의 해주세요"
    }
    
    return (
        <div>

            
        </div>
    );
};

export default Error;   