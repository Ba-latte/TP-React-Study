// 카카오 로그인 페이지

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function KakaoLogin() {
    const navigate = useNavigate();

    // 코드 전체
    const code = window.location.search; // ?code=어쩌고저쩌고
    console.log("코드 : ", code);
    // 인가 코드만
    const authorizationCode = new URL(document.location.toString()).searchParams.get("code"); // 어쩌고저쩌고
    console.log("인가 코드만 : ", authorizationCode);

    // 코드를 백엔드로 보내주기
    // useEffect(()=>{
    //     axios.post(`코드 담아서 보낼 주소`).then((r)=>{
    //         console.log("받은 인가 코드 처리해서 백엔드가 보내주기 성공");
            
    //         // 받아온 토큰 로컬스토리지에 저장해두고 쓰기

    //         // 로그인 성공 페이지로 이동하기
    //         navigate('');
    //     })
    // }, []);

    return(
        <>
        <div>로그인 중...</div>
        </>
    )
}

export default KakaoLogin;
