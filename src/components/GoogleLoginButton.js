import {GoogleLogin} from "@react-oauth/google";
import {GoogleOAuthProvider} from "@react-oauth/google";

const GoogleLoginButton = () => {

    const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID; // 클라이언트 아이디

    return (
        <>
            <GoogleOAuthProvider clientId={clientId}>
                <GoogleLogin
                    onSuccess={(res) => {
                        console.log("성공 : ", res);
                    }}
                    onFailure={(err) => {
                        console.log("실패 : ", err);
                    }}
                    width={"300px"}
                />
            </GoogleOAuthProvider>
        </>
    );
};

export default GoogleLoginButton;