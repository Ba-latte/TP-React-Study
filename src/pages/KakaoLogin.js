// 카카오 로그인 페이지

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import axios from "axios";
import { useSelector } from "react-redux";

const KakaoLoginSection = styled.section`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);

    div {
        font-size: 30px;
        color: #fff;
    }
`;





function KakaoLogin() {
    const navigate = useNavigate();
    
    
    // 코드를 백엔드로 보내주기
    useEffect(()=>{
        // 코드 전체
        const code = window.location.search; // ?code=어쩌고저쩌고
        console.log("코드 : ", code);
        // 인가 코드만
        const authorizationCode = new URL(document.location.toString()).searchParams.get("code"); // 어쩌고저쩌고
        console.log("인가 코드만 : ", authorizationCode);
    
    
        // ~~~~ 요청 보낼 때 본문 내용 ~~~~
        // grant_type : authorization_code로 고정
        const grant_type = "authorization_code";
        // client_id : 앱 REST API키
        const client_id = `${process.env.REACT_APP_KAKAO_REST_API_KEY}`;
        // redirect_uri : 인가 코드가 리다이렉트된 URI
        const redirect_uri= `${process.env.REACT_APP_KAKAO_REDIRECT_URI}`;

        axios.post(`https://kauth.kakao.com/oauth/token?grant_type=${grant_type}&client_id=${client_id}&redirect_uri=${redirect_uri}&code=${authorizationCode}`,
        {},
        {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
            }
        })
        .then((res)=>{
            // console.log("받은 인가 코드 처리해서 백엔드가 보내주기 성공");
            console.log("성공 : ", res);

            // 받아온 토큰 로컬스토리지에 저장해두고 쓰기..?

            // 로그인 성공했으니까 로그인 체크하는 state 바꾸기..?

            // 로그인 성공 페이지로 이동하기
            navigate('/');
        })
    }, []);

    return (
        <>
            <KakaoLoginSection>
                <div>로그인 중입니다.</div>
            </KakaoLoginSection>
        </>
    );
}

export default KakaoLogin;
