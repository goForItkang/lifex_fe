import React from 'react';

const CallBack = ({data,isLoading,error}) => {
    if(!data){
        return<div>데이터가 없습니다.</div>
    }
    if(isLoading){
        return<div>로딩중입니다. 잠시만 기다려주세요.</div>
    }
    if(error){
        return<div>데이터를 가져오는중 에러가 발생했습니다.</div>
    }
};

export default CallBack;