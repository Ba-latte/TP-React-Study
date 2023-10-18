// 카카오 로그인

import styled from "styled-components";

const LoginButton = styled.button`
    display: flex;
    justify-content: center;
    
    img{
        cursor: pointer;
    }
`;



const KakaoLoginButton = ()=>{
    const KAKAO_REST_API_KEY = process.env.REACT_APP_KAKAO_REST_API_KEY; // 백엔드 영역
    const KAKAO_REDIRECT_URI = process.env.REACT_APP_KAKAO_REDIRECT_URI; // 백엔드 영역
    const link = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_REST_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code`;

    // 링크 걸기
    const handleLogin = ()=>{
        window.location.href = link;
    };

    return(
        <>
        <LoginButton onClick={handleLogin}>
            <img src={require('../assets/image/kakao_login_medium_wide.png')} />
        </LoginButton>
        </>
    )
};

export default KakaoLoginButton;