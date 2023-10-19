// 메인 페이지

import FirebaseMessage from "../components/FirebaseMessage";
import GoogleLoginButton from "../components/GoogleLoginButton";
import KakaoLoginButton from "../components/KakaoLoginButton";
import NaverLogin from "../components/NaverLogin";

export default function Main(){
    return(
        <div>
            <h2>메인 페이지</h2>
            <KakaoLoginButton />
            <h2>문자 인증</h2>
            <FirebaseMessage />
        </div>
    )
}