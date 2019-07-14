/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
import auth0 from 'auth0-js';

const LOGIN_SUCCESS_PAGE = "/secret";
const LOGIN_FAILURE_PAGE = "/"

class Auth0 {
    auth0 = new auth0.WebAuth({
        domain: "demo21.auth0.com",
        clientID: "9nBW3b9nFzCL62EoD3A8SVrEkPTNEJv2",
        redirectUri: "http://localhost:3000/callback",
        audience: "https://demo21.auth0.com/userInfo",
        responseType: "token id_token",
        scope: "openid"
    })
    constructor() {
        this.login = this.login.bind(this);
    }
    login() {
        this.auth0.authorize();
    }

    handleAuthentication() {
        this.auth0.parseHash((err, authResults) => {
            if(authResults && authResults.accessToken && authResults.idToken) {
                let expiresAt = JSON.stringify((authResults.expiresIn)*1000 + new Date().getTime());
                localStorage.setItem("accessToken", authResults.accessToken);
                localStorage.setItem("id_token", authResults.idToken);
                localStorage.setItem("expires_at", expiresAt);
                localStorage.hash = "";
                location.pathname = LOGIN_SUCCESS_PAGE;
            }else if(err) {
                location.pathname = LOGIN_FAILURE_PAGE;
                console.group(err)
            }
        })
    }

    isAuthenticate() {
        let expiresAt = JSON.parse(localStorage.getItem("expires_at"));
        return  new Date().getTime() < expiresAt;
    }

}

export default Auth0;