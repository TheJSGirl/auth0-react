import auth0 from 'auth0-js';

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

}

export default Auth0;