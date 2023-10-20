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
    const [userInfo, setUserInfo] = useState({});
    const [인증결과메시지, set인증결과메시지] = useState("");



    // "핸드폰 번호 전송"버튼 클릭시 핸드폰으로 인증번호 전송하기
    const 클릭시폰번호전송 = (event)=>{
        // form태그의 자동 새로고침 기능 막기
        event.preventDefault();

        // 보이지 않는 reCAPTCHA 사용
        // 상단 'firebase/auth' import에서 RecaptchaVerifier 객체 추가
        window.recaptchaVerifier = new RecaptchaVerifier(auth, "submit-phoneNumber-button", {
            'size': 'invisible',
            'callback': (response) => {
            // reCAPTCHA solved, allow signInWithPhoneNumber.
            // onSignInSubmit();
            }
        });

        // 사용자 핸드폰으로 인증 코드 전송
        const phoneNumber = 핸드폰번호;
        const appVerifier = window.recaptchaVerifier;

        // 핸드폰 번호로 로그인하기
        // signInWithPhoneNumber()메서드는 사용자에게 reCAPTCHA 테스트 제시하고 사용자가 통과하면 파이어베이스 인증에서 사용자의 핸드폰으로 인증코드가 들어간 SMS 메시지를 보내도록 함
        signInWithPhoneNumber(auth, "+82"+phoneNumber, appVerifier)
        .then((confirmationResult) => {
            // SMS 발송 성공
            console.log("SMS 발송 성공 : ", confirmationResult);

            window.confirmationResult = confirmationResult;

        }).catch((error) => {
            // SMS 발송 실패
            console.log("SMS 발송 실패 : ", error);
        });
    };

    
    
    // "확인 코드 전송"버튼 클릭시 인증 번호 보내기
    const 클릭시확인코드전송 = (event)=>{
        // form태그 기본 기능 막기
        event.preventDefault();
        
        const code = 인증번호;

        // 인증번호 검사하기
        window.confirmationResult.confirm(code).then((result) => {
        // 인증 성공시
        console.log("인증 성공 : ", result);

        const user = result.user;
        console.log("유저의 uid 정보 : ", result.user.uid);
        console.log("유저의 핸드폰번호 정보 : ", result.user.phoneNumber);

        set인증결과메시지("인증에 성공했습니다!");

        }).catch((error) => {
        // 인증 실패시
        console.log("인증 실패 : ", error);

        set인증결과메시지("인증에 실패했습니다.");
        });
    };

    return(
        <>
        <form>
            <h2>핸드폰 번호 입력</h2>
            핸드폰 번호 : 
            <input onChange={(event)=>{set핸드폰번호(event.target.value)}}/>
            <button id="submit-phoneNumber-button" onClick={클릭시폰번호전송}>핸드폰 번호 전송</button>
        </form>
        <form>
            <h2>인증 번호 입력</h2>
            확인 코드 : 
            <input onChange={(event)=>{set인증번호(event.target.value)}} />
            <button id="submit-code-button" onClick={클릭시확인코드전송}>확인 코드 전송</button>
        </form>

        <h3>{인증결과메시지}</h3>
        </>
    )
}

export default FirebaseMessage;