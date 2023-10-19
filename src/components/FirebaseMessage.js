// 파이어베이스 앱

import { useRef, useState } from "react";
// 파이어베이스 초기화, 앱 객체 생성
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

// 파이어베이스 구성
const firebaseConfig = {
    apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
    authDomain: `${process.env.REACT_APP_FIREBASE_AUTH_DOMAIN}`,
    projectId: `${process.env.REACT_APP_FIREBASE_PROJECT_ID}`,
    storageBucket: `${process.env.REACT_APP_FIREBASE_STORAGE_BUCKET}`,
    messagingSenderId: `${process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID}`,
    appId: `${process.env.REACT_APP_FIREBASE_APP_ID}`,
    measurementId: `${process.env.REACT_APP_FIREBASE_MEASUREMENT_ID}`
};
// 파이어베이스 초기화
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
// 문자인증-언어코드 추가 : 한국어인 'ko'로 수정
auth.languageCode = 'ko';


function FirebaseMessage(){
    const [핸드폰번호, set핸드폰번호] = useState("");
    const [인증번호, set인증번호] = useState("");
    const 핸드폰번호전송버튼 = useRef();

    // 보이지 않는 reCAPTCHA 사용
    // 상단 'firebase/auth' import에서 RecaptchaVerifier 객체 추가
    window.recaptchaVerifier = new RecaptchaVerifier(auth, 핸드폰번호전송버튼, {
        'size': 'invisible',
        'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        // onSignInSubmit();
        }
    });

    // "핸드폰 번호 전송"버튼 클릭시 핸드폰으로 인증번호 전송하기
    const 클릭시폰번호전송 = (event)=>{
        // form태그의 자동 새로고침 기능 막기
        event.preventDefault();
        console.log(window.recaptchaVerifier);

        // 사용자 핸드폰으로 인증 코드 전송
        const phoneNumber = 핸드폰번호;
        const appVerifier = window.recaptchaVerifier;

        // 핸드폰 번호로 로그인하기
        // signInWithPhoneNumber()메서드는 사용자에게 reCAPTCHA 테스트 제시하고 사용자가 통과하면 파이어베이스 인증에서 사용자의 핸드폰으로 인증코드가 들어간 SMS 메시지를 보내도록 함
        signInWithPhoneNumber(auth, "+82"+phoneNumber, appVerifier)
        .then((confirmationResult) => {
            console.log("성공 : ", confirmationResult);
            // SMS 발송
            window.confirmationResult = confirmationResult;
        }).catch((error) => {
            // Error; SMS not sent
            console.log("실패 : ", error);
        });
    };

    return(
        <>
        <form>
            <h2>핸드폰 번호 입력</h2>
            핸드폰 번호 : 
            <input onChange={(event)=>{set핸드폰번호(event.target.value)}}/>
            <button ref={핸드폰번호전송버튼} onClick={클릭시폰번호전송}>핸드폰 번호 전송</button>
        </form>
        <form>
            <h2>인증 번호 입력</h2>
            확인 코드 : 
            <input />
            <button>확인 코드 전송</button>
        </form>
        </>
    )
}

export default FirebaseMessage;