import axois from 'axios';

import Login  from '../components/auth/Login';




export const login = ()  => {

    var password = Login.login.password;
    var email = Login.login.email;
    const config = {
        headers: { "Content-Type": "application/json"}
    };

    const body = JSON.stringify({ email, password });


    const res = axois.post("https://localhost:5001/api/LogSignUp/login", body, config);
    console.log(res)


};