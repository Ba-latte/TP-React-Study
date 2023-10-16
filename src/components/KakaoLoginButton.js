// 카카오 로그인

const KakaoLoginButton = ()=>{
    const KAKAO_REST_API_KEY = process.env.REACT_APP_KAKAO_REST_API_KEY; // 백엔드 영역
    const KAKAO_REDIRECT_URI = process.env.REACT_APP_KAKAO_REDIRECT_URI; // 백엔드 영역
    const link = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_REST_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code`;

    // 링크 걸기
    const loginHandler = ()=>{
        window.location.href = link;
    };

    return(
        <button onClick={loginHandler}>카카오 로그인</button>
    )
};

export default KakaoLoginButton;