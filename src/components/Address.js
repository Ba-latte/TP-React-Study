// 주소찾기 창
import styled, { css } from "styled-components";
import DaumPostcode, { DaumPostcodeEmbed } from "react-daum-postcode";
import { useState, useEffect } from "react";


export default function Address(props) {

    const [isClose, setIsClose] = useState(false);

    
    const address = props.address;
    const setAddress = props.setAddress;


    const PostcodeContainer = styled.div`
    position: absolute;
    width: 100%;
    top: -150%;
    padding: 10px;
    box-sizing: border-box;
    border: 1px solid red;
    background-color: aqua;

    & .header {
        background-color: beige;
        display: flex;
        justify-content: space-between;
        padding: 10px 20px;
    }
`;

    const onCompletePost = (data) => {
        console.log(data.address);
        setAddress(data.address);

        // 주소찾기 창 닫기
        props.setOpenPostcode(false);
    };






    return (
        <>
        <PostcodeContainer>
            <div className="header">
                <div>주소찾기</div>
                <div onClick={()=>{
                    props.setOpenPostcode(false);
                    console.log("닫기버튼 누르면 주소창 닫힘");

                }}>X</div>
            </div>
            <DaumPostcode
                autoClose={false}
                onResize={{height: "100%"}}
                onComplete={onCompletePost}
            />
        </PostcodeContainer>
        </>
    );
}
