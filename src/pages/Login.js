// 로그인 페이지

import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import KakaoLoginButton from "../components/KakaoLoginButton";

const LogInSection = styled.section`
    width: 100%;
    height: 100%;
`;

const LogInContainer = styled.div`
    height: calc(100vh - 41px);
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;

    /* border: 1px dashed red; */

    form{
        display: flex;
        flex-direction: column;
        gap: 15px;
    }
    input{
        width: 403px;
        height: 45px;
        display: block;
        border: 1px solid #CECECE;
        border-radius: 8px;
    }
    div{
        display: flex;
        gap: 10px;
    }
`;

const Button = styled.button`
    width: 100%;
    height: 45px;
    background-color: var(--color-mainPink);
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
`;
const SmallButton = styled(Button)`
    width: calc(50% - 5px);
    background-color: var(--color-mainGreen);
`;


export default function LogIn(){
    const navigate = useNavigate();

    return(
        <section>
            <LogInContainer>
                <form method="POST" action="/">
                    <input
                        type="text"
                        placeholder="아이디"/>
                    <input 
                        type="password"
                        placeholder="비밀번호"/>
                    <Button>로그인</Button>

                    {/* 카카오 소셜 로그인 */}
                    
                    {/* 애플 소셜 로그인 */}
                    
                    {/* 회원가입, 아이디/비밀번호 찾기 */}
                    <div>
                        <SmallButton onClick={()=>{ navigate('/member') }}>회원가입</SmallButton>
                        <SmallButton onClick={()=>{}}>아이디/비밀번호 찾기</SmallButton>
                    </div>
                </form>
            </LogInContainer>
        </section>
    )
}